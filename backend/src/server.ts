import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'development_secret_key_123';

app.use(cors());
app.use(express.json());

// In-memory cache for MFA codes. In production, use Redis or a Database.
// Map: tempToken -> { code: string, expiresAt: number, email: string }
const mfaCache = new Map<string, { code: string, expiresAt: number, email: string }>();

// MOCK: Generate a random 6-digit MFA code
const generateMfaCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

app.post('/api/auth/login', (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    // MOCK: Authenticate against GLPI / Active Directory here
    // For demonstration, we allow any email as long as password is "password"
    if (password !== 'password') {
        return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const tempToken = crypto.randomUUID();
    const code = generateMfaCode();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    mfaCache.set(tempToken, { code, expiresAt, email });

    // MOCK: Send email/SMS with the code here
    console.log(`[MFA] Code for ${email} is: ${code}`);

    res.json({
        status: 'mfa_required',
        tempToken,
        message: 'A verification code has been sent to your device.',
    });
});

app.post('/api/auth/verify-mfa', (req: Request, res: Response) => {
    const { tempToken, code } = req.body;

    if (!tempToken || !code) {
        return res.status(400).json({ error: 'Token and code are required.' });
    }

    const mfaData = mfaCache.get(tempToken);

    if (!mfaData) {
        return res.status(400).json({ error: 'Invalid or expired session.' });
    }

    if (Date.now() > mfaData.expiresAt) {
        mfaCache.delete(tempToken);
        return res.status(400).json({ error: 'Verification code expired.' });
    }

    if (mfaData.code !== code) {
        return res.status(400).json({ error: 'Invalid verification code.' });
    }

    // MOCK: If successful, we would now request a real Session-Token from the GLPI API.
    // For now, we just issue our own JWT to represent the authenticated state.
    const sessionToken = jwt.sign(
        { email: mfaData.email, role: 'admin' },
        JWT_SECRET,
        { expiresIn: '8h' }
    );

    // Clean up
    mfaCache.delete(tempToken);

    res.json({
        status: 'success',
        sessionToken,
        user: { email: mfaData.email, role: 'admin', name: 'Admin User' }
    });
});

// A simple protected route example to test the token
app.get('/api/auth/me', (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ user: decoded });
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend Auth API listening at http://localhost:${PORT}`);
});

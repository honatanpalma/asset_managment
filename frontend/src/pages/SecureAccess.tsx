import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';

export default function SecureAccess() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const tempToken = location.state?.tempToken;

  useEffect(() => {
    // Optional: focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  if (!tempToken) {
    // If accessed directly without a tempToken, redirect back to login
    return <Navigate to="/" replace />;
  }

  const handleChange = (index: number, value: string) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input automatically if value is entered
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);

      // Focus the next empty input or the last one
      const nextEmptyIndex = newCode.findIndex(val => val === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join('');

    if (fullCode.length !== 6) {
      setError('Please enter the full 6-digit code.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/verify-mfa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tempToken, code: fullCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify code');
      }

      if (data.status === 'success') {
        // Store the real session token
        localStorage.setItem('glpi_session', data.sessionToken);
        // Navigate to the dashboard
        navigate('/dashboard', { replace: true });
      }
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="layout-container flex h-full grow flex-col">
      {/* Navigation Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">IT Asset Manager</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">help</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-[480px] w-full bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Visual Header */}
          <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmhqsnwxb3QY_oL_Nz6ogGxS29lrcpeaO5ma3AMZECMWMvAzU7czmcN3EL8ZH5xfBOOBwy-RV_LgiS_qRbckQSB-mSPLjhCIaY9b4x7BR2J5nyZauqvtJnNezkbJ2q1UKFEaXLunDCQo5-2OMBmroKV9vzVNmncx9GXzn1ivfwWdBAB4HzGzIyPx38iiJQ6xS4uaZx_jO1WW_JInrNyvnZnUZrg6tvI2voHr53iritlRzHYZg25A-miR8bGidBQC1eVZMZaz90LVE')" }}></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="size-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg mb-4">
                <span className="material-symbols-outlined text-4xl">shield_person</span>
              </div>
              <div className="text-primary font-bold text-sm uppercase tracking-widest">Secure Access</div>
            </div>
          </div>

          {/* MFA Form Section */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Verify Your Identity</h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                We've sent a 6-digit verification code to your registered device. Please enter it below to continue.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Code Inputs */}
              <div className="flex justify-between gap-2 sm:gap-4" onPaste={handlePaste}>
                {[0, 1, 2].map((i) => (
                  <input
                    key={`mfa-input-${i}`}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    className="w-12 h-14 text-center text-2xl font-bold border-b-2 border-slate-300 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-0 outline-none text-slate-900 dark:text-slate-100 transition-colors"
                    maxLength={1}
                    type="text"
                    value={code[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                  />
                ))}
                <span className="flex items-center text-slate-300 dark:text-slate-700 font-bold">-</span>
                {[3, 4, 5].map((i) => (
                  <input
                    key={`mfa-input-${i}`}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    className="w-12 h-14 text-center text-2xl font-bold border-b-2 border-slate-300 dark:border-slate-700 bg-transparent focus:border-primary focus:ring-0 outline-none text-slate-900 dark:text-slate-100 transition-colors"
                    maxLength={1}
                    type="text"
                    value={code[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
                  <span>{isLoading ? 'Verifying...' : 'Verify & Continue'}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <div className="text-center">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Didn't receive the code?
                    <button type="button" className="text-primary font-semibold hover:underline ml-1" onClick={() => alert('Look at the backend server console log for the mock code!')}>Resend Code</button>
                  </p>
                </div>
              </div>
            </form>

            {/* Trust/Security Indicator */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-slate-400 dark:text-slate-600 text-xs">
              <span className="material-symbols-outlined text-base">verified_user</span>
              <span>End-to-end encrypted session</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-slate-400 dark:text-slate-600 text-xs">
        <p>© 2024 IT Asset Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}

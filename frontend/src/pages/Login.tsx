import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }

      if (data.status === 'mfa_required') {
        // Pass the tempToken to the secure-access route
        navigate('/secure-access', { state: { tempToken: data.tempToken } });
      }
    } catch (err) {
      const error = err as Error;
      setError(error.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]"></div>
      </div>
      <div className="relative z-10 w-full max-w-[480px]">
        <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="p-8 pb-0 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2.5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-3xl">inventory_2</span>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">IT Asset Manager</h1>
            </div>
          </div>
          <div className="px-8 py-2">
            <div className="w-full h-48 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjQwvC_SfAcTwRvGHuEIjkawOHWWHFS_O5Btz42qiBdh_Hpi63PhcUPHrR8FmqoAx2XwXZwnI6nkLuVnpIYayqBKZI7CqpvwlHp_OP1DAIhEqP4C-3DDsCve9zWicWdSMUhcpNsWXUQRIIKX56AI-a24hERu4R205oR2RBKZyMJCqQmrGYzgko4u5E12tKxPLJq043DiuzP3ztUBx9wIEdKjTSCbl76TbOycQQLU76AwxFqUgb5j2cayu5mjPAaCgfJysPRz7qKAQ')" }}></div>
            </div>
            <div className="space-y-2 mb-6 text-center">
              <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Sign in to manage your corporate inventory</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-slate-100 outline-none"
                    placeholder="name@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold">Password</label>
                  <a className="text-xs text-primary font-semibold hover:underline" href="#">Forgot password?</a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-slate-100 outline-none"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">Hint: Use any email and password "password"</p>
              </div>
              <div className="flex items-center">
                <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800" id="remember-me" name="remember-me" type="checkbox" />
                <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">Remember me for 30 days</label>
              </div>
              <button disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-primary/20" type="submit">
                <span>{isLoading ? 'Signing In...' : 'Sign In'}</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">login</span>
              </button>
            </form>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              New to the platform? <a className="text-primary font-bold hover:underline" href="#">Request access</a>
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">help</span>
            Support
          </button>
          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">language</span>
            English (US)
          </button>
          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[18px]">policy</span>
            Privacy
          </button>
        </div>
      </div>
    </div>
  );
}

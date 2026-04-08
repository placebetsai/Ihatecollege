import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AuthModal({ onClose, onSuccess, mode: initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'signup' | 'forgot' | 'reset-sent' | 'signup-sent' | 'login-success'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setError('');
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) {
        if (err.message.includes('Invalid login')) {
          setError('Wrong email or password. Try again or reset your password.');
        } else if (err.message.includes('Email not confirmed')) {
          setError('Check your email and click the confirmation link first.');
        } else {
          setError(err.message);
        }
        return;
      }
      setMode('login-success');
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim()) { setError('Username is required'); return; }
    if (username.trim().length < 3) { setError('Username must be at least 3 characters'); return; }
    if (!/^[a-zA-Z0-9_]+$/.test(username.trim())) { setError('Username can only contain letters, numbers, and underscores'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return; }

    setLoading(true);
    try {
      const { error: err } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username: username.trim(), display_name: username.trim() },
        },
      });
      if (err) {
        if (err.message.includes('already registered')) {
          setError('This email is already registered. Try logging in instead.');
        } else {
          setError(err.message);
        }
        return;
      }
      setMode('signup-sent');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) { setError('Enter your email address'); return; }
    setLoading(true);
    try {
      const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://ihatecollege.com/rank-your-school',
      });
      if (err) {
        setError(err.message);
        return;
      }
      setMode('reset-sent');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const backdrop = "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4";
  const modal = "bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-sm w-full";
  const inputClass = "w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500";

  // ── Success: Account created, check email ──
  if (mode === 'signup-sent') {
    return (
      <div className={backdrop} onClick={onClose}>
        <div className={`${modal} text-center`} onClick={e => e.stopPropagation()}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-900/40 border border-green-500/40 flex items-center justify-center">
            <span className="text-3xl">&#x2709;</span>
          </div>
          <h3 className="text-white text-xl font-bold mb-2">Account created!</h3>
          <p className="text-slate-400 text-sm mb-2">We sent a confirmation link to:</p>
          <p className="text-white font-bold text-sm mb-4">{email}</p>
          <div className="bg-slate-800 rounded-lg p-3 mb-4">
            <p className="text-slate-400 text-xs">Click the link in your email to activate your account. Then come back and log in.</p>
          </div>
          <button onClick={onClose} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-bold transition">
            Got it
          </button>
          <p className="text-slate-600 text-xs mt-3">Didn&apos;t get it? Check your spam folder.</p>
        </div>
      </div>
    );
  }

  // ── Success: Logged in ──
  if (mode === 'login-success') {
    return (
      <div className={backdrop}>
        <div className={`${modal} text-center`}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-900/40 border border-green-500/40 flex items-center justify-center">
            <span className="text-3xl">&#x2713;</span>
          </div>
          <h3 className="text-white text-xl font-bold mb-2">You&apos;re in!</h3>
          <p className="text-slate-400 text-sm">Welcome back. Redirecting...</p>
        </div>
      </div>
    );
  }

  // ── Success: Password reset email sent ──
  if (mode === 'reset-sent') {
    return (
      <div className={backdrop} onClick={onClose}>
        <div className={`${modal} text-center`} onClick={e => e.stopPropagation()}>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-900/40 border border-sky-500/40 flex items-center justify-center">
            <span className="text-3xl">&#x1F511;</span>
          </div>
          <h3 className="text-white text-xl font-bold mb-2">Check your email</h3>
          <p className="text-slate-400 text-sm mb-2">We sent a password reset link to:</p>
          <p className="text-white font-bold text-sm mb-4">{email}</p>
          <button onClick={() => { setMode('login'); setError(''); }} className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-sm font-bold transition mb-2">
            Back to Log In
          </button>
          <button onClick={onClose} className="w-full py-2 text-slate-500 hover:text-slate-300 text-sm font-bold transition">
            Close
          </button>
        </div>
      </div>
    );
  }

  // ── Forgot password form ──
  if (mode === 'forgot') {
    return (
      <div className={backdrop} onClick={onClose}>
        <div className={modal} onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-xl font-bold">Reset Password</h3>
            <button onClick={onClose} className="text-slate-500 hover:text-white text-xl leading-none">&times;</button>
          </div>
          <p className="text-slate-400 text-sm mb-4">Enter your email and we&apos;ll send you a link to reset your password.</p>
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" className={inputClass} required />
            </div>
            {error && <p className="text-red-400 text-sm font-semibold">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-700 text-white font-bold rounded-lg transition text-sm">
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
          <p className="text-center text-slate-500 text-xs mt-4">
            Remember it? <button onClick={() => { setMode('login'); setError(''); }} className="text-red-400 hover:text-red-300 font-bold">Log in</button>
          </p>
        </div>
      </div>
    );
  }

  // ── Login / Signup form ──
  return (
    <div className={backdrop} onClick={onClose}>
      <div className={modal} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl font-bold">{mode === 'login' ? 'Log In' : 'Create Account'}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white text-xl leading-none">&times;</button>
        </div>

        <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                placeholder="Pick a username"
                className={inputClass}
                required
                maxLength={30}
              />
              <p className="text-[11px] text-slate-600 mt-1">Letters, numbers, underscores only</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" className={inputClass} required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={mode === 'signup' ? '6+ characters' : 'Your password'} className={inputClass} required />
            {mode === 'login' && (
              <button type="button" onClick={() => { setMode('forgot'); setError(''); }} className="text-[11px] text-slate-500 hover:text-red-400 mt-1 font-semibold">
                Forgot password?
              </button>
            )}
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-900/30 border border-red-700/50">
              <p className="text-red-400 text-sm font-semibold">{error}</p>
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full py-3 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 text-white font-bold rounded-lg transition text-sm">
            {loading ? 'Hold on...' : mode === 'login' ? 'Log In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-xs mt-4">
          {mode === 'login' ? (
            <>No account? <button onClick={() => { setMode('signup'); setError(''); resetForm(); }} className="text-red-400 hover:text-red-300 font-bold">Sign up free</button></>
          ) : (
            <>Already have one? <button onClick={() => { setMode('login'); setError(''); resetForm(); }} className="text-red-400 hover:text-red-300 font-bold">Log in</button></>
          )}
        </p>
      </div>
    </div>
  );
}

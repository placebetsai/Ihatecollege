import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AuthModal({ onClose, onSuccess, mode: initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!username.trim()) { setError('Username required'); setLoading(false); return; }
        if (username.length < 3) { setError('Username must be 3+ characters'); setLoading(false); return; }
        if (password.length < 6) { setError('Password must be 6+ characters'); setLoading(false); return; }

        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username: username.trim(), display_name: username.trim() },
          },
        });
        if (signUpError) throw signUpError;
        setSent(true);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        onSuccess?.();
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4" onClick={onClose}>
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
          <div className="text-4xl mb-3">&#x2709;</div>
          <h3 className="text-white text-xl font-bold mb-2">Check your email</h3>
          <p className="text-slate-400 text-sm mb-4">We sent a confirmation link to <strong className="text-white">{email}</strong>. Click it to activate your account.</p>
          <button onClick={onClose} className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition">Got it</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-sm w-full" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl font-bold">{mode === 'login' ? 'Log In' : 'Create Account'}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-white text-xl leading-none">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Pick a username"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                maxLength={30}
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={mode === 'signup' ? '6+ characters' : 'Your password'}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-red-600 hover:bg-red-500 disabled:bg-slate-700 text-white font-bold rounded-lg transition text-sm"
          >
            {loading ? 'Hold on...' : mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-slate-500 text-xs mt-4">
          {mode === 'login' ? (
            <>No account? <button onClick={() => { setMode('signup'); setError(''); }} className="text-red-400 hover:text-red-300 font-bold">Sign up</button></>
          ) : (
            <>Already have one? <button onClick={() => { setMode('login'); setError(''); }} className="text-red-400 hover:text-red-300 font-bold">Log in</button></>
          )}
        </p>
      </div>
    </div>
  );
}

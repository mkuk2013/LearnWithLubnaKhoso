import React, { useState } from 'react';
import { Lock, User, LogIn, ChevronRight } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded check for demonstration. 
    // In a real app, this would be a server-side check.
    if (password === 'lubna@2024') {
    onLogin();
  } else {
    setError('Invalid password. Please try again.');
}
  };

  return (
    <div className="container" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '4rem 0'
    }}>
      <div className="glass-card reveal-cinema" style={{ width: '100%', maxWidth: '550px', padding: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            background: 'rgba(212, 175, 55, 0.03)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 3rem',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.1)'
          }}>
            <Lock className="text-gold" size={45} />
          </div>
          <span className="hero-tag" style={{ marginBottom: '1.5rem' }}>Secure Authorization</span>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-display)' }}>Academy <span className="text-reveal">Portal</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '1rem', fontWeight: '300' }}>Access restricted to authorized faculty members only.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group" style={{ marginBottom: '3.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <User size={16} /> FACULTY IDENTITY
            </label>
            <input 
              type="text" 
              value="LUBNA KHOSO" 
              disabled 
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.4rem 2rem', borderRadius: '15px', color: '#fff', width: '100%', opacity: 0.4, cursor: 'not-allowed', letterSpacing: '0.1em', fontWeight: '700' }}
            />
          </div>
          <div className="input-group" style={{ marginBottom: '4rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <Lock size={16} /> SECURE KEYCODE
            </label>
            <input 
              type="password" 
              placeholder="Enter encrypted passcode" 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              required
              autoFocus
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.4rem 2rem', borderRadius: '15px', color: '#fff', width: '100%', fontSize: '1rem' }}
            />
          </div>

          {error && (
            <p style={{ color: '#ff4757', fontSize: '0.9rem', fontWeight: '700', marginBottom: '3rem', textAlign: 'center', letterSpacing: '0.05em' }}>
              &bull; {error.toUpperCase()} &bull;
            </p>
          )}

          <button type="submit" className="btn-elite" style={{ width: '100%', gap: '1.5rem' }}>
            <LogIn size={24} /> AUTHORIZE ACCESS <ChevronRight size={22} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.1em', opacity: 0.5 }}>
          2FA ENABLED &bull; SECURE SESSION
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

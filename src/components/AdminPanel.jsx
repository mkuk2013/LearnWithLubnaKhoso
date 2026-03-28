import React, { useState } from 'react';
import { Plus, Trash2, Globe, List, Layout, ExternalLink } from 'lucide-react';

const AdminPanel = ({ videos, onAddVideo, onDeleteVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    onAddVideo({ id: Date.now(), title, url });
    setTitle('');
    setUrl('');
  };

  return (
    <div className="container" style={{ padding: '12rem 0' }}>
      <div className="reveal-cinema" style={{ marginBottom: '8rem' }}>
        <span className="hero-tag">Faculty Management</span>
        <h1 style={{ fontSize: '5rem', marginBottom: '2rem' }}>Media <span className="text-reveal">Director</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.4rem', maxWidth: '700px', fontWeight: '300', lineHeight: '1.6' }}>
          Welcome, Lubna. Orchestrate your educational empire with refined precision.
        </p>
      </div>

      <div className="dashboard-grid">
        {/* Add Section */}
        <div className="glass-card reveal-cinema" style={{ padding: '4rem', animationDelay: '0.2s', alignSelf: 'start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <Plus className="text-gold" size={32} />
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>New Entry</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group" style={{ marginBottom: '3rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>CONTENT TITLE</label>
              <input 
                type="text" 
                placeholder="Ex. Structural Engineering Mastery" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.4rem 2rem', borderRadius: '15px', color: '#fff', width: '100%', fontSize: '1rem' }}
              />
            </div>
            <div className="input-group" style={{ marginBottom: '4rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.2em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>YOUTUBE ENDPOINT</label>
              <input 
                type="url" 
                placeholder="https://youtube.com/..." 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.4rem 2rem', borderRadius: '15px', color: '#fff', width: '100%', fontSize: '1rem' }}
              />
            </div>
            <button type="submit" className="btn-elite" style={{ width: '100%' }}>
              <Plus size={24} /> PUBLISH CONTENT
            </button>
          </form>
        </div>

        {/* List Section */}
        <div className="glass-card reveal-cinema" style={{ padding: '4rem', animationDelay: '0.4s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <List className="text-gold" size={32} />
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)' }}>Archive Feed</h2>
             </div>
             <div style={{ padding: '0.8rem 2rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--primary)', border: '1px solid var(--glass-border)', background: 'rgba(212,175,55,0.05)' }}>
               {videos.length} ENTRIES
             </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {videos.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '8rem 2rem', color: 'var(--text-muted)' }}>
                <Layout size={80} style={{ opacity: 0.05, marginBottom: '3rem' }} />
                <p style={{ fontStyle: 'italic', fontSize: '1.3rem', fontWeight: '300' }}>Your professional library is currently awaiting mission-critical content.</p>
              </div>
            ) : (
              videos.map((video) => (
                <div key={video.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '2rem 2.5rem',
                  borderRadius: '25px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(212, 175, 55, 0.05)',
                  transition: '0.3s'
                }}>
                  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ background: 'var(--bg-deep)', width: '60px', height: '600px', maxHeight: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                      <Globe size={28} className="text-gold" />
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '0.5rem' }}>{video.title}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', opacity: 0.6, letterSpacing: '0.05em' }}>
                          <ExternalLink size={14} /> SESSION SOURCE
                        </a>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onDeleteVideo(video.id)}
                    style={{ padding: '1rem', color: '#ff4757', borderRadius: '15px', border: 'none', background: 'rgba(255, 71, 87, 0.08)', cursor: 'pointer', transition: '0.3s' }}
                    title="Delete Video"
                  >
                    <Trash2 size={24} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';

function App() {
  const [view, setView] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('lubna_auth') === 'true';
  });
  
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem('lubna_videos');
    return saved ? JSON.parse(saved) : [];
  });

  // Simple path-based routing
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/admin') {
        setView('admin');
      } else {
        setView('home');
      }
    };

    // Initial check
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    localStorage.setItem('lubna_videos', JSON.stringify(videos));
  }, [videos]);

  const handleViewChange = (newView) => {
    if (newView === view) return;
    setIsTransitioning(true);
    
    // Update URL without reload
    const path = newView === 'admin' ? '/admin' : '/';
    window.history.pushState({}, '', path);

    setTimeout(() => {
      setView(newView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 400);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('lubna_auth', 'true');
    handleViewChange('admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('lubna_auth');
    handleViewChange('home');
  };

  const handleAddVideo = (newVideo) => {
    setVideos([newVideo, ...videos]);
    handleViewChange('home');
  };

  const handleDeleteVideo = (id) => {
    if (window.confirm('Remove this video from your professional library?')) {
      setVideos(videos.filter(v => v.id !== id));
    }
  };

  return (
    <div className="App">
      <div className="mesh-bg">
        <div className="glow-sphere" style={{ width: '800px', height: '800px', background: 'var(--primary)', top: '-20%', left: '-10%' }}></div>
        <div className="glow-sphere" style={{ width: '600px', height: '600px', background: '#1a365d', bottom: '10%', right: '0%', animationDelay: '-10s' }}></div>
      </div>

      <Navbar 
        onViewChange={handleViewChange} 
        currentView={view} 
        isAuthenticated={isAuthenticated} 
        onLogout={handleLogout} 
      />
      
      <main className={isTransitioning ? '' : 'reveal-cinema'} style={{ 
        opacity: isTransitioning ? 0 : 1, 
        transition: 'opacity 0.5s ease'
      }}>
        {view === 'home' ? (
          <>
            <Hero />
            <VideoGallery videos={videos} />
          </>
        ) : (
          isAuthenticated ? (
            <AdminPanel 
              videos={videos} 
              onAddVideo={handleAddVideo} 
              onDeleteVideo={handleDeleteVideo} 
            />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        )}
      </main>

      <footer style={{ 
        padding: '4rem 0 3rem', 
        background: 'linear-gradient(to bottom, transparent, var(--bg-deep))',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)', 
        marginTop: '2rem', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <a href="#" className="nav-brand text-reveal" style={{ fontSize: '2.2rem', marginBottom: '2rem', display: 'inline-block' }}>
            LearnWithLubna
          </a>
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto 2rem', 
            lineHeight: '1.8',
            fontSize: '1rem',
            fontStyle: 'italic'
          }}>
            "Knowledge is the only asset that grows when shared. We are committed to 
            delivering the finest educational experience for the next generation of leaders."
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
            <a href="#" className="footer-link-elite">Portfolio</a>
            <a href="#" className="footer-link-elite">Curriculum</a>
            <a href="#" className="footer-link-elite">Academy Contact</a>
          </div>

          <div style={{ opacity: 0.3, letterSpacing: '0.3em', fontSize: '0.65rem', fontWeight: '700' }}>
            ESTABLISHED MMXXIV &bull; PREMIER EDUCATION &bull; ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

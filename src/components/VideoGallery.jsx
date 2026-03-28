import React, { useState } from 'react';
import { Search, Play, ExternalLink } from 'lucide-react';

const VideoGallery = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getYouTubeThumbnail = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const id = (match && match[2].length === 11) ? match[2] : null;
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="gallery" className="container" style={{ paddingBottom: '12rem' }}>
      <div className="reveal-cinema" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        marginBottom: '8rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        paddingBottom: '4rem',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div>
          <span className="hero-tag" style={{ marginBottom: '1rem' }}>Collection Archive</span>
          <h2 style={{ fontSize: '4rem' }}>Technical <span className="text-reveal">Syllabus</span></h2>
        </div>
        
        <div className="glass" style={{ 
          padding: '0.6rem 1.5rem', 
          borderRadius: '100px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1.2rem',
          width: '450px',
          maxWidth: '100%',
          background: 'rgba(255, 255, 255, 0.03)'
        }}>
          <Search size={22} style={{ color: 'var(--primary)', opacity: 0.6 }} />
          <input 
            type="text" 
            placeholder="Search the educational archive..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              padding: '1rem 0',
              fontSize: '1rem',
              width: '100%',
              color: '#fff',
              outline: 'none',
              fontWeight: '500',
              letterSpacing: '0.02em'
            }}
          />
        </div>
      </div>

      <div className="grid-elite">
        {filteredVideos.map((video, index) => (
          <div 
            key={video.id} 
            className="card-elite reveal-cinema" 
            style={{ animationDelay: `${0.1 * (index % 4)}s` }}
          >
            <div className="thumb-elite" style={{ backgroundImage: `url(${getYouTubeThumbnail(video.url)})` }}>
              <div style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 2 }}>
                <div className="glass" style={{ 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '100px', 
                  fontSize: '0.75rem', 
                  fontWeight: '800', 
                  letterSpacing: '0.15em', 
                  background: 'rgba(0,0,0,0.6)', 
                  color: 'var(--primary)',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}>
                   LECTURE
                </div>
              </div>
              <div className="play-circle-elite">
                <Play size={45} fill="currentColor" />
              </div>
            </div>
            
            <div style={{ padding: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', lineHeight: '1.3', fontFamily: 'var(--font-display)', minHeight: '4.6rem' }}>{video.title}</h3>
                <ExternalLink size={24} style={{ opacity: 0.2, flexShrink: 0, marginTop: '0.5rem' }} />
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ width: '40px', height: '1px', background: 'var(--primary)', opacity: 0.4 }}></div>
                 <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.25em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Session ID &bull; LK-{100 + index + 1}</span>
              </div>
              
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="video-click-area"
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  zIndex: 3 
                }}
              ></a>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="reveal-cinema" style={{ textAlign: 'center', padding: '12rem 0' }}>
          <div style={{ fontSize: '1.4rem', color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '500px', margin: '0 auto', lineHeight: '1.6' }}>
            "Our records show no matches for this inquiry. Please refine your search or contact the department."
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;

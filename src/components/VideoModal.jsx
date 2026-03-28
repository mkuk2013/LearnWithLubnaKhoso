import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  const getEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      let videoId = '';
      if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
      } else {
        videoId = urlObj.searchParams.get('v');
      }
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } catch (e) {
      return '';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <X size={32} />
        </button>
        <iframe
          src={getEmbedUrl(video.url)}
          title={video.title}
          style={{ width: '100%', height: '100%', borderRadius: '16px', border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div style={{ marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{video.title}</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Published on {new Date(video.id).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

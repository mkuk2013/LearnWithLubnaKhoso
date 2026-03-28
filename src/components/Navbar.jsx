import React from 'react';
import { Video, LayoutDashboard, Home, LogOut, User } from 'lucide-react';

const Navbar = ({ onViewChange, currentView, isAuthenticated, onLogout }) => {
  return (
    <nav className="nav-elite">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="/" className="nav-brand text-reveal" onClick={(e) => { 
          e.preventDefault(); 
          onViewChange('home'); 
        }}>
          LearnWithLubna
        </a>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {isAuthenticated && currentView === 'admin' && (
            <button className="btn-elite" onClick={onLogout} style={{ 
              padding: '0.8rem 2rem', 
              fontSize: '0.7rem', 
              background: 'rgba(255, 71, 87, 0.1)', 
              color: '#ff4757',
              border: '1px solid rgba(255, 71, 87, 0.2)'
            }}>
              <LogOut size={16} /> SIGN OUT
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

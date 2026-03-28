import React from 'react';
import { PlayCircle, Globe, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-cinema">
      <div className="container">
        <span className="hero-tag reveal-cinema" style={{ animationDelay: '0.2s' }}>The Elite Educational Experience</span>
        <h1 className="reveal-cinema" style={{ animationDelay: '0.4s' }}>
          Unlocking the <br />
          <span className="text-reveal">Master Within</span>
        </h1>
        <p className="reveal-cinema" style={{ 
          fontSize: '1.6rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '1000px', 
          margin: '0 auto 5rem',
          lineHeight: '1.8',
          fontWeight: '300',
          animationDelay: '0.6s'
        }}>
          Step into a curated sanctuary of professional wisdom. 
          Advanced theories distilled into cinematic lectures 
          mentored by the distinguished <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Lubna Khoso</span>.
        </p>
        
        <div className="reveal-cinema" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '3rem', 
          flexWrap: 'wrap',
          animationDelay: '0.8s'
        }}>
          <button className="btn-elite" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
            <PlayCircle size={24} />
            Enter Archive
          </button>
          <button className="btn-elite" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
            <BookOpen size={24} />
            Institutional Portfolio
          </button>
        </div>

        <div className="reveal-cinema" style={{ 
          marginTop: '10rem', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8rem',
          opacity: '0.4',
          flexWrap: 'wrap',
          animationDelay: '1s'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={24} className="text-gold" />
            <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.3em' }}>GLOBAL ACCESS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <PlayCircle size={24} className="text-gold" />
            <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.3em' }}>STUDIO LESSONS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} className="text-gold" />
            <span style={{ fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.3em' }}>ADVANCED THEORY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

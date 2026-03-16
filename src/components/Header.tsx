import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Magnetic from './Magnetic';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full p-[2vw] flex justify-between items-center z-50 text-white mix-blend-difference transition-all duration-500 ${scrolled ? 'py-4 bg-bg/10 backdrop-blur-md border-b border-white/10 mix-blend-normal' : ''}`}>
      <div className="flex items-center gap-4">
        <Link 
          to="/" 
          className="text-lg font-medium tracking-tight flex items-center gap-2 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>©</span>
          <div className="relative overflow-hidden h-6 w-32">
            <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] ${isHovered ? '-translate-y-full' : 'translate-y-0'}`}>
              Code by Vijay
            </div>
            <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
              Vijay Balaji
            </div>
          </div>
        </Link>
        <button
          onClick={() => setTheme(theme === 'monochrome' ? 'dark' : 'monochrome')}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          aria-label="Toggle Light/Dark Theme"
        >
          {theme === 'monochrome' ? (
            <Moon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
          ) : (
            <Sun className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
          )}
        </button>
      </div>

      <nav className="flex gap-8 text-lg font-medium">
        <Magnetic><a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="hover:opacity-70 transition-opacity">Work</a></Magnetic>
        <Magnetic><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:opacity-70 transition-opacity">About</a></Magnetic>
        <Magnetic><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></Magnetic>
      </nav>
    </header>
  );
}

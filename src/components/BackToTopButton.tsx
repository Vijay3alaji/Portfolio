import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      
      // Show button when page is scrolled down 500px
      if (totalScroll > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 mix-blend-difference transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center p-2 text-white hover:scale-110 transition-transform duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        {/* Arrow Container */}
        <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center">
          <ArrowUp 
            size={40} 
            strokeWidth={2} 
            className="absolute transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:-translate-y-full" 
          />
          <ArrowUp 
            size={40} 
            strokeWidth={2} 
            className="absolute translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0" 
          />
        </div>
      </button>
    </div>
  );
}

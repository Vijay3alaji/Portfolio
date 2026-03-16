import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the footer container
      gsap.fromTo(
        footerRef.current,
        { y: -200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );

      // 3D Staggered Text Reveal
      gsap.fromTo(
        '.footer-reveal',
        { y: 100, opacity: 0, rotationX: -20 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          }
        }
      );
      // Button pop animation
      gsap.fromTo(
        '.contact-btn-wrapper',
        { scale: 0, opacity: 0, rotation: -15 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          delay: 0.4,
          ease: 'elastic.out(1, 0.3)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
          onComplete: () => {
            // Continuous floating animation after pop
            gsap.to('.contact-btn-wrapper', {
              y: -15,
              rotation: 5,
              duration: 2.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden w-full h-[80vh] md:h-screen bg-bg transition-colors duration-700">
      <footer
        ref={footerRef}
        className="absolute bottom-0 left-0 w-full h-[80vh] md:h-screen bg-bg text-text py-[10vw] px-[5vw] flex flex-col justify-between transition-colors duration-700"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto mb-12 md:mb-24">
          <div className="flex flex-col gap-2 perspective-[1000px]">
            <div className="flex items-center gap-4 md:gap-8 overflow-hidden pb-4">
              <img
                src="/myphoto1.png"
                alt="Profile"
                className="footer-reveal w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 border-text/10 grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <h2 className="footer-reveal text-5xl md:text-7xl lg:text-[8vw] leading-[0.85] font-medium tracking-tighter">
                Let's work
              </h2>
            </div>
            <div className="overflow-hidden pb-4">
              <h2 className="footer-reveal text-5xl md:text-7xl lg:text-[8vw] leading-[0.85] font-medium tracking-tighter text-primary italic">
                together
              </h2>
            </div>
          </div>
          
          <div className="contact-btn-wrapper">
            <Magnetic>
              <Link 
                to="/contact" 
                className="group relative w-36 h-36 md:w-48 md:h-48 rounded-full bg-primary text-bg flex items-center justify-center text-lg md:text-xl font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 active:scale-90 shadow-[0_0_40px_var(--color-glow)] hover:shadow-[0_0_80px_var(--color-glow)]"
              >
                {/* Continuous pulsing rings to draw attention */}
                <div className="absolute inset-0 rounded-full border border-primary animate-pulse-ring pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-primary animate-pulse-ring pointer-events-none" style={{ animationDelay: '1s' }} />
                
                {/* Background ripple effect on hover (contained) */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out origin-center" />
                </div>
                
                <span className="relative z-10 flex items-center gap-2">
                  Get in touch
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>

        <div className="pt-8 border-t border-text/20 flex flex-col md:flex-row justify-between items-center text-text/40 text-sm font-light gap-4 md:gap-0">
          <p>Code by Vijay • All rights reserved © {new Date().getFullYear()}</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vijay-balajim/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Vijay3alaji" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://medium.com/@vijay.balaji" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Medium</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-stat',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-text transition-colors duration-700 text-bg py-12 md:py-20 px-[5vw] overflow-hidden"
      id="about"
    >
      <div className="mb-12 about-stat">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-bg/50 mb-2">About Me</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter">By the numbers</h2>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20 border-y border-charcoal/10 group">
        <Link to="/about" className="w-full md:w-auto z-10 flex flex-col gap-6 md:gap-8 block">
          <div className="relative about-stat">
            <h3 className="text-6xl sm:text-7xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] transition-all duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-8">
              15+ <span className="inline-block text-charcoal/20 italic group-hover:text-primary group-hover:-skew-x-6 transition-all duration-700">AI Projects</span>
            </h3>
          </div>
          <div className="relative about-stat">
            <h3 className="text-6xl sm:text-7xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] transition-all duration-700 ease-out group-hover:translate-x-8 md:group-hover:translate-x-16">
              10+ <span className="inline-block text-charcoal/20 italic group-hover:text-primary group-hover:-skew-x-6 transition-all duration-700">Models Tuned</span>
            </h3>
          </div>
          <div className="relative about-stat">
            <h3 className="text-6xl sm:text-7xl md:text-[7vw] font-medium tracking-tighter leading-[0.85] transition-all duration-700 ease-out group-hover:translate-x-12 md:group-hover:translate-x-24">
              50+ <span className="inline-block text-charcoal/20 italic group-hover:text-primary group-hover:-skew-x-6 transition-all duration-700">Custom Agents</span>
            </h3>
          </div>
        </Link>

        <div className="flex justify-start md:justify-end w-full md:w-auto z-10 about-stat">
          <Magnetic>
            <Link to="/about" className="relative overflow-hidden rounded-full bg-bg transition-colors duration-700 text-text w-28 h-28 md:w-40 md:h-40 flex items-center justify-center transition-snellenberg hover:bg-primary hover:text-text hover:scale-110 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(242,125,38,0.3)]">
              <span className="relative z-10 font-medium tracking-wide text-sm md:text-lg">About me</span>
            </Link>
          </Magnetic>
        </div>
        
        {/* Creative background pop element */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-primary/10 rounded-full blur-3xl group-hover:w-[150%] group-hover:h-[200%] transition-all duration-1000 ease-out pointer-events-none"></div>
      </div>
    </section>
  );
}

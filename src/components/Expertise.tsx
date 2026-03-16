import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.expertise-reveal',
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
    <section ref={containerRef} className="bg-bg transition-colors duration-700 text-text py-12 md:py-20 px-[5vw] overflow-hidden">
      <div className="mb-12">
        <p className="expertise-reveal text-[10px] md:text-xs uppercase tracking-widest text-text/50 mb-2">My Expertise</p>
        <h2 className="expertise-reveal text-3xl md:text-5xl font-medium tracking-tighter">Technical Arsenal</h2>
      </div>
      
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-12 md:py-20 border-y border-offwhite/10 group">
        <Link to="/expertise" className="relative w-full md:w-auto text-left block z-10 expertise-reveal">
          <h3 className="text-6xl sm:text-7xl md:text-[10vw] font-medium tracking-tighter leading-[0.85] transition-all duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-12 group-hover:text-primary">
            GEN AI <br/> 
            <span className="text-offwhite/20 group-hover:text-primary/70 transition-colors duration-700 italic">& LLMs</span>
          </h3>
        </Link>

        <div className="flex justify-start md:justify-end w-full md:w-auto z-10 expertise-reveal">
          <Magnetic>
            <Link to="/expertise" className="relative overflow-hidden rounded-full bg-text transition-colors duration-700 text-bg w-28 h-28 md:w-40 md:h-40 flex items-center justify-center transition-snellenberg hover:bg-primary hover:text-offwhite hover:scale-110 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_rgba(242,125,38,0.3)]">
              <span className="relative z-10 font-medium tracking-wide text-sm md:text-lg">See more</span>
            </Link>
          </Magnetic>
        </div>
        
        {/* Creative background pop element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-primary/10 rounded-full blur-3xl group-hover:w-full group-hover:h-[200%] transition-all duration-1000 ease-out pointer-events-none"></div>
      </div>
    </section>
  );
}

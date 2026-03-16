import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, ArrowDownRight } from 'lucide-react';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Adjust animation parameters based on theme
    const marqueeDuration = theme === 'terminal' ? 10 : theme === 'velvet' ? 30 : theme === 'monochrome' ? 15 : 20;
    const parallaxY = theme === 'moss' ? 25 : theme === 'terminal' ? 5 : 15;
    const easeType = theme === 'terminal' ? 'power4.inOut' : theme === 'velvet' ? 'sine.inOut' : 'none';

    const ctx = gsap.context(() => {
      // Entrance Animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        imageRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 0.9, scale: 1, duration: 1.5, delay: 0.2 }
      )
      .fromTo(
        badgeRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=1'
      )
      .fromTo(
        rightTextRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        '-=1'
      )
      .fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        '-=1.2'
      );

      // Continuous horizontal marquee
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: marqueeDuration,
        repeat: -1,
      });

      // Scroll parallax for the marquee container
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        x: '-=300',
      });

      // Slight parallax for the image
      gsap.to(imageRef.current, {
        yPercent: parallaxY,
        ease: easeType,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [theme]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-bg overflow-hidden flex flex-col justify-between transition-colors duration-700"
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <Header />
      
      {/* Center Image Space - Fixed Alignment */}
      <div 
        className="absolute -bottom-[10vh] md:-bottom-[20vh] left-1/2 -translate-x-1/2 w-full max-w-2xl h-[90vh] md:h-[105vh] z-0 pointer-events-none flex justify-center items-end mix-blend-luminosity"
        style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)' }}
      >
        <img 
          ref={imageRef}
          src="/myphoto1.png" 
          alt="Vijay Balaji" 
          className="w-auto h-[70vh] md:h-[85vh] mb-[15vh] md:mb-[20vh] object-cover object-top drop-shadow-2xl grayscale contrast-125 opacity-0"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end px-[5vw] mt-auto mb-[25vh] md:mb-[50vh] w-full gap-8">
        
        {/* Located Badge */}
        <div ref={badgeRef} className="bg-text/10 backdrop-blur-md border border-text/10 text-text rounded-full flex items-center gap-3 md:gap-4 pl-4 md:pl-6 pr-1.5 md:pr-2 py-1.5 md:py-2 w-max shadow-2xl transition-transform hover:scale-105 duration-300 opacity-0">
          <p className="text-xs md:text-sm font-medium leading-tight">
            Located<br/>in Bengaluru,<br/>India
          </p>
          <div className="bg-primary rounded-full p-2 md:p-3 text-bg flex items-center justify-center transition-colors duration-700">
            <Globe size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
          </div>
        </div>

        {/* Right Text */}
        <div ref={rightTextRef} className="flex flex-col items-start gap-3 md:gap-4 text-text opacity-0">
          <div className="p-2 md:p-3 bg-text/10 backdrop-blur-md rounded-full border border-text/10">
            <ArrowDownRight size={20} className="md:w-6 md:h-6" strokeWidth={2} />
          </div>
          <h2 className="text-2xl md:text-5xl font-light leading-tight tracking-tight drop-shadow-lg">
            Gen AI Engineer<br/>& LLM Specialist
          </h2>
        </div>
      </div>

      {/* Massive Moving Text */}
      <div className="absolute bottom-0 left-0 w-[200vw] z-20 pointer-events-none">
        <div ref={textRef} className="flex whitespace-nowrap text-[25vw] md:text-[18vw] text-text/90 font-medium tracking-tighter leading-[1.1] m-0 drop-shadow-2xl mix-blend-overlay pb-[2vh] opacity-0">
          <span className="pr-8 md:pr-16">Vijay Balaji — Gen AI</span>
          <span className="pr-8 md:pr-16">Vijay Balaji — Gen AI</span>
        </div>
      </div>
    </section>
  );
}

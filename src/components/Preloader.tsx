import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (index === words.length - 1) {
      const tl = gsap.timeline({
        onComplete: onComplete,
        delay: 0.8
      });

      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
      }, 0);

      tl.to(pathRef.current, {
        attr: { d: `M0 0 Q500 0 1000 0` },
        duration: 0.8,
        ease: "power3.inOut"
      }, 0);
      
    } else {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, index === 0 ? 1000 : 150);
      return () => clearTimeout(timeout);
    }
  }, [index, onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg transition-colors duration-700 text-text"
    >
      <div className="flex items-center text-4xl md:text-5xl font-medium tracking-tight z-10">
        <span className="mr-4 text-text/50 text-2xl">•</span>
        {words[index]}
      </div>
      <svg className="absolute top-full left-0 w-full h-[100px]" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path 
          ref={pathRef}
          className="fill-bg"
          d="M0 0 Q500 100 1000 0" 
        />
      </svg>
    </div>
  );
}

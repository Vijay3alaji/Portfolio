import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use GSAP quickTo for performance
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3' });

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement;
      if (target && target.closest && target.closest('a, button, input, textarea, select, .skill-card, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        scale: isHovering ? 3.5 : 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-text border-[1.5px] border-bg rounded-full pointer-events-none z-[100] flex items-center justify-center transition-colors duration-300 shadow-sm"
    >
      {/* Optional inner dot that appears on hover */}
      <div 
        className={`w-1 h-1 bg-bg rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} 
      />
    </div>
  );
}

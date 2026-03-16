import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Curve() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const initialPath = `M0 100 Q500 100 1000 100`;
    const targetPath = `M0 100 Q500 0 1000 100`;

    path.setAttribute('d', initialPath);

    const ctx = gsap.context(() => {
      gsap.to(path, {
        attr: { d: targetPath },
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[100px] overflow-hidden bg-bg transition-colors duration-700">
      <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path
          ref={pathRef}
          className="fill-text"
          d="M0 100 Q500 100 1000 100"
        />
      </svg>
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const slider = useRef<HTMLDivElement>(null);
  const text1 = useRef<HTMLParagraphElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: '-=300px',
      });
    });

    requestAnimationFrame(animation);

    return () => ctx.revert();
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(text1.current, { xPercent: xPercent });
    gsap.set(text2.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="relative flex overflow-hidden whitespace-nowrap bg-text transition-colors duration-700 py-[5vw]">
      <div ref={slider} className="relative m-0 flex whitespace-nowrap text-[15vw] font-medium tracking-tighter text-bg">
        <p ref={text1} className="m-0 pr-12">
          Vijay Balaji - Gen AI Engineer -
        </p>
        <p ref={text2} className="absolute left-[100%] top-0 m-0 pr-12">
          Vijay Balaji - Gen AI Engineer -
        </p>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Autonomous AI Agent',
    category: 'LangGraph & Multi-Agent',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Vijaybalaji235'
  },
  {
    title: 'Offline Image Gen',
    category: 'Stable Diffusion & VAE',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Vijaybalaji235'
  },
  {
    title: 'LLM Fine-tuning',
    category: 'LoRA & QLoRA',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Vijaybalaji235'
  },
  {
    title: 'Vercel AI SDK OSS',
    category: 'Next.js & Generative UI',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Vijaybalaji235'
  },
  {
    title: 'Text-to-SQL Bot',
    category: 'NLP & Streamlit',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    link: 'https://github.com/Vijaybalaji235'
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // Scroll Reveal Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-row',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    const xTo = gsap.quickTo(image, 'x', { duration: 0.8, ease: 'power3' });
    const yTo = gsap.quickTo(image, 'y', { duration: 0.8, ease: 'power3' });
    const rotateTo = gsap.quickTo(image, 'rotation', { duration: 0.8, ease: 'power3' });

    // Center the image initially
    gsap.set(image, { xPercent: -50, yPercent: -50 });

    let lastX = 0;

    const moveImage = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
      
      // Calculate rotation based on mouse movement direction
      const deltaX = clientX - lastX;
      const rotation = Math.max(-15, Math.min(15, deltaX * 0.1));
      rotateTo(rotation);
      
      lastX = clientX;
    };

    const handleMouseEnter = () => {
      gsap.to(image, { scale: 1, opacity: 1, duration: 0.4, ease: 'power3' });
    };

    const handleMouseLeave = () => {
      gsap.to(image, { scale: 0, opacity: 0, duration: 0.4, ease: 'power3' });
      rotateTo(0);
    };

    container.addEventListener('mousemove', moveImage);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      container.removeEventListener('mousemove', moveImage);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" className="bg-text text-bg py-[10vw] px-[5vw] relative transition-colors duration-700">
      <div className="mb-[5vw] project-row">
        <p className="text-sm uppercase tracking-widest text-bg/50 mb-4">Recent Work</p>
      </div>

      <div ref={containerRef} className="relative w-full flex flex-col">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group flex justify-between items-center py-12 border-t border-bg/20 cursor-pointer transition-snellenberg hover:opacity-50"
            onMouseEnter={() => setActiveProject(index)}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter group-hover:-translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]">
              {project.title}
            </h2>
            <p className="text-lg md:text-xl font-light group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] hidden md:block">
              {project.category}
            </p>
          </a>
        ))}
        <div className="border-t border-bg/20 w-full project-row" />

        {/* Floating Image */}
        <div
          ref={imageRef}
          className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-40 overflow-hidden rounded-xl scale-0 opacity-0 shadow-2xl"
        >
          <div
            className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]"
            style={{ transform: `translateY(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
                <div className="absolute inset-0 bg-bg/20 z-10 mix-blend-overlay" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-[5vw] flex justify-center project-row">
        <a 
          href="https://github.com/Vijay3alaji?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-full border border-bg/20 px-8 py-4 text-bg hover:bg-bg hover:text-text transition-all duration-300"
        >
          See more
        </a>
      </div>
    </section>
  );
}

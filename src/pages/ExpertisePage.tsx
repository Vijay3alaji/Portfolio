import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronLeft, BrainCircuit, Network, Database, CloudCog } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    id: '01',
    title: 'LLM Systems', 
    desc: 'Specializing in production LLM systems and RAG pipelines at scale. Expertise in Hybrid Search, re-ranking, Multi-Agent Systems, and LLM Evaluation.',
    tags: ['RAG', 'LangChain', 'LangGraph', 'Ragas', 'Prompt Engineering'],
    icon: BrainCircuit
  },
  { 
    id: '02',
    title: 'ML & NLP', 
    desc: 'Deep understanding of ML algorithms, Transformers, and model optimization. Proven track record in fine-tuning models with LoRA/QLoRA and bitsandbytes.',
    tags: ['Python', 'Scikit-learn', 'Transformers', 'LoRA/QLoRA', 'bitsandbytes'],
    icon: Network
  },
  { 
    id: '03',
    title: 'Data Systems', 
    desc: 'Proficient in statistical analysis, data visualization, and predictive modeling. Transform raw data into actionable insights that drive business decisions.',
    tags: ['SQL', 'PostgreSQL', 'Vector Search', 'ETL', 'Redis'],
    icon: Database
  },
  { 
    id: '04',
    title: 'Infrastructure', 
    desc: 'Skilled in deploying and scaling AI applications on cloud platforms with containerization, orchestration, and robust CI/CD pipelines.',
    tags: ['FastAPI', 'Docker', 'AWS', 'CI/CD', 'REST APIs'],
    icon: CloudCog
  }
];

const SkillCard: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const Icon = skill.icon;

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="skill-card relative group bg-[#1a1a1a] p-8 md:p-12 rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/50"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Dynamic Mouse Glow Effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(242, 125, 38, 0.15), transparent 40%)`
        }}
      />

      {/* Large Background Number */}
      <div className="absolute -right-4 -top-10 text-[150px] font-bold text-white/[0.02] pointer-events-none select-none transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-x-4 group-hover:text-primary/[0.05]">
        {skill.id}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-500">
          <Icon className="w-8 h-8 text-white/70 group-hover:text-primary transition-colors duration-500" />
        </div>

        <h3 className="text-3xl font-medium mb-4 group-hover:text-primary transition-colors duration-300">{skill.title}</h3>
        <p className="text-text/60 font-light leading-relaxed mb-10 flex-grow group-hover:text-text/90 transition-colors duration-300">
          {skill.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {skill.tags.map((tag, j) => (
            <Link 
              key={j} 
              to={`/expertise?tag=${tag.toLowerCase()}`}
              onClick={(e) => e.preventDefault()}
              className="text-xs bg-white/5 text-white/70 border border-white/10 rounded-full px-4 py-2 font-medium transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_0_15px_rgba(242,125,38,0.5)]"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const BackgroundEffects = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for the glowing orbs (horizontal and rotation)
      gsap.to('.bg-orb-1', {
        x: 100,
        rotation: 45,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      gsap.to('.bg-orb-2', {
        x: -100,
        rotation: -45,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Independent scroll parallax for each orb container
      gsap.to('.parallax-1', {
        yPercent: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      gsap.to('.parallax-2', {
        yPercent: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="parallax-1 absolute top-[5%] left-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]">
        <div className="bg-orb-1 w-full h-full bg-primary/15 rounded-full blur-[120px] mix-blend-screen" />
      </div>
      <div className="parallax-2 absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px]">
        <div className="bg-orb-2 w-full h-full bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>
    </div>
  );
};

export default function ExpertisePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Back Button
      gsap.fromTo(
        '.back-btn',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );

      // Dramatic Title Reveal (Masked text sliding up with slight rotation)
      gsap.fromTo(
        '.title-word',
        { y: '120%', rotationZ: 5 },
        { y: '0%', rotationZ: 0, duration: 1.2, stagger: 0.1, ease: 'power4.out' }
      );

      // Subtitle fade in
      gsap.fromTo(
        '.subtitle-text',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      // Animate Cards with a 3D staggered entrance
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 100, rotationX: -15, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          scale: 1,
          duration: 1.4, 
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-bg transition-colors duration-700 text-offwhite font-sans selection:bg-primary selection:text-offwhite relative">
      <BackgroundEffects />
      <Header />
      <main ref={containerRef} className="relative z-10 pt-[20vh] px-[5vw] max-w-7xl mx-auto pb-[15vh]">
        <div className="mb-20">
          <Link to="/" className="back-btn inline-block text-offwhite/50 hover:text-offwhite transition-colors mb-12">
            <ChevronLeft size={40} strokeWidth={1} />
          </Link>
          
          <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-6 flex flex-wrap gap-x-4 md:gap-x-8">
            <div className="overflow-hidden pb-4">
              <span className="title-word inline-block origin-bottom-left">Technical</span>
            </div>
            <div className="overflow-hidden pb-4">
              <span className="title-word inline-block text-primary italic pr-4 origin-bottom-left">Arsenal</span>
            </div>
          </h1>
          
          <p className="subtitle-text text-xl md:text-2xl text-offwhite/50 font-light max-w-2xl">
            A comprehensive breakdown of the tools, frameworks, and systems I use to build scalable AI solutions.
          </p>
        </div>
        
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 perspective-[2000px]">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

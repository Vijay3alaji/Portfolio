import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    year: '2025 - Present',
    role: 'Gen AI Engineer',
    company: 'CUBE84',
    description: 'Delivering production LLM systems serving 200+ users at 99.9% uptime. Optimized RAG pipelines achieving under 200ms latency and reclaimed 120+ hrs/month via agentic workflows.'
  },
  {
    year: '2024 - 2025',
    role: 'Data Analyst Intern',
    company: 'Boston Consulting Group (BCG)',
    description: 'Built churn-prediction models achieving 85% accuracy, directly influencing a $2M retention strategy presented to C-suite stakeholders.'
  },
  {
    year: '2024',
    role: 'Data Analyst Intern',
    company: 'Indi Craft Vintage',
    description: 'Powered personalized campaigns using K-Means clustering on 20K+ records, lifting repeat purchase rates by 15% and cutting CAC by 10%.'
  },
  {
    year: '2022 - 2023',
    role: 'Software Engineer',
    company: 'Tata Elxsi',
    description: 'Led real-time telemetry dashboard development, boosting user engagement by 40% across 3 product lines and slashing system incidents by 35%.'
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        '.hero-element',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );

      // Philosophy Animation
      gsap.fromTo(
        philosophyRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 80%',
          }
        }
      );

      // Timeline Animation
      const timelineItems = gsap.utils.toArray('.timeline-item');
      timelineItems.forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-text text-bg font-sans selection:bg-primary selection:text-text transition-colors duration-700">
      <Header />
      <main ref={containerRef} className="pt-[20vh] pb-[10vh]">
        
        {/* Hero Section */}
        <div className="px-[5vw] max-w-7xl mx-auto">
          <Link to="/" className="hero-element inline-block text-bg/50 hover:text-bg transition-colors mb-12">
            <ChevronLeft size={40} strokeWidth={1} />
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
            <div className="lg:w-1/2">
              <h1 className="hero-element text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-12">
                About me
              </h1>
              <div className="hero-element space-y-8 text-xl md:text-2xl font-light leading-relaxed">
                <p>
                  I'm Vijay Balaji, a Gen AI Engineer specializing in production LLM systems and RAG pipelines at scale. I am passionate about creating intelligent systems that solve real-world problems.
                </p>
                <p>
                  My approach combines technical excellence with strategic thinking. I have delivered systems serving 200+ users at 99.9% uptime, achieving under 200ms latency and reducing costs by 90%.
                </p>
                <p>
                  I am also an active OSS contributor, with my work on the Vercel AI SDK adopted by over 500 developers. I hold an M.Sc in Computational Statistics & AI from Christ University, where I ranked in the top 5% of my cohort.
                </p>
              </div>
              
              <div className="hero-element mt-16 flex flex-col sm:flex-row gap-6">
                <a 
                  href="/updated_resume.pdf" 
                  download="Vijay_Balaji_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-4 rounded-full border border-bg/20 px-8 py-4 text-bg hover:bg-bg hover:text-text transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
                
                <Link 
                  to="/certifications"
                  className="inline-flex items-center justify-center gap-4 rounded-full bg-bg px-8 py-4 text-text hover:scale-105 transition-transform duration-300 shadow-xl"
                >
                  <span>View Certifications</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            
            <div className="hero-element lg:w-1/2 w-full relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/myphoto3.png" 
                  alt="Vijay Balaji" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale-[30%] contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative floating element */}
              <div className="absolute -bottom-10 -left-10 bg-primary text-bg p-8 rounded-full w-40 h-40 flex items-center justify-center text-center shadow-xl animate-spin-slow">
                <span className="font-medium tracking-widest uppercase text-xs">Always Building</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-bg text-text py-24 px-[5vw] my-24 transition-colors duration-700">
          <div ref={philosophyRef} className="max-w-5xl mx-auto text-center">
            <p className="text-primary text-sm uppercase tracking-widest mb-8">My Philosophy</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight italic">
              "AI shouldn't just be a technological marvel—it must solve real-world problems. My goal is to bridge the gap between cutting-edge LLM research and robust, scalable production systems."
            </h2>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="px-[5vw] max-w-7xl mx-auto mt-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">The Journey</h2>
          </div>
          
          <div ref={timelineRef} className="flex flex-col border-l border-bg/20 ml-4 md:ml-8">
            {experience.map((item, index) => (
              <div key={index} className="timeline-item relative pl-8 md:pl-16 py-8 group">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-text border-2 border-bg group-hover:bg-primary group-hover:border-primary transition-colors duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <span className="text-sm md:text-base font-medium text-bg/50 uppercase tracking-widest md:w-48 shrink-0">
                    {item.year}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight group-hover:text-primary transition-colors duration-300">
                    {item.role}
                  </h3>
                </div>
                
                <div className="md:pl-[14rem]">
                  <h4 className="text-lg md:text-xl font-medium mb-4">{item.company}</h4>
                  <p className="text-bg/70 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

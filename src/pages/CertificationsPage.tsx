import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronLeft, Code, Database, BarChart, Brain, Cloud, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    category: "Software Engineering & Backend",
    icon: <Code size={32} strokeWidth={1.5} />,
    description: "Building robust architectures, high-performance APIs, and advanced Python systems.",
    courses: [
      {
        title: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        skills: ["Mastered Python basics", "Learned fundamental programming concepts", "Built a foundation for advanced programming"]
      },
      {
        title: "Advanced Python Architecture & Engineering",
        issuer: "Udemy",
        skills: ["Advanced Python concepts", "Real-world programming applications", "Project-based learning"]
      },
      {
        title: "Python Data Structures",
        issuer: "University of Michigan",
        skills: ["Advanced data organization", "Algorithm implementation", "Efficient problem-solving techniques"]
      },
      {
        title: "High-Performance Backend Systems with FastAPI",
        issuer: "Advanced API Academy",
        skills: ["Asynchronous API development", "High-throughput endpoints", "Microservices integration"]
      }
    ]
  },
  {
    category: "Data Science and Analysis",
    icon: <Database size={32} strokeWidth={1.5} />,
    description: "Expanding into data science, statistical analysis, and complex queries.",
    courses: [
      {
        title: "SQL for Data Science",
        issuer: "UC Davis",
        skills: ["Database management", "Complex queries", "Data manipulation techniques"]
      },
      {
        title: "Introduction to Statistics",
        issuer: "Stanford University",
        skills: ["Statistical analysis methods", "Data interpretation", "Probability concepts"]
      },
      {
        title: "Analyze Data to Answer Questions",
        issuer: "Google",
        skills: ["Data analysis methodologies", "Problem-solving with data", "Analytical thinking"]
      }
    ]
  },
  {
    category: "Data Visualization and Communication",
    icon: <BarChart size={32} strokeWidth={1.5} />,
    description: "Developing strong visualization skills to tell stories with data.",
    courses: [
      {
        title: "Understanding and Visualizing Data with Python",
        issuer: "University of Michigan",
        skills: ["Python visualization libraries", "Data presentation techniques", "Visual analysis methods"]
      },
      {
        title: "Share Data Through the Art of Visualization",
        issuer: "Google",
        skills: ["Advanced visualization techniques", "Data storytelling", "Professional presentation skills"]
      },
      {
        title: "Prepare Data for Exploration",
        issuer: "Google",
        skills: ["Data cleaning", "Preparation methodologies", "Quality assurance"]
      }
    ]
  },
  {
    category: "Advanced AI and Machine Learning",
    icon: <Brain size={32} strokeWidth={1.5} />,
    description: "Progressing into advanced AI applications, NLP, and Generative AI.",
    courses: [
      {
        title: "Natural Language Processing in TensorFlow",
        issuer: "DeepLearning.AI",
        skills: ["Text processing techniques", "Neural network architectures", "TensorFlow implementation"]
      },
      {
        title: "Generative AI with Lang Chain and Hugging Face",
        issuer: "Udemy",
        skills: ["Modern AI frameworks", "Large language models", "Practical AI applications"]
      },
      {
        title: "Enterprise LLM Engineering & Agentic Workflows",
        issuer: "DeepLearning.AI",
        skills: ["Advanced RAG pipelines", "Multi-agent systems", "Production LLM deployment"]
      }
    ]
  },
  {
    category: "Cloud Computing & Deployment",
    icon: <Cloud size={32} strokeWidth={1.5} />,
    description: "Architecting and deploying scalable, highly-available cloud infrastructure.",
    courses: [
      {
        title: "Architecting Scalable Machine Learning Solutions",
        issuer: "Google Cloud",
        skills: ["Cloud-native deployment", "Serverless architectures", "Scalable microservices"]
      }
    ]
  }
];

export default function CertificationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        '.cert-hero-element',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );

      // Cards Animation
      const cards = gsap.utils.toArray('.cert-card');
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-primary selection:text-text transition-colors duration-700">
      <Header />
      <main ref={containerRef} className="pt-[20vh] pb-[10vh]">
        
        {/* Hero Section */}
        <div className="px-[5vw] max-w-7xl mx-auto mb-24">
          <Link to="/about" className="cert-hero-element inline-block text-text/50 hover:text-text transition-colors mb-12">
            <ChevronLeft size={40} strokeWidth={1} />
          </Link>
          
          <div className="max-w-4xl">
            <p className="cert-hero-element text-primary text-sm uppercase tracking-widest mb-6">Continuous Learning</p>
            <h1 className="cert-hero-element text-5xl md:text-7xl lg:text-[6vw] font-medium tracking-tighter leading-[0.9] mb-8">
              My Technology <br /> Learning Journey
            </h1>
            <p className="cert-hero-element text-xl md:text-2xl font-light leading-relaxed text-text/70 max-w-3xl">
              A comprehensive overview of the certifications and specialized training that have shaped my expertise in Programming, Data Science, and Advanced AI.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="px-[5vw] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((section, index) => (
              <div 
                key={index} 
                className={`cert-card p-8 md:p-12 rounded-3xl border border-text/10 bg-text/5 hover:bg-text/10 transition-colors duration-500 flex flex-col gap-8 ${index === certifications.length - 1 && certifications.length % 2 !== 0 ? 'lg:col-span-2 lg:flex-row' : ''}`}
              >
                <div className={`flex flex-col gap-4 ${index === certifications.length - 1 && certifications.length % 2 !== 0 ? 'lg:w-1/3' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                    {section.category}
                  </h2>
                  <p className="text-text/60 font-light leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className={`flex flex-col gap-8 ${index === certifications.length - 1 && certifications.length % 2 !== 0 ? 'lg:w-2/3 border-t lg:border-t-0 lg:border-l border-text/10 pt-8 lg:pt-0 lg:pl-12' : 'border-t border-text/10 pt-8'}`}>
                  {section.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="group">
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors duration-300">
                          {course.title}
                        </h3>
                        <p className="text-sm uppercase tracking-widest text-text/40 font-medium">
                          {course.issuer}
                        </p>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-3 text-text/70 font-light">
                            <span className="text-primary mt-1.5 opacity-50">▹</span>
                            <span className="leading-relaxed">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Applications Section */}
        <div className="px-[5vw] max-w-7xl mx-auto mt-32">
          <div className="cert-card bg-primary text-bg rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Practical Applications</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 opacity-90">
                I've applied these skills through various platforms, including building interactive dashboards published on Tableau Public, and developing end-to-end AI applications using TensorFlow, LangChain, and Hugging Face.
              </p>
              <a 
                href="https://public.tableau.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-bg text-text px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                <span>View Tableau Public</span>
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-bg/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-bg/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

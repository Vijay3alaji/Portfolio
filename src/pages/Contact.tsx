import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Magnetic from '../components/Magnetic';
import Header from '../components/Header';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/vijaybalaji237@gmail.com", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-bg transition-colors duration-700 text-text font-sans selection:bg-primary selection:text-text">
      <Header />
      <main ref={containerRef} className="pt-[20vh] px-[5vw] max-w-5xl mx-auto pb-[10vh]">
        <Link to="/" className="inline-block text-offwhite/50 hover:text-offwhite transition-colors mb-12">
          <ChevronLeft size={40} strokeWidth={1} />
        </Link>
        <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-12">
          Let's start a <br /> project together
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-12 mt-24">
          <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-4 flex-1 border-b border-offwhite/20 pb-4 group focus-within:border-primary transition-colors duration-300">
              <label className="text-sm font-light text-offwhite/50 uppercase tracking-widest group-focus-within:text-primary transition-colors duration-300">01 What's your name?</label>
              <input type="text" name="name" placeholder="John Doe *" className="bg-transparent text-2xl font-light outline-none placeholder:text-offwhite/20 text-offwhite" required />
            </div>
            <div className="flex flex-col gap-4 flex-1 border-b border-offwhite/20 pb-4 group focus-within:border-primary transition-colors duration-300">
              <label className="text-sm font-light text-offwhite/50 uppercase tracking-widest group-focus-within:text-primary transition-colors duration-300">02 What's your email?</label>
              <input type="email" name="email" placeholder="john@doe.com *" className="bg-transparent text-2xl font-light outline-none placeholder:text-offwhite/20 text-offwhite" required />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-4 flex-1 border-b border-offwhite/20 pb-4 group focus-within:border-primary transition-colors duration-300">
              <label className="text-sm font-light text-offwhite/50 uppercase tracking-widest group-focus-within:text-primary transition-colors duration-300">03 What's the name of your organization?</label>
              <input type="text" name="organization" placeholder="John & Doe®" className="bg-transparent text-2xl font-light outline-none placeholder:text-offwhite/20 text-offwhite" />
            </div>
            <div className="flex flex-col gap-4 flex-1 border-b border-offwhite/20 pb-4 group focus-within:border-primary transition-colors duration-300">
              <label className="text-sm font-light text-offwhite/50 uppercase tracking-widest group-focus-within:text-primary transition-colors duration-300">04 What services are you looking for?</label>
              <input type="text" name="services" placeholder="AI Agents, RAG, etc." className="bg-transparent text-2xl font-light outline-none placeholder:text-offwhite/20 text-offwhite" />
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b border-offwhite/20 pb-4 group focus-within:border-primary transition-colors duration-300">
            <label className="text-sm font-light text-offwhite/50 uppercase tracking-widest group-focus-within:text-primary transition-colors duration-300">05 Your message</label>
            <textarea name="message" placeholder="Hello Vijay, can you help me with... *" className="bg-transparent text-2xl font-light outline-none placeholder:text-offwhite/20 resize-none h-32 text-offwhite" required></textarea>
          </div>

          <div className="flex justify-end mt-8">
            <div className="flex flex-col items-end gap-4">
              <Magnetic>
                <button type="submit" disabled={status === 'submitting'} className="relative overflow-hidden w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary text-offwhite flex items-center justify-center text-lg md:text-xl font-medium tracking-wide transition-transform duration-300 ease-[cubic-bezier(0.7,0,0.3,1)] hover:scale-110 group shadow-[0_0_0_rgba(242,125,38,0)] hover:shadow-[0_20px_40px_rgba(242,125,38,0.4)] disabled:opacity-70 disabled:hover:scale-100">
                  <span className="relative z-10">
                    {status === 'idle' && 'Send it!'}
                    {status === 'submitting' && 'Sending...'}
                    {status === 'success' && 'Sent!'}
                    {status === 'error' && 'Error!'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] rounded-full" />
                </button>
              </Magnetic>
              {status === 'success' && (
                <p className="text-green-500 font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 font-medium">Oops! Something went wrong. Please try again.</p>
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

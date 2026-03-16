import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Curve from '../components/Curve';
import Marquee from '../components/Marquee';
import Work from '../components/Work';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-bg transition-colors duration-700 text-text min-h-screen font-sans selection:bg-primary selection:text-text">
      <Hero />
      <Curve />
      <About />
      <Expertise />
      <Marquee />
      <Work />
      <Footer />
    </main>
  );
}

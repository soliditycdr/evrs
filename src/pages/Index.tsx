
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EVRSContent from '../components/EVRSContent';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Global particle background with very low opacity for empty spaces */}
      <ParticleBackground opacity={0.15} className="z-0" />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <EVRSContent />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

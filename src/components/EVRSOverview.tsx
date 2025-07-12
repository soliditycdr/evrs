
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from 'lucide-react';
import PurpleBackground3D from './PurpleBackground3D';
import SilverBackground3D from './SilverBackground3D';

const EVRSOverview = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [carPosition, setCarPosition] = useState({ x: 0, y: 0 });

  const sections = [
    'Co-Ownership Model',
    'Emerging Markets Focus', 
    'Blockchain Integration',
    'NFT-Based Ownership',
    'DAO Governance',
    'Token Utility'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sections.length]);

  useEffect(() => {
    // Calculate car position based on current section - positioned at bottom of each box
    const gridCols = 3;
    const col = currentSection % gridCols;
    const row = Math.floor(currentSection / gridCols);
    
    // Position relative to grid layout - at the bottom of each box
    const xPercent = (col * 33.33) + 16.66; // Center of each column
    const yPercent = (row * 50) + 40; // Bottom area of each row (moved down from 25 to 40)
    
    setCarPosition({ x: xPercent, y: yPercent });
  }, [currentSection]);

  return (
    <div className="bg-black text-white py-20 relative overflow-hidden">
      {/* What is EVRS Section */}
      <section className="container mx-auto px-8 mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-white">
          What is EVRS?
        </h2>
        
        {/* Main EVRS Definition Card - Animation Removed */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="bg-black border border-gray-800 rounded-none p-8 hover:border-gray-700 transition-colors duration-300 relative overflow-hidden">
            <p className="text-gray-300 text-xl leading-relaxed text-center font-light relative z-10">
              EVRS (Electric Vehicle Revenue Share) is unlocking a new asset class by turning electric vehicles into yield-generating, blockchain-powered infrastructure through RWA, DePIN, and dynamic NFT access layers.
            </p>
          </div>
        </div>

        {/* Key Features Grid with Animated Car */}
        <div className="relative">
          {/* Animated Car - positioned at bottom of boxes */}
          <div 
            className="absolute z-20 pointer-events-none transition-all duration-1000 ease-in-out"
            style={{
              left: `${carPosition.x}%`,
              top: `${carPosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="relative">
              <Car 
                size={24} 
                className="text-blue-400 drop-shadow-lg animate-pulse" 
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
                  transform: 'rotate(-15deg)'
                }} 
              />
              {/* Car trail effect */}
              <div className="absolute inset-0 -z-10">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400/60 to-transparent rounded-full animate-pulse" 
                     style={{ transform: 'translateX(-100%) translateY(50%) rotate(-15deg)' }}></div>
              </div>
            </div>
          </div>

          {/* Grid with enhanced styling for active section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800 mb-16">
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 0 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">Co-Ownership Model</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Anyone can co-own and earn from EV fleets operating in underserved, high-density urban environments.
              </p>
            </div>

            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 1 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">Emerging Markets Focus</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Targeting fast-growing mobility markets across Asia and Africa with favorable EV adoption policies.
              </p>
            </div>

            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 2 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">Blockchain Integration</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Smart contracts handle earnings distribution with GPS-tracked, revenue-generating EV fleets on-chain.
              </p>
            </div>

            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 3 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">NFT-Based Ownership</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Dynamic NFT access layers transform mobility infrastructure into scalable financial instruments.
              </p>
            </div>

            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 4 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">DAO Governance</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Three-year roadmap to expand fleet capacity and decentralize governance through community-driven decisions.
              </p>
            </div>

            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group relative ${
              currentSection === 5 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <h3 className="text-white text-lg font-light mb-4 group-hover:text-gray-300 transition-colors">Token Utility</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                EVRS token drives access, yield tiers, and growth alignment between digital participants and physical performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems EVRS Solves */}
      <section className="container mx-auto px-8 mb-20 relative z-10">
        {/* Add Purple and Silver 3D Backgrounds with better positioning */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <PurpleBackground3D />
          <SilverBackground3D />
        </div>
        
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-white relative z-20">
          Problems EVRS Solves
        </h2>

        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto mb-16 relative z-20">
          <div className="bg-black border border-gray-800 rounded-none p-8 hover:border-gray-700 transition-colors duration-300">
            <p className="text-gray-300 text-xl leading-relaxed text-center font-light">
              Bridging the gap between mobility providers struggling to scale and investors lacking access to meaningful, impact-driven opportunities in the electric mobility sector.
            </p>
          </div>
        </div>

        {/* Problem Categories */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800 relative z-20">
          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group">
            <h3 className="text-white text-xl font-light mb-6 group-hover:text-gray-300 transition-colors">Centralized Control</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm font-light">Key Issues:</p>
              <ul className="text-gray-400 text-sm space-y-3 font-light">
                <li>• Corporate dominated EV rental markets</li>
                <li>• Limited ownership opportunities</li>
                <li>• Restricted profit-sharing access</li>
                <li>• Exclusion of everyday individuals</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group">
            <h3 className="text-white text-xl font-light mb-6 group-hover:text-gray-300 transition-colors">DePIN Gap</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm font-light">Key Issues:</p>
              <ul className="text-gray-400 text-sm space-y-3 font-light">
                <li>• Limited real-world integration</li>
                <li>• Inconsistent revenue generation</li>
                <li>• Gap between blockchain and physical assets</li>
                <li>• Lack of meaningful applications</li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group">
            <h3 className="text-white text-xl font-light mb-6 group-hover:text-gray-300 transition-colors">RWA Access</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm font-light">Key Issues:</p>
              <ul className="text-gray-400 text-sm space-y-3 font-light">
                <li>• Limited access to asset income</li>
                <li>• Lack of transparent income flows</li>
                <li>• Undermined Web3 value proposition</li>
                <li>• High barriers to entry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVRSOverview;

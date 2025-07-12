import React, { useEffect, useState, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import BlockchainBackground from './BlockchainBackground';
import EVRSOverview from './EVRSOverview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Globe, Rocket, Database, Car } from 'lucide-react';

const EVRSContent = () => {
  const [currentFeatureSection, setCurrentFeatureSection] = useState(0);
  const [carFeaturePosition, setCarFeaturePosition] = useState({ x: 0, y: 0 });
  const [currentVisionSection, setCurrentVisionSection] = useState(0);
  const [carVisionPosition, setCarVisionPosition] = useState({ x: 0, y: 0 });
  const [isPlatformFeaturesVisible, setIsPlatformFeaturesVisible] = useState(false);
  const [isVisionMissionVisible, setIsVisionMissionVisible] = useState(false);

  const platformFeaturesRef = useRef<HTMLElement>(null);
  const visionMissionRef = useRef<HTMLElement>(null);

  const featureSections = [
    { icon: Database, color: 'cyan', name: 'Blockchain-Backed Revenue' },
    { icon: Rocket, color: 'pink', name: 'NFT Ownership Access' },
    { icon: Globe, color: 'blue', name: 'DePIN Integration' },
    { icon: DollarSign, color: 'orange', name: 'Smart Contract Distribution' },
    { icon: Globe, color: 'green', name: 'Global Expansion' },
    { icon: Database, color: 'purple', name: 'DAO Governance' }
  ];

  const visionSections = [
    { icon: Rocket, color: 'purple', name: 'Vision' },
    { icon: Globe, color: 'pink', name: 'Mission' }
  ];

  // Intersection Observer for Platform Features section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPlatformFeaturesVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (platformFeaturesRef.current) {
      observer.observe(platformFeaturesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for Vision & Mission section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisionMissionVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (visionMissionRef.current) {
      observer.observe(visionMissionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Platform Features animation - only when visible
  useEffect(() => {
    if (!isPlatformFeaturesVisible) return;

    const interval = setInterval(() => {
      setCurrentFeatureSection((prev) => (prev + 1) % featureSections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [featureSections.length, isPlatformFeaturesVisible]);

  // Vision & Mission animation - only when visible
  useEffect(() => {
    if (!isVisionMissionVisible) return;

    const interval = setInterval(() => {
      setCurrentVisionSection((prev) => (prev + 1) % visionSections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [visionSections.length, isVisionMissionVisible]);

  // Calculate car position for platform features grid
  useEffect(() => {
    const gridCols = 3;
    const col = currentFeatureSection % gridCols;
    const row = Math.floor(currentFeatureSection / gridCols);
    
    // Position relative to grid layout - at the bottom of each box
    const xPercent = (col * 33.33) + 16.66; // Center of each column
    const yPercent = (row * 50) + 40; // Bottom area of each row
    
    setCarFeaturePosition({ x: xPercent, y: yPercent });
  }, [currentFeatureSection]);

  // Calculate car position for vision & mission section
  useEffect(() => {
    const col = currentVisionSection % 2;
    const xPercent = (col * 50) + 25; // Center of each column (25% and 75%)
    const yPercent = 40; // Bottom area of the cards
    
    setCarVisionPosition({ x: xPercent, y: yPercent });
  }, [currentVisionSection]);

  const getCarColor = () => {
    const currentSection = featureSections[currentFeatureSection];
    switch (currentSection.color) {
      case 'cyan': return 'text-cyan-400';
      case 'pink': return 'text-pink-400';
      case 'blue': return 'text-blue-400';
      case 'orange': return 'text-orange-400';
      case 'green': return 'text-green-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-blue-400';
    }
  };

  const getVisionCarColor = () => {
    const currentSection = visionSections[currentVisionSection];
    switch (currentSection.color) {
      case 'purple': return 'text-purple-400';
      case 'pink': return 'text-pink-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="bg-black text-white py-20 relative overflow-hidden">
      {/* Reduced opacity from 0.35 to 0.25 (30% reduction) */}
      <BlockchainBackground opacity={0.25} />
      
      {/* New organized EVRS Overview */}
      <EVRSOverview />

      {/* Platform Features Section */}
      <section ref={platformFeaturesRef} className="container mx-auto px-8 mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-white">
          Platform Features
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black border border-gray-800 rounded-none p-8 hover:border-gray-700 transition-colors duration-300">
            <p className="text-gray-300 text-xl leading-relaxed text-center font-light">
              Over the next three years, EVRS will expand its fleet capacity, deepen token utility, and decentralize governance through a DAO.
            </p>
          </div>
        </div>

        {/* Platform Features Grid with Animated Car */}
        <div className="relative">
          {/* Animated Car - positioned at bottom of boxes - only visible when section is in view */}
          {isPlatformFeaturesVisible && (
            <div 
              className="absolute z-20 pointer-events-none transition-all duration-1000 ease-in-out"
              style={{
                left: `${carFeaturePosition.x}%`,
                top: `${carFeaturePosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="relative">
                <Car 
                  size={24} 
                  className={`${getCarColor()} drop-shadow-lg animate-pulse`}
                  style={{ 
                    filter: `drop-shadow(0 0 8px ${featureSections[currentFeatureSection].color === 'cyan' ? 'rgba(6, 182, 212, 0.6)' : 
                      featureSections[currentFeatureSection].color === 'pink' ? 'rgba(236, 72, 153, 0.6)' :
                      featureSections[currentFeatureSection].color === 'blue' ? 'rgba(59, 130, 246, 0.6)' :
                      featureSections[currentFeatureSection].color === 'orange' ? 'rgba(249, 115, 22, 0.6)' :
                      featureSections[currentFeatureSection].color === 'green' ? 'rgba(34, 197, 94, 0.6)' :
                      'rgba(147, 51, 234, 0.6)'})`,
                    transform: 'rotate(-15deg)'
                  }} 
                />
                {/* Car trail effect */}
                <div className="absolute inset-0 -z-10">
                  <div className={`w-8 h-1 bg-gradient-to-r from-${featureSections[currentFeatureSection].color}-400/60 to-transparent rounded-full animate-pulse`}
                       style={{ transform: 'translateX(-100%) translateY(50%) rotate(-15deg)' }}></div>
                </div>
              </div>
            </div>
          )}

          {/* Grid with enhanced styling for active section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 0 ? 'ring-2 ring-cyan-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20 group-hover:animate-pulse">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">Blockchain-Backed Revenue</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Transparent, GPS-tracked earnings from real EV fleets operating in high-demand urban environments.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 1 ? 'ring-2 ring-pink-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-pink-500/20 group-hover:animate-pulse">
                  <Rocket className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">NFT Ownership Access</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Dynamic NFT access layers enable fractional ownership of revenue-generating vehicle fleets.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 2 ? 'ring-2 ring-blue-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 group-hover:animate-pulse">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">DePIN Integration</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Decentralized Physical Infrastructure Networks connecting digital assets to real-world mobility.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 3 ? 'ring-2 ring-orange-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-orange-500/20 group-hover:animate-pulse">
                  <DollarSign className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">Smart Contract Distribution</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Automated earnings distribution through secure smart contracts and yield optimization.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 4 ? 'ring-2 ring-green-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/20 group-hover:animate-pulse">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">Global Expansion</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Strategic focus on emerging markets across Asia and Africa with rapid urbanization.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isPlatformFeaturesVisible && currentFeatureSection === 5 ? 'ring-2 ring-purple-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20 group-hover:animate-pulse">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white text-lg font-light group-hover:text-gray-300 transition-colors">DAO Governance</h3>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Decentralized governance through DAO structure for community-driven decision making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionMissionRef} className="container mx-auto px-8 mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-light mb-16 text-center text-white">
          Vision & Mission of EVRS
        </h2>
        
        <div className="relative">
          {/* Animated Car for Vision & Mission - only visible when section is in view */}
          {isVisionMissionVisible && (
            <div 
              className="absolute z-20 pointer-events-none transition-all duration-1000 ease-in-out"
              style={{
                left: `${carVisionPosition.x}%`,
                top: `${carVisionPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="relative">
                <Car 
                  size={24} 
                  className={`${getVisionCarColor()} drop-shadow-lg animate-pulse`}
                  style={{ 
                    filter: `drop-shadow(0 0 8px ${visionSections[currentVisionSection].color === 'purple' ? 'rgba(147, 51, 234, 0.6)' : 'rgba(236, 72, 153, 0.6)'})`,
                    transform: 'rotate(-15deg)'
                  }} 
                />
                {/* Car trail effect */}
                <div className="absolute inset-0 -z-10">
                  <div className={`w-8 h-1 bg-gradient-to-r from-${visionSections[currentVisionSection].color}-400/60 to-transparent rounded-full animate-pulse`}
                       style={{ transform: 'translateX(-100%) translateY(50%) rotate(-15deg)' }}></div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-px bg-gray-800 mb-16">
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isVisionMissionVisible && currentVisionSection === 0 ? 'ring-2 ring-purple-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-purple-500/20 group-hover:animate-pulse">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-light group-hover:text-gray-300 transition-colors">Vision</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed">
                To revolutionize transportation finance by decentralizing electric vehicle (EV) ownership, empowering anyone anywhere to earn from the clean mobility economy. EVRS aims to create a globally scalable, blockchain-native ecosystem where EV assets generate sustainable income, governed by a community and fueled by the EVRS token.
              </p>
            </div>
            
            <div className={`bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group ${
              isVisionMissionVisible && currentVisionSection === 1 ? 'ring-2 ring-pink-400/50 bg-gray-900/50' : ''
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-pink-500/20 group-hover:animate-pulse">
                  <Globe className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-white text-xl font-light group-hover:text-gray-300 transition-colors">Mission</h3>
              </div>
              <p className="text-gray-300 text-base font-light leading-relaxed">
                Our mission is to build the world's first Web3 powered EV revenue-sharing network bridging real world EV assets with decentralized finance. Through the EVRS token, we democratize access to EV fleet ownership and unlock new income streams for individuals and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Vision Elements */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800">
          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-purple-500/20 group-hover:animate-pulse">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h3 className="text-white text-xl font-light mb-4 group-hover:text-gray-300 transition-colors">Global Scale</h3>
            <p className="text-gray-400 text-sm font-light">Worldwide EV Network</p>
          </div>
          
          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-pink-500/20 group-hover:animate-pulse">
                <Database className="w-6 h-6 text-pink-400" />
              </div>
            </div>
            <h3 className="text-white text-xl font-light mb-4 group-hover:text-gray-300 transition-colors">Web3 Native</h3>
            <p className="text-gray-400 text-sm font-light">Blockchain-Powered Infrastructure</p>
          </div>
          
          <div className="bg-black p-8 hover:bg-gray-900 transition-colors duration-300 group text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-lg bg-cyan-500/20 group-hover:animate-pulse">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-white text-xl font-light mb-4 group-hover:text-gray-300 transition-colors">Community Driven</h3>
            <p className="text-gray-400 text-sm font-light">Decentralized Governance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVRSContent;

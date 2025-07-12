
import React from 'react';
import LayeredArchitecture from './LayeredArchitecture';
import AnimatedBackground3D from './AnimatedBackground3D';

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-8 py-20 min-h-[80vh] overflow-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground3D />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Centered tagline */}
        <div className="flex justify-center mb-8">
          <p className="text-gray-400 text-lg max-w-2xl">
            Turning Electric Vehicles into Yield-Generating, Blockchain-Powered Infrastructure
          </p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
          Decentralized
          <br />
          EV Revenue
          <br />
          Sharing
        </h1>
        
        {/* Layered Architecture Diagram */}
        <div className="w-full max-w-5xl mb-8">
          <LayeredArchitecture />
        </div>
      </div>
    </div>
  );
};

export default Hero;

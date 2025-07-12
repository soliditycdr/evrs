
import React from 'react';
import ArchitectureLayer from './ArchitectureLayer';

const LayeredArchitecture = () => {
  const layers = [
    {
      title: "EVRS NFT Minting Layer",
      description: "Tokenize EV assets into revenue-generating NFTs with blockchain verification and smart contract automation",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-400"
    },
    {
      title: "Revenue Distribution Protocol",
      description: "Automated yield distribution system powered by DeFi protocols and transparent blockchain accounting",
      bgColor: "bg-blue-600/20", 
      borderColor: "border-blue-400"
    },
    {
      title: "Fleet Performance Analytics",
      description: "Real-time monitoring of EV performance metrics, utilization rates, and revenue optimization algorithms",
      bgColor: "bg-green-600/20",
      borderColor: "border-green-400"
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      {/* Architecture Layers with Animation */}
      <div className="relative z-10 space-y-12">
        {layers.map((layer, index) => (
          <ArchitectureLayer
            key={index}
            {...layer}
            index={index}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default LayeredArchitecture;

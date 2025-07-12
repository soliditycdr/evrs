
import React from 'react';

const RotatingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large rotating sphere */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-800/20 to-gray-900/40 rounded-full animate-spin-slow opacity-30 blur-sm"></div>
      
      {/* Medium rotating geometric shape */}
      <div className="absolute top-1/2 right-20 w-64 h-64 bg-gradient-to-tr from-gray-700/15 to-gray-800/30 transform rotate-45 animate-spin-reverse opacity-25 blur-sm"></div>
      
      {/* Small rotating circle */}
      <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-gradient-to-bl from-gray-600/20 to-gray-900/35 rounded-full animate-spin-slow-reverse opacity-20 blur-sm"></div>
      
      {/* Extra geometric elements */}
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-gray-800/25 to-gray-700/20 transform rotate-12 animate-float opacity-15 blur-sm"></div>
      
      <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-tl from-gray-900/20 to-gray-800/25 rounded-full animate-spin-reverse opacity-20 blur-md"></div>
      
      {/* Additional smaller elements */}
      <div className="absolute top-40 right-1/2 w-24 h-24 bg-gray-700/15 transform rotate-45 animate-spin opacity-10 blur-sm"></div>
      
      <div className="absolute bottom-1/2 left-16 w-40 h-40 bg-gradient-to-br from-gray-600/15 to-gray-800/20 rounded-full animate-pulse opacity-15 blur-md"></div>
    </div>
  );
};

export default RotatingBackground;

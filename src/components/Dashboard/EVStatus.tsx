
import React, { useState } from 'react';

const EVStatus = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden hover:border-gray-500 transition-all duration-300">
      {/* Futuristic accent lines */}
      <div className="absolute top-4 right-4 w-8 h-0.5 bg-gray-500 opacity-50"></div>
      <div className="absolute top-6 right-4 w-12 h-0.5 bg-gray-500 opacity-30"></div>
      
      <h3 className="text-lg font-light text-white mb-6">EV Status</h3>
      
      <div className="space-y-6">
        <div className="text-center">
          <div className="text-sm text-gray-400 mb-2">Manage</div>
          <div 
            className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 relative cursor-pointer transform hover:scale-110 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-white text-2xl relative z-10">🚗</span>
            
            {/* Orbiting elements */}
            {isHovered && (
              <>
                <div className="absolute animate-sparkle-orbit">
                  <span className="text-white text-xs">⚡</span>
                </div>
                <div className="absolute animate-sparkle-orbit" style={{ animationDelay: '3s' }}>
                  <span className="text-white text-xs">🔋</span>
                </div>
                <div className="absolute animate-sparkle-orbit" style={{ animationDelay: '6s' }}>
                  <span className="text-white text-xs">🌱</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center group cursor-pointer hover:bg-gray-900 p-2 rounded transition-colors duration-200">
            <span className="text-gray-400 text-sm group-hover:text-white">Total:</span>
            <span className="text-white font-bold group-hover:text-green-400 transition-colors duration-200">12</span>
          </div>
          
          <div className="flex justify-between items-center group cursor-pointer hover:bg-gray-900 p-2 rounded transition-colors duration-200">
            <span className="text-gray-400 text-sm group-hover:text-white">On Lease:</span>
            <span className="text-white font-bold group-hover:text-blue-400 transition-colors duration-200">8</span>
          </div>
          
          <div className="flex justify-between items-center group cursor-pointer hover:bg-gray-900 p-2 rounded transition-colors duration-200">
            <span className="text-gray-400 text-sm group-hover:text-white">Available:</span>
            <span className="text-white font-bold group-hover:text-yellow-400 transition-colors duration-200">4</span>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-gray-400 text-sm">Time-Linked</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-2 hover:bg-purple-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12">
            <span className="text-white text-2xl animate-bounce">🏆</span>
          </div>
          <div className="text-sm text-gray-400 mb-1">Get 1,000 EXP</div>
          <div className="text-xs text-gray-500">Follow us on XTwittery!</div>
          <button className="mt-3 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Click to Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVStatus;

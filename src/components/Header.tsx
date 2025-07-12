
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 relative z-20">
      <div className="flex items-center space-x-2 ml-12">
        <img 
          src="/lovable-uploads/6f41046e-3dc4-4145-afba-9a286e85387d.png" 
          alt="EVRS Logo" 
          className="h-16 w-16"
        />
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Whitepaper
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Documents
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Fleet Tracker
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          OG NFT
        </a>
      </nav>

      <button 
        className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-200 hover:scale-105"
      >
        EVRS BETA APP
      </button>
    </header>
  );
};

export default Header;

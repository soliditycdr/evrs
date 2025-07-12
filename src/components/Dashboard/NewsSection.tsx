
import React, { useState, useEffect } from 'react';

const NewsSection = () => {
  const [currentNews, setCurrentNews] = useState(0);
  const [isLive, setIsLive] = useState(true);
  
  const newsItems = [
    "Insights on early-stage space tech ventures for 2024",
    "EV market surge drives 40% increase in DAO participation",
    "New blockchain protocol reduces transaction costs by 60%",
    "Partnership with Tesla announced for fleet expansion"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden hover:border-gray-500 transition-all duration-300 group">
      {/* Futuristic corner accent */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-gray-500 opacity-20 rounded-tl-lg group-hover:opacity-40 transition-opacity duration-300"></div>
      
      {/* Live indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
        <span className="text-xs text-gray-400">LIVE</span>
      </div>
      
      <h3 className="text-lg font-light text-white mb-4 uppercase tracking-wider">News</h3>
      
      <div className="relative h-16 overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${currentNews * 100}%)` }}
        >
          {newsItems.map((news, index) => (
            <div 
              key={index}
              className="h-16 flex items-center text-gray-300 text-sm leading-relaxed hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {news}
            </div>
          ))}
        </div>
      </div>
      
      {/* News navigation dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentNews === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentNews(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

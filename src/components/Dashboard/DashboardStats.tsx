
import React, { useState } from 'react';

const DashboardStats = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const stats = [
    {
      title: "FUNDS",
      value: "57",
      icon: "💎",
      trend: "+12%",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "TO PROJECTS", 
      value: "362",
      icon: "📊",
      trend: "+8%",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "RETURN RATE",
      value: "17%",
      icon: "📈",
      trend: "+3%",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "INVESTED",
      value: "$35,800",
      icon: "💰",
      trend: "+15%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="border border-gray-700 rounded-lg p-6 bg-black hover:border-gray-500 transition-all duration-300 relative overflow-hidden group cursor-pointer transform hover:scale-105"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
          
          {/* Futuristic corner accent */}
          <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Moving particles */}
          {hoveredIndex === index && (
            <>
              <div className="absolute top-1/2 left-0 w-4 h-4 bg-white rounded-full opacity-30 animate-modernMoveRight"></div>
              <div className="absolute top-1/2 right-0 w-4 h-4 bg-white rounded-full opacity-30 animate-modernMoveLeft"></div>
            </>
          )}
          
          <div className="text-center relative z-10">
            <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-2xl lg:text-3xl font-light text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
              {stat.value}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
              {stat.title}
            </div>
            <div className="text-green-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {stat.trend}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;

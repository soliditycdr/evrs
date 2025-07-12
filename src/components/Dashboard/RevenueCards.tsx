
import React, { useState } from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const RevenueCards = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const revenueData = [
    {
      id: 'total',
      title: 'Total Revenue',
      value: '3.9K',
      currency: '$aEVRS',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-600',
      trend: '+24%'
    },
    {
      id: 'yesterday',
      title: 'Yesterday Revenue',
      value: '2.85',
      currency: '$aEVRS',
      icon: Calendar,
      gradient: 'from-blue-500 to-cyan-600',
      trend: '+12%'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {revenueData.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden hover:border-gray-500 transition-all duration-300 group cursor-pointer"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            {/* Floating particles */}
            {hoveredCard === item.id && (
              <>
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-50 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </>
            )}
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <IconComponent className="text-gray-400 group-hover:text-white transition-colors duration-300" size={24} />
                <div className="text-green-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.trend}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-3xl font-light text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {item.value}
                </span>
                <span className="text-gray-400 ml-2">{item.currency}</span>
              </div>
              
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {item.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RevenueCards;

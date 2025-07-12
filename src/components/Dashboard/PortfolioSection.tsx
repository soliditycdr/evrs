
import React, { useState } from 'react';

const PortfolioSection = () => {
  const [selectedTab, setSelectedTab] = useState('investments');
  
  const portfolioItems = [
    { name: "DELOVA TECNOLOGIES", date: "10 APS 2024", value: "$12,500", change: "+15.2%" },
    { name: "ZENCORE", date: "08 APR 2024", value: "$8,900", change: "+8.7%" },
    { name: "QUANTUM DYNAMICS", date: "22 MAR 2024", value: "$15,200", change: "+22.1%" }
  ];

  const recentActivity = [
    { action: "Investment", company: "ZENCORE", amount: "$5,000", time: "2 hours ago" },
    { action: "Dividend", company: "DELOVA", amount: "$1,200", time: "1 day ago" },
    { action: "Stake", company: "QUANTUM", amount: "$3,500", time: "3 days ago" }
  ];

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden hover:border-gray-500 transition-all duration-300 group">
      {/* Futuristic accent lines */}
      <div className="absolute top-4 left-4 w-8 h-0.5 bg-gray-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-6 left-4 w-12 h-0.5 bg-gray-500 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      {/* Tab Navigation */}
      <div className="flex mb-4 bg-gray-900 rounded-lg p-1">
        <button
          onClick={() => setSelectedTab('investments')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedTab === 'investments'
              ? 'bg-white text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Investments
        </button>
        <button
          onClick={() => setSelectedTab('activity')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
            selectedTab === 'activity'
              ? 'bg-white text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Activity
        </button>
      </div>
      
      <h3 className="text-lg font-light text-white mb-4 uppercase tracking-wider">Portfolio</h3>
      
      {selectedTab === 'investments' ? (
        <div className="space-y-4">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="border-l-2 border-gray-600 pl-4 hover:border-green-500 transition-all duration-300 cursor-pointer group/item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="text-white text-sm font-medium group-hover/item:text-green-400 transition-colors duration-200">
                  {item.name}
                </div>
                <div className="text-green-400 text-xs font-bold">
                  {item.change}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-gray-400 text-xs">{item.date}</div>
                <div className="text-white text-sm font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-900 transition-all duration-200 cursor-pointer group/activity"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.action === 'Investment' ? 'bg-blue-500' :
                  activity.action === 'Dividend' ? 'bg-green-500' : 'bg-purple-500'
                }`}></div>
                <div>
                  <div className="text-white text-sm group-hover/activity:text-green-400 transition-colors duration-200">
                    {activity.action} • {activity.company}
                  </div>
                  <div className="text-gray-400 text-xs">{activity.time}</div>
                </div>
              </div>
              <div className="text-white font-medium">{activity.amount}</div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Total Portfolio Value</span>
          <span className="text-white font-bold text-lg">$36,600</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-400 text-xs">24h Change</span>
          <span className="text-green-400 text-sm font-medium">+$2,150 (+6.2%)</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;

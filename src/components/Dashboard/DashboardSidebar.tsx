
import React, { useState } from 'react';
import { LayoutDashboard, Car, DollarSign, Users, User, X, Twitter } from 'lucide-react';

const DashboardSidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'My EV', icon: Car, active: false },
    { name: 'Revenue', icon: DollarSign, active: false },
    { name: 'Referrals', icon: Users, active: false },
    { name: 'Profile', icon: User, active: false }
  ];

  return (
    <div className="w-64 bg-black border-r border-gray-700 min-h-screen p-6 relative overflow-hidden">
      {/* Futuristic corner accent */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gray-500 opacity-30"></div>
      
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="text-white font-bold text-xl">EVRS</div>
        <div className="bg-gray-600 text-white text-xs px-2 py-1 rounded">BETA</div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2 mb-12">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 relative group ${
                activeItem === item.name
                  ? 'bg-white text-black font-medium'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {activeItem === item.name && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black rounded-r-full"></div>
              )}
              <IconComponent size={20} />
              <span>{item.name}</span>
              {activeItem === item.name && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200 opacity-20 rounded-lg"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Follow Us Section */}
      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Follow Us</h3>
        <div className="flex space-x-3">
          <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 group">
            <X size={16} className="text-gray-400 group-hover:text-white" />
          </button>
          <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 group">
            <div className="text-gray-400 group-hover:text-white text-sm font-bold">D</div>
          </button>
        </div>
      </div>

      {/* Theme Section */}
      <div className="mt-8">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Theme</h3>
        <button className="w-full bg-gray-800 rounded-lg p-3 flex items-center justify-between hover:bg-gray-700 transition-colors duration-200">
          <span className="text-gray-300 text-sm">Dark Mode</span>
          <div className="w-8 h-4 bg-white rounded-full relative">
            <div className="w-3 h-3 bg-black rounded-full absolute top-0.5 right-0.5 transition-all duration-200"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;

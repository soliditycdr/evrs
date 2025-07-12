
import React from 'react';
import { Copy } from 'lucide-react';

const DashboardHeader = () => {
  const handleCopyReferral = () => {
    navigator.clipboard.writeText('https://evrs.app/ref/devos');
    // You could add a toast notification here
  };

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden">
      {/* Futuristic corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gray-500 rounded-tl-lg opacity-30"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gray-500 rounded-tr-lg opacity-30"></div>
      
      <div className="flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-3xl font-light text-white mb-2">
            GM, Devos! 👋
          </h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Referred:</span>
              <span className="text-white font-bold">16</span>
            </div>
            <button 
              onClick={handleCopyReferral}
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg transition-colors duration-200"
            >
              <Copy size={14} className="text-gray-400" />
              <span className="text-gray-300">Copy Referral Link</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          {/* OG NFT Tier Progress */}
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-1">OG NFT Tier:</p>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Level 3/5</div>
          </div>
          
          {/* SaEVRS Balance */}
          <div className="text-right">
            <p className="text-sm text-gray-400">SaEVRS:</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-bold">3,990.00</span>
            </div>
          </div>
          
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
            D
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

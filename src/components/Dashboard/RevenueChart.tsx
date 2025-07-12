
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const RevenueChart = () => {
  const data = [
    { month: 'JAN', revenue: 20 },
    { month: 'FEB', revenue: 35 },
    { month: 'MAR', revenue: 45 },
    { month: 'APR', revenue: 40 },
    { month: 'MAY', revenue: 55 },
    { month: 'JUN', revenue: 75 },
    { month: 'JUL', revenue: 60 },
    { month: 'AUG', revenue: 80 },
    { month: 'SEP', revenue: 85 },
    { month: 'OCT', revenue: 90 },
    { month: 'NOV', revenue: 95 },
    { month: 'DEC', revenue: 100 }
  ];

  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative overflow-hidden">
      {/* Futuristic corner decorations */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-gray-500 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-gray-500 opacity-30"></div>
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-light text-white">Revenue Stats</h3>
        <select className="bg-black border border-gray-700 text-white px-3 py-1 rounded text-sm">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => `${value}K`}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#10B981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;

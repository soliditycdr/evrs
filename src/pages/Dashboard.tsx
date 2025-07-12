
import React from 'react';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import RevenueCards from '../components/Dashboard/RevenueCards';
import RevenueChart from '../components/Dashboard/RevenueChart';
import EVStatus from '../components/Dashboard/EVStatus';
import NewsSection from '../components/Dashboard/NewsSection';
import TasksSection from '../components/Dashboard/TasksSection';
import PortfolioSection from '../components/Dashboard/PortfolioSection';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative z-10">
        <DashboardHeader />
        
        {/* Revenue Cards */}
        <div className="mt-8">
          <RevenueCards />
        </div>
        
        {/* Main Dashboard Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Chart */}
          <div className="lg:col-span-3">
            <RevenueChart />
          </div>
          
          {/* Right Column - EV Status */}
          <div className="lg:col-span-1">
            <EVStatus />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <NewsSection />
          <TasksSection />
          <PortfolioSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

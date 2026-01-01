
import React from 'react';
import Sidebar from './components/Sidebar';
import SecondarySidebar from './components/Secondary';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import "../src/index.css"

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden font-['Inter']">
      {/* Container with rounded corners to mimic the image exactly */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Leftmost slim bar */}
        <Sidebar />
        
        {/* Main Side Navigation */}
        <SecondarySidebar />
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 p-6">
          <Header />
          <main className="flex-1 bg-white overflow-y-auto custom-scrollbar rounded-[40px]">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;

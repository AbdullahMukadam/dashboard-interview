
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-[84px] bg-[#F3F4F6] border-r border-gray-100 flex flex-col items-center py-8 justify-between shrink-0 select-none">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="w-12 h-12 bg-black rounded-[16px] flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-black/10 cursor-pointer active:scale-95 transition-all mb-4">
          C
        </div>
        
        {/* Navigation Icons */}
        <div className="flex flex-col space-y-3">
          {/* Dashboard Icon */}
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black bg-white transition-all cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M2 12h20" />
            </svg>
          </div>
          
          {/* Analytics Icon (Active) */}
          <div className="w-12 h-12 rounded-full bg-[#e11d48] flex items-center justify-center text-white shadow-xl shadow-rose-200 cursor-pointer active:scale-95 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>

          {/* Document Icon */}
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black bg-white transition-all cursor-pointer">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
          </div>

          {/* Command Icon */}
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black bg-white transition-all cursor-pointer">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8m-8 6h8M12 2v20M2 12h20" />
             </svg>
          </div>

          {/* Folder Icon */}
          <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black bg-white transition-all cursor-pointer">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
             </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6">
        {/* Chat Icon */}
        <button className="relative w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center text-black bg-white transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="absolute top-1 right-1 w-3 h-3 bg-[#e11d48] rounded-full border-2 border-white"></span>
        </button>
        {/* Settings Icon */}
        <button className="w-12 h-12 border border-gray-100 rounded-full flex items-center justify-center text-black bg-white transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

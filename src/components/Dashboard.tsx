import React from 'react';
import { ChevronRight, Star, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Stats from './Stats'; // Assuming you have this component

const MOCK_USERS = [
  { id: '1', name: 'Armin A.', avatar: 'https://i.pravatar.cc/150?u=armin', revenue: 209633, percent: 39.63 },
  { id: '2', name: 'Eren Y.', avatar: 'https://i.pravatar.cc/150?u=eren', revenue: 156841, percent: 29.65 },
  { id: '3', name: 'Mikasa A.', avatar: 'https://i.pravatar.cc/150?u=mikasa', revenue: 117115, percent: 22.14 },
];

const Dashboard: React.FC = () => {
  return (
    // Changed padding to be responsive (p-4 mobile -> p-8 desktop)
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center font-inter bg-white">
      <div className="w-full max-w-[1400px] space-y-8">

        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col gap-6 md:gap-10">

          {/* Top Row: Avatars & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-2xl font-light hover:border-gray-500 hover:text-gray-600 transition-colors flex-shrink-0">
                +
              </button>

              {/* User List - Scrollable on very small mobile */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide max-w-full">
                {MOCK_USERS.map((user) => (
                  <div key={user.id} className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 rounded-full py-1.5 pl-1.5 pr-4 shadow-sm hover:shadow-md transition-all cursor-pointer group">
                    <img src={user.avatar} className="w-7 h-7 rounded-full object-cover" alt={user.name} />
                    <span className="text-xs font-bold tracking-tight text-gray-800 whitespace-nowrap">{user.name}</span>
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-black border-4 border-white shadow-md flex-shrink-0">
                  C
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              {['M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'].map((path, i) => (
                <button key={i} className="p-2.5 text-gray-400 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 rounded-xl transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={path} strokeWidth="2.2" /></svg>
                </button>
              ))}
            </div>
          </div>

          {/* Title & Date Picker */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Responsive Text Size: text-3xl on mobile -> text-[58px] on desktop */}
            <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold tracking-tighter leading-[0.9] text-gray-400 break-words">
              New report
            </h1>

            <div className="flex flex-wrap items-center gap-2 sm:gap-8 mb-1">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-11 h-6 bg-black rounded-full relative p-1 transition-colors group-hover:bg-gray-800">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
                <span className="text-sm font-bold text-gray-700">Timeframe</span>
              </div>

              <button className="flex items-center gap-3 px-5 py-3 bg-[#F3F4F6]  rounded-[20px] text-xs sm:text-[13px] font-bold shadow-sm hover:shadow-md transition-all whitespace-nowrap">
                Sep 1 - Nov 30, 2023
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="3" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        {/* Changed layout: Stack vertically on small screens, Side-by-side on XL screens */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-6 items-start">

          {/* 1. REVENUE SECTION (Left Side) */}
          {/* w-full on mobile, fixed width on xl */}
          <div className="w-full xl:w-[32%] flex-shrink-0 flex flex-col justify-center pt-2">
            <h2 className="text-[17px] font-bold text-gray-900 mb-2 tracking-tight">Revenue</h2>

            {/* Amount Line */}
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-4xl sm:text-[46px] leading-[1] font-extrabold tracking-tighter text-gray-900">
                $528,976<span className="text-gray-300">.82</span>
              </span>
            </div>

            {/* Pills Row */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#e11d48] text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3 stroke-[3px]" />
                7.9%
              </div>
              <div className="bg-[#e11d48] text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                $27,335.09
              </div>
            </div>

            {/* Subtext */}
            <div className="flex flex-wrap items-center gap-1.5 text-gray-500 text-[13px] font-medium">
              <span>vs prev. $501,641.73</span>
              <span className="text-gray-400">Jun 1 - Aug 31, 2023</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 mt-0.5" />
            </div>
          </div>

          {/* 2. METRIC CARDS GRID (Right Side) */}
          <div className="flex-grow w-full">
            {/* Grid Logic:
               - Mobile: 1 column
               - Tablet (sm): 2 columns
               - Laptop (lg): 4 columns
               - Desktop (xl): 12 columns (Original Design)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-12 gap-4">

              {/* CARD: Top Sales (Wide) */}
              {/* xl:col-span-3 (1/4 width), lg:col-span-2 (1/2 width) */}
              <div className="xl:col-span-3 lg:col-span-2 bg-white border border-gray-100 rounded-[20px] p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[150px]">
                <span className="text-[13px] font-semibold text-gray-400">Top sales</span>
                <div className="text-[32px] font-bold text-gray-900 tracking-tight leading-none mt-1">72</div>

                {/* User Row */}
                <div className="mt-auto flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-2">
                    <img src="https://i.pravatar.cc/150?u=mikasa" className="w-6 h-6 rounded-full" alt="Mikasa" />
                    <span className="text-[13px] font-bold text-gray-800">Mikasa</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* CARD: Best Deal (Wide, Dark) */}
              <div className="xl:col-span-3 lg:col-span-2 bg-[#111] rounded-[20px] p-5 shadow-lg flex flex-col justify-between h-[150px] relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[13px] font-semibold text-gray-500">Best deal</span>
                  <Star className="w-4 h-4 text-gray-600 fill-gray-900" />
                </div>
                <div className="text-[28px] font-bold text-white tracking-tight leading-none">$42,300</div>

                {/* Company Row */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[13px] font-bold text-gray-400">Rolf Inc.</span>
                  <button className="w-7 h-7 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* CARD: Deals (Narrow) */}
              {/* xl:col-span-2 (1/6 width), lg:col-span-1 (1/4 width) */}
              <div className="xl:col-span-2 lg:col-span-1 bg-white border border-gray-100 rounded-[20px] p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center h-[150px]">
                <span className="text-[13px] font-semibold text-gray-800 mb-3">Deals</span>
                <div className="bg-[#e5e7eb] text-white text-[13px] font-bold px-3 py-1 rounded-full mb-3">
                  <span className="text-gray-500">256</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-500">
                  <ArrowDownRight className="w-3 h-3" />
                  5
                </div>
              </div>

              {/* CARD: Value (Narrow, Pink Highlight) */}
              <div className="xl:col-span-2 lg:col-span-1 bg-white border-[1.5px] border-[#be123c] rounded-[20px] p-4 shadow-sm flex flex-col items-center justify-center h-[150px]">
                <span className="text-[13px] font-semibold text-gray-800 mb-3">Value</span>
                <div className="bg-[#be123c] text-white text-[13px] font-bold px-3 py-1 rounded-full mb-3 shadow-md shadow-rose-200">
                  528k
                </div>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-800">
                  <ArrowUpRight className="w-3 h-3" />
                  7.9%
                </div>
              </div>

              {/* CARD: Win rate (Narrow) */}
              <div className="xl:col-span-2 lg:col-span-1 bg-white border border-gray-100 rounded-[20px] p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center h-[150px]">
                <span className="text-[13px] font-semibold text-gray-800 mb-3">Win rate</span>
                <div className="bg-[#e5e7eb] text-gray-400 text-[13px] font-bold px-3 py-1 rounded-full mb-3">
                  44%
                </div>
                <div className="flex items-center gap-1 text-[12px] font-bold text-gray-500">
                  <ArrowUpRight className="w-3 h-3" />
                  1.2%
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- CONTRIBUTOR BAR --- */}
        {/* Changed to stack vertically on mobile */}
        <div className="flex flex-col xl:flex-row items-center gap-4 w-full">
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#F3F4F6] rounded-full p-1">

            {MOCK_USERS.map((user) => (
              <div key={user.id} className="bg-white border border-gray-100 rounded-full h-14 px-2 pl-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" alt={user.name} />
                  <span className="text-[14px] font-bold text-gray-900">${user.revenue.toLocaleString()}</span>
                </div>
                <span className="text-[12px] font-medium text-gray-400 pr-3">{user.percent}%</span>
              </div>
            ))}

            <div className="bg-[#f3f4f6] border border-transparent rounded-full h-14 px-2 pl-3 flex items-center justify-between hover:bg-white hover:border-gray-100 hover:shadow-sm transition-all cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-black text-sm border-4 border-[#f3f4f6] group-hover:border-white shadow-sm transition-all">C</div>
                <span className="text-[14px] font-bold text-gray-900">$45,386</span>
              </div>
              <span className="text-[12px] font-medium text-gray-400 pr-3">8.58%</span>
            </div>
          </div>

          {/* Button takes full width on mobile, auto on desktop */}
          <button className="h-14 px-8 bg-black text-white rounded-full text-[14px] font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 w-full xl:w-auto">
            Details
          </button>
        </div>

        {/* Graph Component Placeholder - Ensure it doesn't overflow */}
        <div className="mt-8 w-full overflow-hidden">
          <Stats />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
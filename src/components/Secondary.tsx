
import React from 'react';

interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  hasChevron?: boolean;
  isOpen?: boolean;
  badge?: string;
  isRed?: boolean;
  isNested?: boolean;
  isLeaf?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  icon, 
  active, 
  hasChevron, 
  isOpen, 
  badge, 
  isRed, 
}) => (
  <div className={`relative flex items-center justify-between py-1 px-2.5 rounded-lg cursor-pointer group transition-all ${isRed ? 'text-[#e11d48] font-bold' : active ? 'text-black font-bold' : 'text-[#8e8e93] hover:text-black'}`}>
    <div className="flex items-center gap-2">
      {icon && <span className="opacity-70 flex-shrink-0">{icon}</span>}
      <span className="text-[13px] tracking-tight font-medium leading-tight text-black">{label}</span>
      {hasChevron && (
        <svg className={`w-3 h-3 text-black group-hover:text-black transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3.5">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
    {badge && (
      <span className="bg-[#e11d48] text-white text-[9px] font-black px-1.5 py-0.5 rounded-[4px] shadow-sm ml-2">
        {badge}
      </span>
    )}
  </div>
);

const TreeLine: React.FC<{ children: React.ReactNode; isLast?: boolean }> = ({ children, isLast }) => (
  <div className="relative pl-3.5 ml-1.5">
    {/* Vertical line */}
    {!isLast && <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gray-300" />}
    {isLast && <div className="absolute left-0 top-0 h-3.5 w-[1.5px] bg-gray-300" />}
    
    {/* Horizontal connector */}
    <div className="absolute left-0 top-3.5 w-2.5 h-[1.5px] bg-gray-300" />
    
    {children}
  </div>
);

const SecondarySidebar: React.FC = () => {
  return (
    <div className="w-[260px] bg-[#F3F4F6] px-6 py-8 flex flex-col shrink-0 select-none overflow-y-auto custom-scrollbar">
      {/* Workspace Selector */}
      <div className="flex items-center justify-between mb-8 cursor-pointer group">
        <span className="text-[14px] font-[900] flex items-center gap-1.5">
          Codename.com 
          <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>

      <div className="space-y-6 flex-1">
        {/* Core Sections */}
        <section className="space-y-0.5">
           <NavItem label="Starred" icon={<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} />
           <NavItem label="Recent" icon={<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
           <NavItem label="Sales list" />
           <NavItem label="Goals" />
        </section>

        {/* Dashboard Tree */}
        <section>
          <div className="flex justify-between items-center mb-2.5 px-2.5">
            <span className="text-[12px] font-[900] text-[#111] uppercase tracking-wider">Dashboard</span>
            <div className="w-4 h-4 bg-[#f8f8f8] rounded-md flex items-center justify-center text-gray-400 text-sm cursor-pointer hover:bg-gray-200 hover:text-black transition-all">+</div>
          </div>
          
          <div className="space-y-0">
            <TreeLine><NavItem label="Codename" /></TreeLine>
            <TreeLine isLast>
              <NavItem label="Shared with me" hasChevron isOpen />
              <div className="mt-0.5">
                <TreeLine><NavItem label="Cargo2go" /></TreeLine>
                <TreeLine><NavItem label="Cloudz3r" badge="2" /></TreeLine>
                <TreeLine><NavItem label="Idioma" /></TreeLine>
                <TreeLine><NavItem label="Syllables" /></TreeLine>
                <TreeLine isLast><NavItem label="x-Ob" /></TreeLine>
              </div>
            </TreeLine>
          </div>
        </section>

        {/* Reports Tree */}
        <section>
          <div className="flex justify-between items-center mb-2.5 px-2.5">
            <span className="text-[12px] font-[900] text-[#111] uppercase tracking-wider">Reports</span>
            <div className="w-4 h-4 bg-[#f8f8f8] rounded-md flex items-center justify-center text-gray-400 text-sm cursor-pointer hover:bg-gray-200 hover:text-black transition-all">+</div>
          </div>
          
          <div className="space-y-0">
            <TreeLine>
              <NavItem label="Share with me" hasChevron />
              <div className="mt-0.5">
                <TreeLine><NavItem label="Deals by user" /></TreeLine>
                <TreeLine isLast><NavItem label="Deal duration" /></TreeLine>
              </div>
            </TreeLine>
            <TreeLine isLast>
              <NavItem label="My reports" hasChevron isOpen />
              <div className="mt-0.5">
                <TreeLine><NavItem label="Emails received" /></TreeLine>
                <TreeLine><NavItem label="Deal duration" /></TreeLine>
                <TreeLine><NavItem label="New report" isRed /></TreeLine>
                <TreeLine isLast><NavItem label="Analytics" badge="7" /></TreeLine>
              </div>
            </TreeLine>
          </div>
        </section>
      </div>

      {/* Footer Actions */}
      <div className="mt-auto pt-6 border-t border-gray-50">
        <div className="flex items-center gap-2.5 px-2.5 text-[12px] font-black text-gray-400 cursor-pointer hover:text-black transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Manage folders
        </div>
      </div>
    </div>
  );
};

export default SecondarySidebar;

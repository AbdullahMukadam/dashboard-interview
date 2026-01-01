

const Header = () => {
  return (
    <header className="h-[100px] bg-[#F3F4F6] flex items-center justify-between shrink-0">
      <div className="relative w-[380px]">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Try searching “insights”"
          className="w-full bg-white border-none rounded-full py-3.5 pl-12 pr-6 text-[13px] font-medium focus:ring-2 focus:ring-[#e11d48]/20 focus:bg-white transition-all outline-none"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center bg-white p-1.5 rounded-full">
          <button className="p-2 text-gray-500 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7" strokeWidth="2.5" /></svg>
          </button>
          <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-[#facc15] via-[#fb923c] to-[#ec4899] border-[1.5px] border-white shadow-sm overflow-hidden">
             <img src="https://picsum.photos/seed/user1/64/64" alt="" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
          </div>
        </div>

        <button className="w-11 h-11 bg-[#e11d48] rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-200 active:scale-95 transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeWidth="3" /></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import {  ChevronDown, ChevronUp, ArrowUpRight, ArrowUp, Filter, MoreHorizontal, ShoppingBag, Menu, Globe } from 'lucide-react';

// --- Configuration & Mock Data ---

const colors = {
    bgMain: '#F8F9FB',
    textPrimary: '#1F2937',
    textSecondary: '#9CA3AF',
    dribbble: '#EA4C89',
    behance: '#1769FF',
    google: '#EA4335',
    instagramStart: '#F58529',
    instagramEnd: '#DD2A7B',
    success: '#22C55E',
};

// Brand Logos (Unchanged)
const Logos = {
    Dribbble: ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
        <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.003 8.003 0 00-1.96-1.665c-.155.315-.32.635-.495.955a9.935 9.935 0 002.455.71zm-1.26 2.19a8.027 8.027 0 00.88-1.19 8.053 8.053 0 00-.87-1.32c.4.665.71 1.255.95 1.785.04.085.08.17.12.255-.36.15-.72.29-1.08.42v.05zm-1.275 1.875a9.718 9.718 0 01-2.575-.795c.33-.65.63-1.265.89-1.85.915.28 1.765.595 2.53.94-.28.56-.565 1.125-.845 1.705zm-1.57 1.335a8.11 8.11 0 00.16-2.295A7.997 7.997 0 0012 4c-.6.005-1.195.07-1.77.205.49.69 1.035 1.48 1.61 2.38a11.77 11.77 0 012.725.6c-.245.945-.475 1.87-.68 2.76a10.41 10.41 0 00.68.065zM12 20c-2.77 0-5.225-1.4-6.75-3.54a9.06 9.06 0 003.135-.335c-.545-1.45-1.165-3.02-1.825-4.66a9.57 9.57 0 00-1.87 2.135A8.038 8.038 0 013.8 8.47a8.15 8.15 0 01.34-.76 10.358 10.358 0 013.575 1.775c.72-1.845 1.37-3.745 1.92-5.635A8.04 8.04 0 0112 3.8c1.84 0 3.535.62 4.9 1.675-.295.54-.625 1.13-.98 1.77.77-.23 1.47-.45 2.11-.655.475.72.835 1.525 1.045 2.39a10.332 10.332 0 01-2.62-.965c.195 1.215.36 2.425.495 3.62 1.22-.365 2.12-.805 2.7-.805-.2 3.2-2.07 5.97-4.73 7.325-.03-.12-.065-.235-.1-.35-.645-2.055-1.085-4.195-1.315-6.39-1.355 1.06-2.85 2.02-4.46 2.87.275.86.53 1.735.765 2.62-1.31.475-2.675.845-4.085 1.1a8.01 8.01 0 004.475-1.375z" /></svg>
    ),
    Instagram: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="url(#insta-grad)"><defs><linearGradient id="insta-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: colors.instagramStart }} /><stop offset="100%" style={{ stopColor: colors.instagramEnd }} /></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.252-1.667 4.771-4.919 4.919-1.265.058-1.645.069-4.85.069s-3.584-.011-4.85-.069c-3.252-.148-4.771-1.667-4.919-4.919C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85C2.38 3.898 3.898 2.38 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.272 2.695.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.623 6.78 6.981 6.98 1.28.058 1.689.072 4.947.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.623 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.623-6.78-6.98-6.98C15.667.014 15.259 0 12 0z" /><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" /><circle cx="18.406" cy="5.594" r="1.44" /></svg>
    ),
    Behance: ({ className, colour }: { className?: string, colour? : string }) => (
        <svg className={className} viewBox="0 0 24 24" fill={colour || colors.behance}><path d="M8.225 8h3.94v1.777H8.225V8zm-1.17 6.628c0 .724.203 1.318.608 1.78.406.46.97.692 1.692.692.765 0 1.343-.25 1.737-.75.393-.502.59-1.24.59-2.218h-5.16c.016 1.007.192 1.72.532 2.14v-.002-.003c-.19-.417-.378-.97-.565-1.656-.01.005-.015.01-.025.014H7.054v.002zm4.11-1.253c-.03-1.17-.22-1.98-.563-2.433-.344-.45-.83-.677-1.458-.677-.62 0-1.09.22-1.405.663-.315.443-.484 1.258-.507 2.446h3.933zM22 11h-3.975v1.502H22V11zm-3.782 5.558c.662 0 1.243-.23 1.743-.695.5-.46.75-1.035.75-1.718 0-1.307-.82-2.233-2.493-2.233h-3.975v6.59h3.975v-.002c0-.678-.213-1.268-.638-1.756-.09.217-.2.38-.33.49-.397.34-.995.51-1.794.51H14.25V15h1.348c.795 0 1.394.174 1.797.517.086.072.163.176.23.31v.003c.052.148.095.305.13.466-.185.167-.383.312-.59.428v-.003c-.303.173-.665.26-1.09.26h-1.818v1.537h3.74v-.003-.003z" /></svg>
    ),
    Google: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
    ),
};

const Avatar = ({ name, className = "h-8 w-8", src }: { name: string, className?: string, src?: string }) => (
    <div className={`relative rounded-full overflow-hidden flex-shrink-0 ${className} bg-gray-200 border border-white shadow-sm`}>
        {src ? <img src={src} alt={name} className="w-full h-full object-cover" /> : <span className="text-xs font-bold text-gray-500 flex items-center justify-center h-full w-full">{name.charAt(0)}</span>}
    </div>
);

// --- Helper Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`rounded-[24px] border border-gray-100/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const FilterButton = () => (
    <button className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 bg-transparent rounded-xl px-4 py-2 hover:bg-gray-100 transition-colors border border-gray-300 hover:border-gray-200">
        <span>Filters</span>
        <Filter className="w-3.5 h-3.5" />
    </button>
);

const HeaderWithFilter = ({ icon: Icon }: { title?: string, icon: any }) => (
    <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-3 text-gray-900">
            <div className="p-2 bg-transparent rounded-xl">
                <Icon className="w-5 h-5 text-gray-600" />
            </div>

        </div>
        <FilterButton />
    </div>
);

// --- Left Column Components ---

const PlatformsSummaryCard = () => {
    const platforms = [
        { name: 'Dribbble', logo: Logos.Dribbble, value: '$227,459', percentage: '43%', color: colors.dribbble },
        { name: 'Instagram', logo: Logos.Instagram, value: '$142,823', percentage: '27%' },
        { name: 'Behance', logo: Logos.Behance, value: '$89,935', percentage: '11%', color: colors.behance },
        { name: 'Google', logo: Logos.Google, value: '$37,028', percentage: '7%' },
    ];

    return (
        <Card className="bg-[#F3F4F6] w-full p-2 h-[300px]">
            <HeaderWithFilter icon={Menu} title="Platforms" />
            <div className="space-y-2">
                {platforms.map((p) => (
                    <div key={p.name} className="flex items-center bg-white justify-between group cursor-pointer rounded-xl p-1">
                        <div className="flex items-center gap-1">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                <p.logo className="h-5 w-5" style={{ color: p.color }} />
                            </div>
                            <span className="font-bold text-[13px] text-gray-500">{p.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-[13px] text-gray-900 tracking-tight">{p.value}</span>
                            <span className="text-[11px] font-bold text-gray-500 bg-[#F3F4F6] rounded-lg px-2.5 py-1 min-w-[40px] text-center">{p.percentage}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

const DealsAmountCard = () => {
    const bars = [
        { logo: Logos.Behance, height: '45%', color: "#fff" },
        { logo: Logos.Dribbble, height: '80%', color: colors.dribbble },
        { logo: Logos.Google, height: '30%' },
        { logo: Logos.Instagram, height: '55%', isStriped: true },
    ];

    return (
        <Card className="flex flex-col bg-[#F3F4F6] p-3 h-[300px]">
            <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-transparent rounded-xl">
                    <MoreHorizontal className="text-gray-400 w-5 h-5" />
                </div>
                <FilterButton />
            </div>

            <div className="flex-grow flex items-end justify-between space-x-3 pb-2 pt-4">
                {bars.map((bar, idx) => (
                    <div key={idx} className="relative flex-1 flex flex-col items-center h-full justify-end group">
                        {/* Floating Icon */}
                        <div className="mb-3 bg-white border border-gray-100 rounded-full p-2 shadow-sm z-10 transform translate-y-2 group-hover:-translate-y-1 transition-transform duration-300">
                            <bar.logo className="h-4 w-4" style={{ color: bar.color }} />
                        </div>
                        {/* Bar */}
                        <div
                            className={`w-full max-w-[50px] rounded-2xl transition-all duration-500 ease-out group-hover:bg-opacity-80 ${bar.isStriped ? 'bg-gray-100' : 'bg-white'}`}
                            style={{
                                height: bar.height,
                                backgroundImage: bar.isStriped ? 'repeating-linear-gradient(-45deg, #f3f4f6, #f3f4f6 6px, #ffffff 6px, #ffffff 12px)' : 'none'
                            }}
                        >
                            {bar.isStriped && (
                                <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white p-1.5 rounded-full shadow-sm"><ShoppingBag className="w-3 h-3 text-gray-500" /></div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 text-left text-[13px] font-bold text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex flex-col">
                Deals amount <br /> <span className='text-black'>by referrer category</span>
            </div>
        </Card>
    );
};

const PlatformValueCard = () => {
    const data = [
        {
            month: 'Sep',
            shadowHeight: 70,
            actualHeight: 35,
            value: '$6,901',
            avatars: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2']
        },
        {
            month: 'Oct',
            shadowHeight: 95,
            actualHeight: 60,
            value: '$11,035',
            avatars: ['https://i.pravatar.cc/150?u=3']
        },
        {
            month: 'Nov',
            shadowHeight: 80,
            actualHeight: 50,
            value: '$9,288',
            avatars: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5']
        },
    ];

    return (
        // Changed to h-auto for mobile so it stacks, md:h-[300px] fixed for desktop
        <div className="bg-[#F3F4F6] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] w-full max-w-full md:max-w-[850px] h-auto md:h-[350px]">

            {/* --- Left Panel (Pink) --- */}
            <div className="w-full md:w-[35%] bg-[#F3F4F6] text-white flex flex-col justify-between relative overflow-hidden font-inter min-h-[220px]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                    {/* Header */}
                    <div className="flex items-center gap-2 p-4">
                        <div className=" p-2.5 rounded-2xl">
                            <Globe className="h-11 w-11" color='#D92D5B' />
                        </div>
                        <div>
                            <h3 className="text-gray-400 text-[13px] font-bold ">Platform value</h3>
                            <button className="flex text-black items-center font-bold text-[22px] tracking-tight hover:opacity-90 transition-opacity">
                                Dribbble
                                <ChevronDown className="w-5 h-5 ml-2 opacity-60 stroke-[3]" />
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-6 mt-4 md:mt-8 bg-[#D92D5B] p-4 rounded-tr-[30px] flex">
                        <div className='w-[25%] h-full flex items-center justify-center'>
                            <h4 className="text-white/70 font-medium text-[13px] -rotate-90 whitespace-nowrap tracking-widest uppercase">
                                Average Month
                            </h4>
                        </div>
                        <div>
                            <div>
                                <p className="text-[13px] font-medium text-white/70 mb-1">Revenue</p>
                                <p className="text-[17px] font-extrabold tracking-tight leading-none">$18,552</p>
                            </div>
                            <div className='mt-2'>
                                <p className="text-[13px] font-medium text-white/70 mb-1">Leads</p>
                                <p className="text-[17px] font-bold flex items-baseline">
                                    373
                                    <span className="ml-2 text-[13px] text-white/50 font-medium">97/276</span>
                                </p>
                            </div>
                            <div className='mt-2'>
                                <p className="text-[13px] font-medium text-white/70 mb-1">Win/loss</p>
                                <p className="text-[17px] font-bold flex items-baseline">
                                    16%
                                    <span className="ml-2 text-[13px] text-white/50 font-medium">51/318</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical Text Label */}
                <div className="absolute left-[-24px] bottom-24 transform -rotate-90 origin-bottom-right whitespace-nowrap">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                        Average monthly
                    </span>
                </div>
            </div>

            {/* --- Right Panel (Chart) --- */}
            <div className="w-full md:w-[65%] p-4 md:p-8 bg-[#F3F4F6] flex flex-col relative h-[300px] md:h-auto">
                {/* Header Controls */}
                <div className="flex justify-end space-x-1 mb-6 bg-white rounded-3xl p-1">
                    <button className="bg-gray-900 text-white px-4 md:px-6 py-2.5 rounded-3xl text-[13px] font-bold shadow-lg shadow-gray-200 hover:bg-black transition-colors">
                        Revenue
                    </button>
                    <button className="text-gray-400 bg-gray-100 hover:text-gray-600 px-4 md:px-6 py-2.5 rounded-full text-[13px] font-bold transition-colors">
                        Leads
                    </button>
                    <button className="text-gray-400 bg-gray-100 hover:text-gray-600 px-4 md:px-6 py-2.5 rounded-full text-[13px] font-bold transition-colors hidden sm:block">
                        W/L
                    </button>
                </div>

                {/* Chart Container */}
                <div className="flex-1 relative w-full mt-2">

                    {/* Horizontal Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none w-full pr-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="border-b border-gray-100 w-full h-0"></div>
                        ))}
                    </div>

                    {/* Y-Axis Labels (Right Side) */}
                    <div className="absolute right-0 top-[-10px] h-[110%] flex flex-col justify-between text-[11px] font-bold text-gray-300 pointer-events-none text-right">
                        <span>$14k</span>
                        <span>$11k</span>
                        <span>$7.5k</span>
                        <span>$4k</span>
                    </div>

                    {/* Bars Area */}
                    <div className="relative h-full flex items-end justify-around pr-8 md:pr-12 pb-2 pl-2">
                        {data.map((item, idx) => (
                            <div key={idx} className="relative flex flex-col items-center justify-end h-full w-24 group">

                                {/* Floating Tag (Tooltip) */}
                                <div
                                    className="absolute transition-all duration-500 ease-out z-20"
                                    style={{ bottom: `${item.actualHeight + 15}%` }}
                                >
                                    <div className="bg-[#E94E77] text-white text-[11px] md:text-[13px] font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-[0_4px_10px_rgba(233,78,119,0.4)] whitespace-nowrap relative">
                                        {item.value}
                                        {/* Little triangle arrow */}
                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#E94E77] rotate-45"></div>
                                    </div>
                                </div>

                                {/* Bar Group */}
                                <div className="flex items-end gap-2 h-full w-full justify-center pb-8">

                                    {/* Hatched Bar (Shadow/Target) */}
                                    <div
                                        className="w-4 md:w-5 rounded-t-full transition-all duration-700"
                                        style={{
                                            height: `${item.shadowHeight}%`,
                                            backgroundImage: 'repeating-linear-gradient(45deg, #f3f4f6, #f3f4f6 3px, #e5e7eb 3px, #e5e7eb 6px)'
                                        }}
                                    ></div>

                                    {/* Solid Bar (Actual) */}
                                    <div
                                        className="w-4 md:w-5 bg-gray-200 rounded-t-full relative transition-all duration-700 group-hover:bg-[#E94E77]/20"
                                        style={{ height: `${item.actualHeight}%` }}
                                    >
                                        {/* Avatars positioned at the bottom of the solid bar column */}
                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex -space-x-2 min-w-max">
                                            {item.avatars.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt="User"
                                                    className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white object-cover"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Month Label */}
                                <span className="absolute bottom-0 text-[10px] md:text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                                    {item.month}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Right Column Components ---

const LeaderboardHeader = () => (
    // Hidden on mobile (flex layout), visible on tablet+ (grid layout)
    <div className="hidden md:grid grid-cols-12 gap-4 text-[13px] font-bold text-gray-300 px-3 mb-3">
        <div className="col-span-4 pl-2">Sales</div>
        <div className="col-span-2">Revenue</div>
        <div className="col-span-2 text-center">Leads</div>
        <div className="col-span-2 text-center">KPI</div>
        <div className="col-span-2 text-center">W/L</div>
    </div>
);

const LeaderboardRow = ({ name, revenue, leads, kpi, wl, avatarUrl } : any) => {
    return (
        // Mobile: Flex wrap for stacking. Tablet+: Grid for columns
        <div className="flex flex-wrap md:grid md:grid-cols-12 gap-y-2 md:gap-4 items-center px-2 py-3 bg-white rounded-2xl md:rounded-full mb-3 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] shadow-md transition-all cursor-pointer group">

            {/* Name Section - Full width on very small screens, 4 cols on tablet */}
            <div className="w-full md:w-auto md:col-span-4 flex items-center justify-between md:justify-start space-x-3">
                <div className="flex items-center space-x-3">
                    <Avatar name={name} className="h-9 w-9" src={avatarUrl} />
                    <span className="font-bold text-gray-800 text-[15px]">{name}</span>
                </div>
                {/* Mobile only: Show revenue next to name to save space */}
                <div className="md:hidden font-bold text-gray-800 text-[15px] tracking-tight">{revenue}</div>
            </div>

            {/* Desktop only: Revenue column */}
            <div className="hidden md:block col-span-2 font-bold text-gray-800 text-[15px] tracking-tight">{revenue}</div>

            {/* Stats Row on Mobile / Cols on Desktop */}
            <div className="w-full md:w-auto md:contents flex justify-between items-center mt-2 md:mt-0 pl-12 md:pl-0 border-t md:border-none border-gray-100 pt-2 md:pt-0">
                <div className="md:col-span-2 flex justify-center space-x-2">
                    <span className="bg-[#1C1C1E] text-white text-[12px] font-bold rounded-full w-8 h-7 flex items-center justify-center">{leads[0]}</span>
                    <span className="bg-gray-100 text-gray-500 text-[12px] font-bold rounded-full w-8 h-7 flex items-center justify-center">{leads[1]}</span>
                </div>
                <div className="md:col-span-2 text-center font-bold text-gray-800 text-[15px]">{kpi}</div>
                <div className="md:col-span-2 flex justify-center items-center space-x-2">
                    <span className="font-bold text-gray-800 text-[14px]">{wl[0]}</span>
                    <span className="bg-[#1C1C1E] text-white text-[12px] font-bold rounded-full w-6 h-6 flex items-center justify-center">{wl[1]}</span>

                </div>
            </div>
        </div>
    );
};

const ExpandedSalespersonCard = () => {
    return (
        <div className=" bg-gradient-to-br from-[#F3F4F6] via-pink-50/80 to-pink-200 rounded-[32px] p-3 shadow-[0_15px_30px_-5px_rgba(233,78,119,0.1)] mb-3 relative overflow-hidden">

            {/* Top Row: User Stats - Responsive Grid/Flex */}
            <div className="flex flex-wrap md:grid md:grid-cols-12 gap-y-4 md:gap-4 items-center mb-6 relative z-10">

                {/* User Info */}
                <div className="w-full md:col-span-4 flex items-center justify-between md:justify-start space-x-4">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Avatar name="Mikasa A." className="h-10 w-10" src="https://i.pravatar.cc/150?u=mikasa" />
                           
                        </div>
                        <span className="block font-bold text-[15px] text-gray-900">Mikasa</span>
                    </div>
                    {/* Mobile Revenue */}
                    <div className="md:hidden font-bold text-[15px] text-gray-900 tracking-tight">$156,841</div>
                </div>

                {/* Desktop Revenue */}
                <div className="hidden md:block col-span-2">
                    <div className="font-bold text-[15px] text-gray-900 tracking-tight">$156,841</div>
                </div>

                {/* Stats Wrapper for Mobile */}
                <div className="w-full md:contents flex justify-between items-center border-t md:border-none border-gray-200/30 pt-3 md:pt-0">
                    <div className="md:col-span-2 flex justify-center space-x-2">
                        <span className="bg-[#1C1C1E] text-white text-[12px] font-bold rounded-full w-8 h-7 flex items-center justify-center">54</span>
                        <span className="bg-gray-200/50 text-gray-500 text-[12px] font-bold rounded-full w-8 h-7 flex items-center justify-center mix-blend-multiply">103</span>
                    </div>
                    <span className="md:col-span-2 text-center font-bold text-[15px] text-gray-900">0.89</span>
                    <div className="md:col-span-2 flex justify-end items-center space-x-3">

                        <span className="bg-[#1C1C1E] text-white text-[12px] font-bold rounded-full w-6 h-6 flex items-center justify-center">21</span>
                        <button className="bg-[#E94E77] h-8 w-8 rounded-full flex items-center justify-center shadow-lg shadow-pink-200/50 ml-1">
                            <ChevronUp className="text-white h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5 mb-7 relative z-10 pl-1">
                {['Top sales 💪', 'Sales streak 🔥', 'Top review 👍'].map(badge => (
                    <span key={badge} className="bg-white border border-gray-100 shadow-sm text-gray-800 text-[12px] font-bold px-3.5 py-1.5 rounded-xl">{badge}</span>
                ))}
            </div>

            {/* Middle Section: Work with platforms */}
            <div className="flex justify-between items-center mb-5 relative z-10 pl-1">
                <h4 className="font-bold text-[15px] text-gray-900">Work with platforms</h4>
                <div className="flex items-center space-x-2 bg-[#E94E77] text-white pl-2 pr-4 py-1.5 rounded-full font-bold shadow-lg shadow-pink-200 cursor-pointer">
                    <div className="bg-white/20 w-6 h-6 flex items-center justify-center rounded-full"><ArrowUp className="h-3.5 w-3.5" /></div>
                    <span className="text-[13px]">3</span>
                    <span className="text-[13px] font-medium tracking-tight">$156,841</span>
                </div>
            </div>

            {/* Platform Grid - Stack on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">

                {/* Left: Dribbble Big Card */}
                <div className="w-full sm:w-[42%] relative overflow-hidden rounded-[24px] border border-gray-100 p-5 flex flex-col justify-between min-h-[160px] bg-white">
                    {/* Background Watermark */}
                    <Logos.Dribbble className="absolute -right-6 -bottom-6 h-36 w-36 text-gray-50 opacity-50 pointer-events-none" />

                    <div className="relative z-10 flex items-center gap-2 ">
                        <Logos.Dribbble className="h-5 w-5 text-[#EA4C89]" />
                        <span className="font-bold text-[14px] text-gray-900">Dribbble</span>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <span className="block text-[32px] font-extrabold text-gray-900 leading-none tracking-tight mb-1">45.3%</span>
                        <span className="text-[13px] font-bold text-gray-300">$71,048</span>
                    </div>
                </div>

                {/* Right: Smaller Cards Grid */}
                <div className="w-full sm:w-[58%] flex flex-col gap-4">
                    {/* Row 1: Insta & Google */}
                    <div className="flex gap-4 h-[90px]">

                        {/* Instagram */}
                        <div className="flex-1 rounded-[24px] border border-gray-100 p-4 flex flex-col justify-between bg-white">
                            <div className="flex items-center gap-2">
                                <Logos.Instagram className="h-5 w-5" />
                                <span className="font-bold text-[13px] text-gray-900">Instagram</span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-[18px] font-extrabold text-gray-900">28.1%</span>
                                <span className="text-[11px] font-bold text-gray-300">$44k</span>
                            </div>
                        </div>

                        {/* Google (With Stripes) */}
                        <div className="flex-1 rounded-[24px] border border-gray-100 p-4 flex flex-col justify-between relative overflow-hidden bg-white/10">
                            {/* Diagonal Stripes Background */}
                            <div
                                className="absolute inset-0 opacity-[0.4]"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, #F3F4F6 6px, #F3F4F6 12px)'
                                }}
                            />

                            <div className="relative z-10 flex items-center gap-2">
                                <Logos.Google className="h-5 w-5" />
                                <span className="font-bold text-[13px] text-gray-900">Google</span>
                            </div>
                            <div className="relative z-10 flex items-baseline gap-2">
                                <span className="text-[18px] font-extrabold text-gray-900">14.1%</span>
                                <span className="text-[11px] font-bold text-gray-300">$22k</span>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Other */}
                    <div className="h-[60px] rounded-[24px] border border-gray-100 p-4 flex items-center justify-between bg-white">
                        <div className="flex items-center gap-2">
                            <div className="h-7 w-7 rounded-lg border border-gray-200 flex items-center justify-center">
                                <ShoppingBag className="h-3.5 w-3.5 text-gray-900" />
                            </div>
                            <span className="font-bold text-[13px] text-gray-900">Other</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-[18px] font-extrabold text-gray-900">7.1%</span>
                            <span className="text-[11px] font-bold text-gray-300">$11k</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- Sales Dynamic Section --- */}
            <div>
                <div className="flex justify-between items-center mb-6 pl-1">
                    <h4 className="font-bold text-[15px] text-gray-900">Sales dynamic</h4>
                    <ArrowUpRight className="text-gray-400 w-4 h-4" />
                </div>

                <div className="relative h-40 w-full">
                    {/* Grid Lines & Labels */}
                    <div className="absolute inset-0 flex justify-between text-[10px] font-bold text-gray-300 uppercase tracking-widest px-2 pointer-events-none">
                        <span>W 1</span><span>W 3</span><span>W 5</span><span>W 7</span><span>W 9</span><span>W 11</span>
                    </div>

                    {/* The Wave Chart */}
                    <div className="absolute inset-0 h-[100px] top-6">
                        <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#F43F5E" />
                                    <stop offset="50%" stopColor="#F43F5E" />
                                    <stop offset="100%" stopColor="#E11D48" />
                                </linearGradient>
                            </defs>
                            {/* Dashed Background Path (Grey) */}
                            <path d="M0,80 Q40,90 60,80 T120,60 T180,75 T240,65 T300,80 T360,50 T400,60"
                                fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />

                            {/* Main Active Path (Pink) */}
                            <path d="M0,85 Q30,95 50,85 T100,65 T150,75 T200,90 T250,85 T280,80 T320,70 T360,60 T380,50 T400,55"
                                fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    {/* Bottom Timeline Bar & Markers */}
                    <div className="absolute bottom-1 left-0 right-0 h-1.5 rounded-full flex overflow-visible mt-4">
                        {/* Colored Segments */}
                        <div className="w-[30%] bg-orange-300 h-full rounded-l-full relative"></div>
                        <div className="w-[40%] bg-yellow-300 h-full relative"></div>
                        <div className="w-[30%] bg-green-400 h-full rounded-r-full relative"></div>

                        {/* Marker 1: Behance (Blue) */}
                        <div className="absolute left-[28%] -top-2 -translate-y-full flex flex-col items-center">
                            <div className="bg-[#1769FF] p-1 rounded-[6px] shadow-sm mb-1 z-10">
                                <Logos.Behance className="h-4 w-4 text-white" colour='#fff'  />
                            </div>
                            <div className="w-3 h-3 bg-white rounded-full border-[3px] border-[#1769FF] relative z-10"></div>
                        </div>

                        {/* Marker 2: Dribbble (Black/Pink) */}
                        <div className="absolute left-[52%] -top-2 -translate-y-full flex flex-col items-center">
                            <div className="bg-gray-900 p-1 rounded-full shadow-sm mb-1 border-2 border-white z-10">
                                <Logos.Dribbble className="h-3 w-3 text-[#F43F5E]" />
                            </div>
                            <div className="w-3 h-3 bg-[#F43F5E] rounded-full border-2 border-white relative z-10"></div>
                        </div>

                        {/* Marker 3: Profile Avatar */}
                        <div className="absolute right-[10%] -top-2 -translate-y-full flex flex-col items-center">
                            <div className="relative mb-1">
                                <Avatar name='' src="https://i.pravatar.cc/150?u=mikasa" className="h-6 w-6 border-2 border-white shadow-sm" />
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F43F5E] rounded-full border border-white flex items-center justify-center">
                                    <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white relative z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Dashboard Layout ---

const Stats = () => {
    return (
        <div className="w-full flex justify-center bg-white">
            {/* Switched to flex-col on mobile/tablet, Row on XL screens */}
            <div className="w-full flex flex-col xl:flex-row items-start justify-between gap-6 max-w-[1200px]">

                {/* Left Column (Sidebar) */}
                <div className="flex flex-col gap-6 lg:gap-8 w-full xl:w-[50%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <PlatformsSummaryCard />
                        <DealsAmountCard />
                    </div>
                    <div className="flex-1 min-h-[320px]">
                        <PlatformValueCard />
                    </div>
                </div>

                {/* Right Column (Content) */}
                <div className="w-full xl:w-[50%] xl:pl-4">
                    <LeaderboardHeader />
                    <div className="space-y-1">
                        <LeaderboardRow
                            name="Armin A."
                            revenue="$209,633"
                            leads={[41, 118]}
                            kpi="0.84"
                            wl={['31%', 12, 29]}
                            avatarUrl="https://i.pravatar.cc/150?u=armin"
                        />

                        {/* Mikasa A. is expanded */}
                        <ExpandedSalespersonCard />

                        <LeaderboardRow
                            name="Eren Y."
                            revenue="$117,115"
                            leads={[22, 84]}
                            kpi="0.79"
                            wl={['32%', 7, 15]}
                            avatarUrl="https://i.pravatar.cc/150?u=eren"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Stats;
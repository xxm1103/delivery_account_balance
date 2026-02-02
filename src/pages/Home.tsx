import { ChevronRight, Headphones, MessageSquareText, Settings, Smartphone, Sun, ArrowLeftRight, Fish, Rabbit, ShoppingBag, Dog, Music } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import StatusBar from '../components/StatusBar';
import { useNavigate } from 'react-router-dom';

// Custom Icons for better matching
const WeChatIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <svg viewBox="0 0 24 24" className={`w-full h-full p-[3px] ${grayscale ? 'fill-gray-300' : 'fill-white'}`}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fillRule="evenodd"/>
    <path d="M17 10c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4zm-6.5 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z" opacity="0.9"/>
  </svg>
);

const AliPayIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <div className={`w-full h-full flex items-center justify-center ${grayscale ? 'bg-gray-100 text-gray-300' : 'bg-[#1677ff] text-white'} font-bold text-[11px] rounded-full`}>
    支
  </div>
);

// Placeholder icons for other channels (simulating real icons with Lucide/Text for now)
const MeituanIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <div className={`w-full h-full flex items-center justify-center ${grayscale ? 'bg-gray-100 text-gray-300' : 'bg-[#ffc300] text-[#1f2937]'} rounded-full`}>
    <Rabbit size={14} fill="currentColor" strokeWidth={0} />
  </div>
);

const TaobaoIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <div className={`w-full h-full flex items-center justify-center ${grayscale ? 'bg-gray-100 text-gray-300' : 'bg-[#ff5000] text-white'} rounded-full`}>
    <ShoppingBag size={12} fill="currentColor" strokeWidth={0} />
  </div>
);

const JDIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <div className={`w-full h-full flex items-center justify-center ${grayscale ? 'bg-gray-100 text-gray-300' : 'bg-[#e1251b] text-white'} rounded-full`}>
    <Dog size={14} fill="currentColor" strokeWidth={0} />
  </div>
);

const DouyinIcon = ({ grayscale = false }: { grayscale?: boolean }) => (
  <div className={`w-full h-full flex items-center justify-center ${grayscale ? 'bg-gray-100 text-gray-300' : 'bg-[#1f2937] text-white'} rounded-full`}>
    <Music size={12} fill="currentColor" strokeWidth={0} />
  </div>
);


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full relative flex flex-col bg-[#F5F6F8]">
        {/* Status Bar - Fixed at top */}
        <StatusBar />
        
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide relative w-full pb-20">
            
            {/* Top Header Background - Sky Blue Gradient */}
            {/* Adjusted gradient to match screenshot: bright blue top, fading to white/light gray */}
            <div className="absolute top-0 left-0 right-0 h-[280px] z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#60a5fa] via-[#bfdbfe] to-[#F5F6F8]"></div>
                {/* Cloud Decoration (CSS Simulation) */}
                <div className="absolute top-10 right-[-20px] w-32 h-32 bg-white/20 blur-[40px] rounded-full"></div>
                <div className="absolute top-20 left-[-20px] w-40 h-40 bg-white/10 blur-[50px] rounded-full"></div>
            </div>

            <div className="relative z-10 px-3 pt-2">
                
                {/* Unified Profile & Notification Card */}
                <div className="bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-3 relative mt-12">
                    {/* Top White Section */}
                    <div className="p-5 pb-4 relative">
                         {/* Weather - Top Right (Custom Shape & Transparency) */}
                        <div className="absolute top-0 right-0 z-0 h-[80px] w-[200px] pointer-events-none overflow-hidden rounded-tr-[24px]">
                            {/* Diagonal Background */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-bl from-blue-50/80 via-white/50 to-transparent backdrop-blur-[1px]" 
                                style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 0)' }}
                            ></div>
                            
                            {/* Content */}
                            <div className="absolute top-4 right-5 text-right">
                                <div className="flex items-center justify-end gap-1.5 text-[12px] font-medium text-[#4b5563] mb-1">
                                    <span>肥西县</span>
                                    <span>13/-1°C</span>
                                    <span>晴天</span>
                                    {/* Illustration Style Sun */}
                                    <div className="relative w-[20px] h-[20px]">
                                        <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-sm">
                                            <circle cx="12" cy="12" r="6" fill="url(#sun-gradient)" />
                                            <g stroke="#fbbf24" strokeWidth="2" strokeLinecap="round">
                                                <line x1="12" y1="1" x2="12" y2="3" />
                                                <line x1="12" y1="21" x2="12" y2="23" />
                                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                                <line x1="1" y1="12" x2="3" y2="12" />
                                                <line x1="21" y1="12" x2="23" y2="12" />
                                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                            </g>
                                            <defs>
                                                <radialGradient id="sun-gradient" cx="0.5" cy="0.5" r="0.5">
                                                    <stop offset="0%" stopColor="#fcd34d" />
                                                    <stop offset="100%" stopColor="#f59e0b" />
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-[10px] text-[#9ca3af] tracking-wide scale-95 origin-right font-medium opacity-80">保持热爱，奔赴山海~</div>
                            </div>
                        </div>

                        {/* Avatar - Half out */}
                        <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-[3px] border-white shadow-md absolute -top-8 left-5 z-20 bg-white">
                            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop" alt="Drink" className="w-full h-full object-cover" />
                        </div>

                        {/* Name */}
                        <div className="flex items-center gap-2 mb-3 mt-8 relative z-10">
                            <h1 className="text-[18px] font-black text-[#1a1a1a] truncate tracking-tight">
                                张晓毅测试 (别动...
                            </h1>
                            <ArrowLeftRight className="text-[#9ca3af] w-3.5 h-3.5" strokeWidth={2.5} />
                        </div>

                        {/* Info Row: Tags/Icons & Operating Status */}
                        <div className="flex justify-between items-end relative z-10">
                            <div className="flex flex-col gap-3">
                                {/* Tags */}
                                <div className="flex gap-2">
                                    <div className="bg-gradient-to-r from-[#eeb46e] to-[#dfa055] text-white text-[11px] px-1.5 py-[2px] rounded-[4px] flex items-center gap-1 shadow-sm">
                                        <div className="bg-white/20 rounded-[2px] w-[12px] h-[12px] flex items-center justify-center text-[8px] font-bold">¥</div> 
                                        <span className="font-bold text-white shadow-sm">餐饮 2.0</span>
                                    </div>
                                    <div className="bg-white text-[#15803d] text-[11px] pl-1 pr-1 py-[2px] rounded-[4px] border border-[#dcfce7] flex items-center gap-1 shadow-sm">
                                        <div className="w-2.5 h-2.5 bg-[#22c55e] rounded-full flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-1.5 h-1.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div> 
                                        <span className="font-bold text-[#374151]">门店档案</span> 
                                        <ChevronRight size={12} strokeWidth={3} className="text-[#9ca3af]" />
                                    </div>
                                </div>
                                
                                {/* Payment Icons - Real Icons Simulation */}
                                <div className="flex gap-[8px]">
                                    {/* WeChat (Open - Green) */}
                                    <div className="w-[22px] h-[22px] rounded-full bg-[#07c160] flex items-center justify-center p-0.5 shadow-sm">
                                        <WeChatIcon />
                                    </div>
                                    {/* Alipay (Open - Blue) */}
                                    <div className="w-[22px] h-[22px] rounded-full shadow-sm"><AliPayIcon /></div>
                                    
                                    {/* Meituan (Closed - Gray) */}
                                    <div className="w-[22px] h-[22px] rounded-full shadow-sm">
                                        <MeituanIcon grayscale />
                                    </div>
                                    
                                    {/* Taobao (Closed - Gray) */}
                                    <div className="w-[22px] h-[22px] rounded-full shadow-sm">
                                        <TaobaoIcon grayscale />
                                    </div>
                                    
                                    {/* JD (Closed - Gray) */}
                                    <div className="w-[22px] h-[22px] rounded-full shadow-sm">
                                        <JDIcon grayscale />
                                    </div>

                                    {/* Douyin (Closed - Gray) */}
                                    <div className="w-[22px] h-[22px] rounded-full shadow-sm">
                                        <DouyinIcon grayscale />
                                    </div>
                                </div>
                            </div>

                            {/* Operating Status Box */}
                            <div className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] border border-[#dcfce7] rounded-[12px] w-[100px] h-[64px] flex flex-col items-center justify-center relative shadow-sm">
                                {/* Hanger Detail */}
                                <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-4 h-2 border-t-2 border-l-2 border-r-2 border-[#dcfce7] rounded-t-full"></div>
                                <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white border border-[#dcfce7] rounded-full z-10"></div>
                                
                                <div className="flex items-center gap-1.5 text-[#15803d] mb-0.5">
                                    <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
                                    <span className="font-bold text-[14px] tracking-wide">营业中</span>
                                </div>
                                <div className="text-[11px] text-[#16a34a]/80 font-medium">全天营业</div>
                                {/* Background Sun Decoration */}
                                <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 bg-[#22c55e]/10 rounded-full blur-md"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Store Fees Card */}
                <div 
                  className="bg-white rounded-[3px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-3 relative overflow-hidden h-[116px] active:scale-[0.99] transition-transform"
                  onClick={() => navigate('/delivery-balance')}
                >
                    {/* Lightning Icon Background */}
                    <div className="absolute top-[-12px] right-[-12px] text-yellow-50 pointer-events-none">
                        <svg width="130" height="130" viewBox="0 0 24 24" fill="currentColor" className="transform rotate-12"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>

                    <div className="flex justify-between items-center mb-4 relative z-10">
                        <span className="font-bold text-[#1f2937] text-[14px]">门店费用</span>
                        <ChevronRight className="text-gray-300" size={20} />
                    </div>
                    <div className="mb-0.5 relative z-10 flex items-baseline leading-none">
                        <span className="text-[16px] font-bold text-[#111827] mr-0.5">¥</span>
                        <span className="text-[32px] font-black text-[#111827] tracking-tighter">0</span>
                        <span className="text-[16px] font-bold text-[#111827] ml-0.5 translate-y-[-5px]">.01</span>
                    </div>
                    <div className="text-[12px] text-[#9ca3af] relative z-10 font-medium">配送余额</div>
                </div>

                {/* Store Equipment - Single Row */}
                <div className="bg-white rounded-[3px] px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-3 flex justify-between items-center h-[60px]">
                    <span className="font-bold text-[#1f2937] text-[14px]">门店设备</span>
                    <ChevronRight className="text-gray-300" size={20} />
                </div>

                {/* Grid Actions */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-[3px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-center h-[90px]">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-[#1f2937] text-[14px]">经营设置</span>
                            <ChevronRight size={18} className="text-gray-300"/>
                        </div>
                        <div className="text-[12px] text-[#9ca3af] font-medium">常用经营集合地</div>
                    </div>
                    <div className="bg-white rounded-[3px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-center h-[90px]">
                         <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-[#1f2937] text-[14px]">员工管理</span>
                            <ChevronRight size={18} className="text-gray-300"/>
                        </div>
                        <div className="text-[12px] text-[#9ca3af] font-medium">21人</div>
                    </div>
                </div>

                {/* Service & Feedback */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-white rounded-[3px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-3 h-[76px]">
                        <div className="w-[46px] h-[46px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#16a34a] shrink-0">
                            <Headphones size={24} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-bold text-[#1f2937] text-[14px] mb-0.5">我的客服</div>
                            <div className="text-[12px] text-[#9ca3af]">专属服务</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-[3px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-3 h-[76px]">
                        <div className="w-[46px] h-[46px] rounded-full bg-[#f0fdf4] flex items-center justify-center text-[#16a34a] shrink-0">
                            <MessageSquareText size={24} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-bold text-[#1f2937] text-[14px] mb-0.5">建议反馈</div>
                            <div className="text-[12px] text-[#9ca3af]">有问题随时问</div>
                        </div>
                    </div>
                </div>

                {/* Settings List */}
                <div className="bg-white rounded-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-6 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-5 border-b border-gray-50 active:bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center text-[#4b5563]">
                                <Settings size={20} strokeWidth={2} />
                            </div>
                            <span className="text-[#1f2937] text-[14px] font-bold">系统设置</span>
                        </div>
                        <ChevronRight className="text-gray-300" size={20} />
                    </div>
                    <div className="flex items-center justify-between px-5 py-5 active:bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-[36px] h-[36px] rounded-full border border-gray-200 flex items-center justify-center text-[#4b5563]">
                                <Smartphone size={20} strokeWidth={2} />
                            </div>
                            <span className="text-[#1f2937] text-[14px] font-bold">登录设备</span>
                        </div>
                        <ChevronRight className="text-gray-300" size={20} />
                    </div>
                </div>
            </div>
        </div>

        <BottomNav />
    </div>
  );
}
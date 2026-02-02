import { Home, ClipboardList, BarChart2, MessageSquare, Store } from 'lucide-react';
import { useState } from 'react';

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState('store');

  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'orders', label: '订单', icon: ClipboardList },
    { id: 'reports', label: '报表', icon: BarChart2 },
    { id: 'messages', label: '消息', icon: MessageSquare },
    { id: 'store', label: '我的店', icon: Store },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-9 pt-3 px-6 flex justify-between items-center z-50 rounded-b-[40px]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex flex-col items-center gap-0.5 min-w-[50px] transition-colors duration-200 ${
            activeTab === tab.id ? 'text-[#16a34a]' : 'text-[#9ca3af]'
          }`}
        >
          <tab.icon 
            size={24} 
            strokeWidth={activeTab === tab.id ? 2.5 : 1.8} 
            className={`transition-all duration-200 ${activeTab === tab.id ? "fill-[#16a34a]" : "fill-transparent"}`}
          />
          <span className={`text-[10px] transform scale-95 ${activeTab === tab.id ? 'font-bold' : 'font-medium'}`}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}

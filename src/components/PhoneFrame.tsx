import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#eef0f4] p-8 font-sans">
      <div className="relative w-[393px] h-[852px] bg-black rounded-[55px] shadow-[0_0_0_12px_#3a3a3a,0_20px_50px_rgba(0,0,0,0.5)] border-[8px] border-black box-content ring-1 ring-white/20 z-0">
        
        {/* Dynamic Island Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-[20px] z-[60] flex items-center justify-center pointer-events-none">
             {/* Camera lens simulation */}
             <div className="w-20 h-full flex items-center justify-end pr-2">
                 <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
             </div>
        </div>

        {/* Side Buttons (Visual Only) */}
        <div className="absolute top-[100px] -left-[20px] w-[8px] h-[35px] bg-[#2a2a2a] rounded-l-md shadow-sm"></div> {/* Mute Switch */}
        <div className="absolute top-[150px] -left-[20px] w-[8px] h-[60px] bg-[#2a2a2a] rounded-l-md shadow-sm"></div> {/* Volume Up */}
        <div className="absolute top-[220px] -left-[20px] w-[8px] h-[60px] bg-[#2a2a2a] rounded-l-md shadow-sm"></div> {/* Volume Down */}
        <div className="absolute top-[180px] -right-[20px] w-[8px] h-[90px] bg-[#2a2a2a] rounded-r-md shadow-sm"></div> {/* Power Button */}

        {/* Screen Content Container - No Scroll here, letting children handle it */}
        <div className="w-full h-full bg-gray-50 overflow-hidden relative rounded-[48px] z-10">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-black/90 rounded-full z-[60] pointer-events-none"></div>
      </div>
    </div>
  );
}

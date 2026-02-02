import { Battery, Signal, Wifi } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 pt-3 pb-2 text-black z-50 relative">
      <div className="text-[15px] font-semibold tracking-wide pl-2">
        10:23
      </div>
      <div className="flex items-center gap-1.5 pr-2">
        <Signal size={18} className="fill-black" />
        <Wifi size={18} />
        <div className="relative">
            <Battery size={24} className="text-black/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-2 bg-black rounded-[1px]"></div>
        </div>
      </div>
    </div>
  );
}

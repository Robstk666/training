import { FileText, Download, Box, PlusCircle } from "lucide-react";
import { offerData } from "../data";

export function ProjectScreen() {
  return (
    <div className="flex-1 overflow-y-auto grid-project min-h-screen">
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full mb-8">
        
        <div className="flex flex-col gap-3 mb-2">
          <h2 className="text-3xl font-bold font-display text-tertiary-fixed text-glow-tertiary uppercase tracking-tight">Активные Офферы</h2>
          <p className="text-sm text-on-surface-variant">Управление коммерческими офферами и статусами</p>
          <button className="mt-2 bg-tertiary-fixed/20 border border-tertiary-fixed/50 border-b-tertiary-fixed border-b-2 text-tertiary-fixed px-6 py-3 rounded-lg font-semibold text-xs tracking-widest uppercase hover:shadow-[0_0_15px_rgba(255,215,245,0.4)] transition-all active:translate-y-[2px] w-full flex justify-center items-center gap-2">
            <PlusCircle className="w-5 h-5" /> НОВЫЙ ОФФЕР
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {offerData.map((offer, idx) => (
             <div key={idx} className="frosted-plate rounded-xl p-5 border-l-4 border-l-tertiary-fixed flex flex-col gap-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary-fixed/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex justify-between items-start relative z-10">
                   <h4 className="text-lg font-bold text-primary font-display">{offer.title}</h4>
                   <span className="bg-tertiary-fixed/10 text-tertiary-fixed text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded">ОТПРАВЛЕНО</span>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-4 relative z-10">
                   {offer.text}
                </p>
                <div className="pt-2 flex justify-end relative z-10">
                   <button className="text-[10px] font-bold text-tertiary-fixed tracking-widest uppercase hover:underline opacity-80 hover:opacity-100">
                      Подробнее
                   </button>
                </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  );
}

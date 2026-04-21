import { Archive } from "lucide-react";
import { TabType } from "./BottomNav";

interface TopNavProps {
  onArchiveClick: () => void;
  accentColorClass: string;
  glowClass: string;
}

export function TopNav({ onArchiveClick, accentColorClass, glowClass }: TopNavProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 frosted-plate border-t-0 border-l-0 border-r-0 shadow-2xl border-b border-white/10">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
          />
        </div>
        <h1
          className={`font-display font-black tracking-tighter uppercase text-xl italic ${accentColorClass} ${glowClass}`}
        >
          КОМАНДНЫЙ ЦЕНТР
        </h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={onArchiveClick}
          className={`${accentColorClass} hover:opacity-80 transition-all active:scale-95 flex items-center justify-center p-2`}
          title="Архив"
        >
          <Archive className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

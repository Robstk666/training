import { ReactNode } from "react";
import { Dumbbell, Video, Layers, Archive } from "lucide-react";

export type TabType = "training" | "filming" | "project" | "archive";

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 frosted-plate rounded-t-2xl border-b-0 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <NavItem
        icon={<Dumbbell className="w-6 h-6" />}
        label="Тренировки"
        isActive={activeTab === "training"}
        activeColor="text-primary-fixed border-primary-fixed bg-primary-fixed/10"
        shadowColor="text-glow-primary"
        onClick={() => onTabChange("training")}
      />
      
      <NavItem
        icon={<Video className="w-6 h-6" />}
        label="Съемки"
        isActive={activeTab === "filming"}
        activeColor="text-secondary-fixed border-secondary-fixed bg-secondary-fixed/10"
        shadowColor="text-glow-secondary"
        onClick={() => onTabChange("filming")}
      />
      
      <NavItem
        icon={<Layers className="w-6 h-6" />}
        label="Проекты"
        isActive={activeTab === "project"}
        activeColor="text-tertiary-fixed border-tertiary-fixed bg-tertiary-fixed/10"
        shadowColor="text-glow-tertiary"
        onClick={() => onTabChange("project")}
      />
      
      <NavItem
        icon={<Archive className="w-6 h-6" />}
        label="Архив"
        isActive={activeTab === "archive"}
        activeColor="text-error border-error bg-error/10"
        shadowColor="drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
        onClick={() => onTabChange("archive")}
      />
    </nav>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  activeColor,
  shadowColor,
  onClick,
}: {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  activeColor: string;
  shadowColor: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center transition-all duration-300 ease-out py-2 px-4 rounded-xl ${
        isActive
          ? `scale-110 ${activeColor} ${shadowColor} border-b-2 bg-transparent`
          : "text-white/40 hover:text-white"
      } active:translate-y-1`}
    >
      <div className="mb-1">{icon}</div>
      <span className="font-display text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}

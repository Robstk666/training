import { useState } from "react";
import { Aperture, Camera, Film, MapPin, Play, Plus, Sliders, ChevronDown } from "lucide-react";
import { filmingData } from "../data";
import { CameraView } from "../components/CameraView";
import { motion, AnimatePresence } from "motion/react";

export function FilmingScreen() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [expandedScene, setExpandedScene] = useState<number | null>(null);

  const toggleScene = (idx: number) => {
    if (expandedScene === idx) {
      setExpandedScene(null);
    } else {
      setExpandedScene(idx);
    }
  };

  return (
    <>
    <div className="flex-1 overflow-y-auto grid-filming min-h-screen">
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full mb-8">
        
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-2 text-secondary-fixed text-xs font-semibold tracking-widest font-display opacity-90">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)] inline-block"></span>
            ОЖИДАНИЕ ЭФИРА
          </div>
          <h2 className="text-3xl font-bold font-display text-primary uppercase tracking-tight text-glow-secondary">Съемочный Процесс</h2>
        </div>

        <button 
          onClick={() => setIsCameraOpen(true)}
          className="w-full relative overflow-hidden group rounded-2xl frosted-plate border border-t-white/30 border-b-secondary-fixed/50 shadow-[0_15px_40px_-15px_rgba(168,85,247,0.2)] active:translate-y-[2px] transition-all flex flex-col items-center justify-center p-10 gap-6"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-fixed/5 to-transparent opacity-100"></div>
          <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-secondary-fixed/60 to-transparent"></div>
          
          <div className="relative w-24 h-24 rounded-full bg-surface-container-highest/80 border border-white/20 flex items-center justify-center shadow-inner z-10">
            <Camera className="w-12 h-12 text-secondary-fixed drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" fill="currentColor" />
          </div>
          
          <div className="flex flex-col items-center z-10">
            <span className="text-4xl font-black text-primary tracking-tighter uppercase drop-shadow-lg font-display">Открыть</span>
            <span className="text-4xl font-black text-primary tracking-tighter uppercase drop-shadow-lg font-display mt-[-8px]">Камеру</span>
            <span className="text-sm text-on-surface-variant mt-3 text-center">Режим кинематографической съемки</span>
          </div>
          
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-60 text-[10px] font-semibold text-secondary-fixed tracking-widest font-display">
            <span>ISO AUTO</span> | <span>24 FPS</span> | <span>4K LOG</span>
          </div>
        </button>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between items-end border-b border-white/10 pb-2">
            <h3 className="text-xl font-bold font-display text-primary">Предстоящие сцены</h3>
          </div>

          {filmingData.map((scene, idx) => (
             <div 
               key={idx} 
               onClick={() => toggleScene(idx)}
               className="relative rounded-xl overflow-hidden frosted-plate flex flex-col p-5 group cursor-pointer transition-colors hover:bg-white/5"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-fixed/5 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex flex-col">
                   <div className="flex justify-between items-center mb-4">
                     <span className="text-[10px] font-bold text-secondary-fixed tracking-widest bg-secondary-fixed/10 px-2 py-1 rounded">
                       {scene.date}
                     </span>
                     <motion.div
                       animate={{ rotate: expandedScene === idx ? 180 : 0 }}
                       transition={{ duration: 0.2 }}
                     >
                       <ChevronDown className="w-5 h-5 text-on-surface-variant" />
                     </motion.div>
                   </div>
                   <h4 className="text-xl font-bold text-primary font-display mb-2">{scene.title}</h4>
                   
                   <AnimatePresence>
                     {expandedScene === idx && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.2 }}
                         className="overflow-hidden"
                       >
                         <p className="text-sm text-on-surface-variant border-l-2 border-secondary-fixed/30 pl-3 italic opacity-80 mt-2 mb-4 whitespace-pre-wrap">{scene.description}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                   
                   <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase flex items-center gap-2 mt-auto">
                      <MapPin className="w-4 h-4 text-secondary-fixed" /> {scene.location}
                   </span>
                </div>
             </div>
          ))}
        </div>

      </div>
    </div>
    {isCameraOpen && <CameraView onClose={() => setIsCameraOpen(false)} />}
    </>
  );
}

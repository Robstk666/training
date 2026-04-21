import { useState } from "react";
import { Activity, BatteryCharging, Bolt, Pill, ExternalLink, Play, Timer, AlignLeft, MapPin, Image as ImageIcon } from "lucide-react";
import { trainingScheduleFull } from "../training";
import { Stopwatch } from "../components/Stopwatch";
import { JumpLogs } from "../components/JumpLogs";

export function TrainingScreen() {
  const [subTab, setSubTab] = useState<'overview' | 'schedule' | 'timer' | 'logs'>('overview');

  return (
    <div className="flex-1 overflow-y-auto grid-training min-h-screen">
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full mb-8">
        
        <div className="mb-2 flex flex-col gap-2">
          <h2 className="text-3xl font-bold font-display text-primary mb-1 uppercase tracking-tighter">Тренировки</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-fixed shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse inline-block"></span>
            <p className="text-xs font-semibold text-primary-fixed uppercase tracking-widest font-display">
              База Централи
            </p>
          </div>
        </div>

        {/* Sub-Navigation */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
           <button 
             onClick={() => setSubTab('overview')}
             className={`px-4 py-2 font-display text-xs font-bold tracking-widest uppercase rounded-lg border whitespace-nowrap \${subTab === 'overview' ? 'bg-primary-fixed/20 border-primary-fixed text-primary-fixed' : 'border-white/10 text-white/50 hover:bg-white/5'}`}
           >
             Дашборд
           </button>
           <button 
             onClick={() => setSubTab('schedule')}
             className={`px-4 py-2 font-display text-xs font-bold tracking-widest uppercase rounded-lg border whitespace-nowrap \${subTab === 'schedule' ? 'bg-primary-fixed/20 border-primary-fixed text-primary-fixed' : 'border-white/10 text-white/50 hover:bg-white/5'}`}
           >
             Программа
           </button>
           <button 
             onClick={() => setSubTab('timer')}
             className={`px-4 py-2 font-display text-xs font-bold tracking-widest uppercase rounded-lg border flex items-center gap-2 whitespace-nowrap \${subTab === 'timer' ? 'bg-primary-fixed/20 border-primary-fixed text-primary-fixed' : 'border-white/10 text-white/50 hover:bg-white/5'}`}
           >
             <Timer className="w-4 h-4" /> Секундомер
           </button>
           <button 
             onClick={() => setSubTab('logs')}
             className={`px-4 py-2 font-display text-xs font-bold tracking-widest uppercase rounded-lg border flex items-center gap-2 whitespace-nowrap \${subTab === 'logs' ? 'bg-primary-fixed/20 border-primary-fixed text-primary-fixed' : 'border-white/10 text-white/50 hover:bg-white/5'}`}
           >
             <ImageIcon className="w-4 h-4" /> Скриншоты
           </button>
        </div>

        {subTab === 'overview' && (
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div className="frosted-plate rounded-xl p-6 flex flex-col justify-between min-h-[240px] border-t border-t-white/20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold font-display text-primary">Индексация ЦНС</h3>
                <div className="bg-surface-bright/50 px-3 py-1 rounded-full border border-white/5 flex items-center gap-2">
                  <Bolt className="w-4 h-4 text-primary-fixed" />
                  <span className="text-xs font-semibold text-primary uppercase font-display tracking-widest">СПРАВКА</span>
                </div>
              </div>
              <div className="text-sm text-on-surface-variant mb-4 space-y-4">
                <p>
                  <span className="text-[#ccff00] font-bold">HIGH-CNS:</span> Время максимальной активации. Рекорды, тяжелые веса (85-90% 1RM), макс. прыжки. Требует 48 часов до следующего пика.
                </p>
                <p>
                  <span className="text-cyan-400 font-bold">LOW-CNS:</span> Биомеханика, техника, уступающая изометрия. Снимает стресс с нервной системы и улучшает контроль.
                </p>
                <p>
                  <span className="text-gray-400 font-bold">REST:</span> Сон, питание, отсутствие нагрузки. Полное восстановление.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-high/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <Activity className="text-outline-variant w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold font-display">RFD Индекс</span>
                  <span className="text-lg text-primary leading-none mt-1 font-bold">Высок.</span>
                  <span className="text-[9px] text-outline-variant mt-1 leading-tight">Скорость развития силы</span>
                </div>
              </div>
              <div className="bg-surface-container-high/40 border border-white/5 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm">
                <BatteryCharging className="text-outline-variant w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold font-display">Сухожилия</span>
                  <span className="text-lg text-[#ccff00] leading-none mt-1 font-bold">Готовы</span>
                  <span className="text-[9px] text-outline-variant mt-1 leading-tight">Коллаген восстановлен</span>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setSubTab('schedule')}
              className="frosted-plate rounded-xl p-4 flex items-center gap-4 border-l-4 border-l-primary-fixed cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center shrink-0 border border-white/5 overflow-hidden relative">
                <AlignLeft className="text-primary-fixed z-10 w-8 h-8" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs font-semibold text-on-surface-variant uppercase mb-1 tracking-wider font-display">Программа</p>
                <h5 className="text-xl font-bold text-primary font-display">Матрица Тренировок</h5>
                <p className="text-sm text-on-surface-variant mt-1">Перейти к расписанию по дням</p>
              </div>
            </button>
          </div>
        )}

        {subTab === 'schedule' && (
          <div className="flex flex-col gap-6 mt-2 pb-10">
             {trainingScheduleFull.map((day, idx) => (
                <div key={idx} className="frosted-plate rounded-xl overflow-hidden flex flex-col">
                   <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                     <span className="text-primary-fixed font-bold font-display uppercase tracking-widest text-lg">{day.day}</span>
                     <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold px-2 py-1 bg-surface-variant rounded border border-white/10 shadow-inner">{day.type}</span>
                   </div>
                   <div className="flex flex-col">
                     {day.sessions.map((session, sIdx) => (
                       <div key={sIdx} className={`p-5 flex flex-col gap-4 ${sIdx !== day.sessions.length - 1 ? 'border-b border-white/5' : ''}`}>
                         {/* Session Header */}
                         <div className="flex flex-wrap gap-2 items-center justify-between mb-1">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-white uppercase tracking-wider font-display">{session.time}</span>
                              <div className="flex items-center gap-1 text-xs text-on-surface-variant font-semibold">
                                <MapPin className="w-3.5 h-3.5" /> {session.location}
                              </div>
                            </div>
                            <span className={`text-[10px] px-2 py-1 rounded-sm uppercase tracking-widest font-bold border ${session.cnsColor}`}>
                              {session.cns}
                            </span>
                         </div>
                         
                         {/* Supplements */}
                         {session.supplements && (
                           <div className="bg-surface-variant/50 border border-white/5 rounded-lg p-3 flex gap-3 text-sm text-on-surface-variant items-start">
                             <Pill className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5" />
                             <span className="leading-relaxed">{session.supplements}</span>
                           </div>
                         )}

                         {/* Exercises */}
                         <div className="flex flex-col gap-4 mt-2">
                           {session.exercises.map((ex, exIdx) => (
                             <div key={exIdx} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
                                <div className="flex justify-between items-start gap-4">
                                  <span className="font-bold text-primary font-display">{ex.title}</span>
                                  {ex.video && (
                                    <a 
                                      href={ex.video} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold font-display uppercase tracking-widest text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/20 rounded-full hover:bg-[#ccff00]/20 hover:scale-105 transition-all shadow-[0_0_10px_rgba(204,255,0,0.1)] active:scale-95 shrink-0"
                                    >
                                      Видео <Play className="w-3 h-3 fill-current" />
                                    </a>
                                  )}
                                </div>
                                <p className="text-sm text-on-surface-variant leading-relaxed">{ex.description}</p>
                                {ex.dosage !== '-' && (
                                  <span className="text-xs text-[#ccff00] font-bold font-display mt-1">Дозировка: {ex.dosage}</span>
                                )}
                             </div>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
             ))}
          </div>
        )}

        {subTab === 'timer' && (
           <div className="mt-8">
             <Stopwatch />
           </div>
        )}

        {subTab === 'logs' && (
           <div className="mt-4">
             <JumpLogs />
           </div>
        )}

      </div>
    </div>
  );
}

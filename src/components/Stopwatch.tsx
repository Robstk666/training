import { useState, useEffect } from 'react';
import { Play, Square, RotateCcw } from 'lucide-react';

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => setTime(t => t + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div className="flex flex-col items-center justify-center p-8 frosted-plate rounded-3xl w-full max-w-md mx-auto">
      <div className="text-center mb-8 w-full">
        <h3 className="text-on-surface-variant text-sm tracking-widest uppercase font-display mb-4">Секундомер</h3>
        <div className="text-iridescent text-7xl font-black font-display tracking-tighter tabular-nums drop-shadow-2xl">
          {hours > 0 && `${hours.toString().padStart(2, '0')}:`}
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-primary-fixed text-2xl font-bold mt-2 opacity-80 tabular-nums">
          .{milliseconds.toString().padStart(2, '0')}
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setTime(0)}
          className="p-4 rounded-full bg-surface-container-high border border-white/10 text-on-surface-variant hover:text-white transition-colors"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
        
        <button 
          onClick={() => setIsRunning(!isRunning)}
          className={`p-6 rounded-full border \${
            isRunning 
              ? 'bg-error/20 border-error text-error shadow-[0_0_20px_rgba(239,68,68,0.3)]' 
              : 'bg-primary-fixed/20 border-primary-fixed text-primary-fixed shadow-[0_0_20px_rgba(59,130,246,0.3)]'
          } transition-all active:scale-95`}
        >
          {isRunning ? <Square className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
        </button>
      </div>
    </div>
  );
}

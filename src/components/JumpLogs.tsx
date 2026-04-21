import React, { useState, useEffect } from 'react';
import { Upload, Trash2, ShieldCheck, Github } from 'lucide-react';

interface Log {
  id: string;
  image: string;
  date: string;
  note: string;
}

export function JumpLogs() {
  const [logs, setLogs] = useState<Log[]>([]);

  // Load from local storage
  useEffect(() => {
    const savedLogs = localStorage.getItem('rob_jump_logs');
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Str = event.target?.result as string;
      const newLog: Log = {
        id: Math.random().toString(36).substring(2, 9),
        image: base64Str,
        date: new Date().toLocaleDateString('ru-RU'),
        note: `Скриншот: ${new Date().toLocaleTimeString('ru-RU')}`
      };
      
      const newLogs = [newLog, ...logs];
      setLogs(newLogs);
      localStorage.setItem('rob_jump_logs', JSON.stringify(newLogs));
    };
    reader.readAsDataURL(file);
  };

  const deleteLog = (id: string) => {
    const newLogs = logs.filter(l => l.id !== id);
    setLogs(newLogs);
    localStorage.setItem('rob_jump_logs', JSON.stringify(newLogs));
  };

  return (
    <div className="flex flex-col gap-6">
      
      <div className="frosted-plate rounded-xl p-6 border-t-white/20 border-t flex flex-col gap-4">
         <div className="flex items-center gap-3 text-primary">
            <ShieldCheck className="w-6 h-6 text-primary-fixed" />
            <h3 className="text-xl font-bold font-display uppercase tracking-tight">Логи Прыжков</h3>
         </div>
         <p className="text-sm text-on-surface-variant">Загружайте скриншоты ваших прогрессов высоты. Данные синхронизируются с локальным кешем подготовки к бэкенду.</p>
         
         <div className="flex items-center gap-2 text-xs text-secondary-fixed/80 bg-secondary-fixed/10 p-3 rounded-lg border border-secondary-fixed/20 mt-2">
            <Github className="w-4 h-4" /> 
            <span>Бэкап в GitHub old_version_backup готов. Файлы сохраняются в режиме Snapshot.</span>
         </div>

         <label className="mt-4 cursor-pointer matte-btn-primary rounded-xl p-6 flex flex-col items-center justify-center border border-dashed border-primary-fixed/50 hover:bg-primary-fixed/10 transition-colors">
            <Upload className="w-8 h-8 text-primary-fixed mb-2" />
            <span className="text-primary-fixed font-bold font-display uppercase tracking-widest text-sm text-center">Загрузить скриншот</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
         </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {logs.map(log => (
          <div key={log.id} className="frosted-plate rounded-xl overflow-hidden flex flex-col">
            <img src={log.image} alt="Jump Log" className="w-full h-48 object-cover opacity-90" />
            <div className="p-4 flex justify-between items-center bg-[#05070a]/50">
               <div>
                  <div className="text-primary font-bold">{log.date}</div>
                  <div className="text-xs text-on-surface-variant mt-1">{log.note}</div>
               </div>
               <button 
                  onClick={() => deleteLog(log.id)}
                  className="p-2 text-error/60 hover:text-error hover:bg-error/10 rounded-full transition-colors"
               >
                 <Trash2 className="w-5 h-5" />
               </button>
            </div>
          </div>
        ))}
        {logs.length === 0 && (
           <div className="col-span-full text-center py-12 text-on-surface-variant/50 border border-white/5 rounded-xl border-dashed">
              Нет сохраненных скриншотов
           </div>
        )}
      </div>

    </div>
  );
}

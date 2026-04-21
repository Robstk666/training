import { RotateCcw, Trash2, Dumbbell, Video, Trash } from "lucide-react";

export function ArchiveScreen() {
  return (
    <div className="flex-1 overflow-y-auto grid-project min-h-screen">
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-error/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto flex flex-col gap-6 relative z-10 w-full mb-8">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-4xl font-black font-display text-primary tracking-tighter uppercase">АРХИВ / <span className="text-error opacity-80">КОРЗИНА</span></h1>
          <p className="text-base text-on-surface-variant leading-tight">
            Удаленные элементы хранятся здесь перед окончательным уничтожением.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          
          <div className="relative bg-surface-container-low/40 backdrop-blur-[20px] border border-white/10 rounded-xl p-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary-fixed/50 to-transparent"></div>
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#050505]/80 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Dumbbell className="text-on-surface-variant w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold bg-surface-variant text-on-surface px-2 py-1 rounded uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
                      Тренировка
                    </span>
                    <span className="text-[10px] font-bold text-outline tracking-wider">Удалено: 2ч назад</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary mt-1">Ноги: Взрыв</h3>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-surface-variant/50 border-t border-white/20 border-b-2 border-surface-container-lowest text-primary text-[10px] font-bold tracking-widest active:translate-y-[2px]">
                  <RotateCcw className="w-4 h-4" /> ВОССТАНОВИТЬ
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-error-container/20 border-t border-error/30 border-b-2 border-error-container/80 text-error text-[10px] font-bold tracking-widest active:translate-y-[2px]">
                  <Trash2 className="w-4 h-4" /> УДАЛИТЬ
                </button>
              </div>
            </div>
          </div>

          <div className="relative bg-surface-container-low/40 backdrop-blur-[20px] border border-white/10 rounded-xl p-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-secondary-fixed/50 to-transparent"></div>
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#050505]/80 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                  <Video className="text-on-surface-variant w-7 h-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold bg-surface-variant text-on-surface px-2 py-1 rounded uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                      Съемка
                    </span>
                    <span className="text-[10px] font-bold text-outline tracking-wider">Удалено: Вчера</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary mt-1">Локация: Завод</h3>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-surface-variant/50 border-t border-white/20 border-b-2 border-surface-container-lowest text-primary text-[10px] font-bold tracking-widest active:translate-y-[2px]">
                  <RotateCcw className="w-4 h-4" /> ВОССТАНОВИТЬ
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-error-container/20 border-t border-error/30 border-b-2 border-error-container/80 text-error text-[10px] font-bold tracking-widest active:translate-y-[2px]">
                  <Trash2 className="w-4 h-4" /> УДАЛИТЬ
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 flex justify-center w-full">
          <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-transparent border border-error/50 text-error text-[10px] font-bold tracking-widest uppercase hover:bg-error/10 active:translate-y-[2px]">
            <Trash className="w-5 h-5" /> ОЧИСТИТЬ КОРЗИНУ
          </button>
        </div>

      </div>
    </div>
  );
}

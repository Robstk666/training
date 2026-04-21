import { useState, useEffect } from "react";
import { TopNav } from "./components/TopNav";
import { BottomNav, TabType } from "./components/BottomNav";
import { TrainingScreen } from "./screens/TrainingScreen";
import { FilmingScreen } from "./screens/FilmingScreen";
import { ProjectScreen } from "./screens/ProjectScreen";
import { ArchiveScreen } from "./screens/ArchiveScreen";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("training");
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Dynamic styling based on the active tab
  let accentColorClass = "text-primary-fixed";
  let glowClass = "text-glow-primary";

  if (activeTab === "filming") {
    accentColorClass = "text-secondary-fixed";
    glowClass = "text-glow-secondary";
  } else if (activeTab === "project") {
    accentColorClass = "text-tertiary-fixed";
    glowClass = "text-glow-tertiary";
  } else if (activeTab === "archive") {
    accentColorClass = "text-error";
    glowClass = "drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]";
  }

  return (
    <>
      <AnimatePresence>
        {isAppLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <motion.img
                src="/logo.png"
                alt="R.O.B Logo"
                className="w-64 h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] invert mix-blend-screen"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                referrerPolicy="no-referrer"
              />
              <div className="flex gap-3">
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                  className="w-2.5 h-2.5 rounded-full bg-primary-fixed shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                />
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2.5 h-2.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                />
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full min-h-screen bg-background text-on-surface font-sans flex flex-col relative overflow-hidden">
        <TopNav 
          onArchiveClick={() => setActiveTab("archive")} 
          accentColorClass={accentColorClass}
          glowClass={glowClass}
        />
        
        {activeTab === "training" && <TrainingScreen />}
        {activeTab === "filming" && <FilmingScreen />}
        {activeTab === "project" && <ProjectScreen />}
        {activeTab === "archive" && <ArchiveScreen />}
        
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </>
  );
}

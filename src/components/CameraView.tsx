import { useEffect, useRef } from 'react';
import { X, Camera as CameraIcon } from 'lucide-react';

interface CameraViewProps {
  onClose: () => void;
}

export function CameraView({ onClose }: CameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    
    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied or unavailable", err);
      }
    }
    
    setupCamera();
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        className="w-full h-full object-cover"
      />
      
      {/* HUD overlay */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-secondary-fixed/50 m-4 rounded-3xl grid grid-cols-3 grid-rows-3">
        <div className="border-r border-b border-secondary-fixed/20"></div>
        <div className="border-b border-secondary-fixed/20"></div>
        <div className="border-l border-b border-secondary-fixed/20"></div>
        <div className="border-r border-secondary-fixed/20"></div>
        <div className="flex items-center justify-center">
             <div className="w-8 h-8 focus-ring border border-secondary-fixed/50 animate-pulse"></div>
        </div>
        <div className="border-l border-secondary-fixed/20"></div>
        <div className="border-r border-t border-secondary-fixed/20"></div>
        <div className="border-t border-secondary-fixed/20"></div>
        <div className="border-l border-t border-secondary-fixed/20"></div>
      </div>
      
      <div className="absolute top-8 right-8 z-10 flex gap-4">
         <div className="px-3 py-1 bg-black/50 backdrop-blur border border-white/20 rounded text-error text-xs font-bold animate-pulse flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-error"></div> REC
         </div>
      </div>

      <button 
        onClick={onClose}
        className="absolute top-8 left-8 z-10 p-3 rounded-full bg-black/50 backdrop-blur border border-white/20 text-white"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="absolute bottom-12 left-0 w-full flex justify-center z-10">
        <button className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur">
          <div className="w-16 h-16 rounded-full bg-secondary-fixed/80 flex items-center justify-center backdrop-blur">
             <CameraIcon className="w-6 h-6 text-black" />
          </div>
        </button>
      </div>
    </div>
  );
}

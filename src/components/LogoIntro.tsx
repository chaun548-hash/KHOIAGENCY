import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface LogoIntroProps {
  onIntroComplete: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onIntroComplete, isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(100);
      return;
    }

    setProgress(0);
    setIsExiting(false);

    // Smooth counter progression over 2.6 seconds
    const startTime = Date.now();
    const duration = 2600;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        // Begin exit transition
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onIntroComplete();
            onClose();
          }, 900);
        }, 300);
      }
    }, 28);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onIntroComplete();
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Split Curtains: Top & Bottom with Velvet Sapphire Tint */}
      <div
        className={`fixed top-0 left-0 w-full h-[51%] bg-[#010414] border-b border-[#0066ee]/20 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] z-[101] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      />
      <div
        className={`fixed bottom-0 left-0 w-full h-[51%] bg-[#010414] border-t border-[#0066ee]/20 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] z-[101] ${
          isExiting ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

      {/* Skip Button */}
      <button
        type="button"
        onClick={handleSkip}
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-[115] px-4 py-2 rounded-full glass-panel text-xs font-semibold text-white/80 hover:text-white border-white/20 hover:border-[#a8c8ff] transition-all cursor-pointer flex items-center gap-1.5 ${
          isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span>Bỏ qua Intro</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      {/* Center Cinematic Stage */}
      <div
        className={`relative z-[110] flex flex-col items-center text-center p-6 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          isExiting ? 'opacity-0 scale-90 translate-y-6' : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        {/* Pulsing Energy Rings behind logo */}
        <div className="absolute -inset-10 flex items-center justify-center pointer-events-none">
          <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-[#1a68e8]/30 animate-[ringPulse_3.2s_ease-out_infinite]" />
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-[#5caaff]/20 animate-[ringPulse_3.2s_ease-out_infinite_1.6s]" />
          <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#032677]/40 blur-3xl" />
        </div>

        {/* Circular SVG Stroke Loader */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              className="stroke-white/10 fill-none stroke-[2]"
            />
            <circle
              cx="50%"
              cy="50%"
              r="46%"
              className="stroke-[#38bdf8] fill-none stroke-[2.5] stroke-linecap-round transition-all duration-150 ease-out"
              style={{
                strokeDasharray: 289,
                strokeDashoffset: 289 - (289 * progress) / 100,
              }}
            />
          </svg>

          {/* Logo Container with Shimmer Light Sweep */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-2.5 shadow-2xl shadow-[#004bd4]/50 overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="KHỞI AGENCY Logo"
              className="w-full h-full object-cover rounded-full select-none"
            />
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shineSweep_2.4s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Brand Text Reveal */}
        <div className="space-y-2 max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider flex items-center justify-center gap-2">
            <span>KHỞI</span>
            <span className="font-serif-italic font-normal text-[#38bdf8]">AGENCY</span>
          </h2>

          <p className="font-serif-italic text-sm sm:text-base text-[#eef4ff]/80">
            "Khởi đầu thương hiệu, bứt phá cùng ý tưởng"
          </p>
        </div>

        {/* Progress Bar & Numeric Counter */}
        <div className="mt-8 flex items-center gap-4 w-56 max-w-full">
          <span className="text-xs font-mono font-bold text-[#38bdf8] w-10 text-right tabular-nums">
            {progress}%
          </span>
          <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden border border-white/15">
            <div
              className="h-full bg-gradient-to-r from-[#1a68e8] via-[#38bdf8] to-white rounded-full transition-all duration-100 ease-out shadow-[0_0_10px_#38bdf8]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

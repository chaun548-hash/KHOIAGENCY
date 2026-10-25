import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../data/agencyData';
import { ArrowRight, Check } from 'lucide-react';

interface RoadmapSectionProps {
  onStartProject: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onStartProject }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const setStepWithTransition = (stepNumber: number) => {
    const update = () => setCurrentStep(stepNumber);
    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(update);
    } else {
      update();
    }
  };

  const activeStepData = ROADMAP_STEPS.find((s) => s.step === currentStep) || ROADMAP_STEPS[0];

  const progressPercentage = [
    '12.5%',
    '37.5%',
    '62.5%',
    '100%',
  ][currentStep - 1];

  return (
    <section id="quy-trinh" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
            <span className="font-serif-italic text-lg">04</span>
            <span>Roadmap</span>
            <span className="w-8 h-px bg-[#38bdf8]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
            Bốn giai đoạn, <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">rõ ràng</span> từ đầu đến cuối.
          </h2>

          <p className="mt-4 text-base text-[#eef4ff]/80 max-w-xl">
            Quy trình làm việc minh bạch giúp bạn luôn nắm rõ tiến độ và trực tiếp kiểm duyệt chất lượng ở từng cột mốc.
          </p>
        </div>

        {/* Stepper Controls Bar */}
        <div className="mt-14 relative">
          {/* Progress Track Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 h-[3px] rounded-full bg-white/10 hidden sm:block">
            <div
              className="h-full bg-gradient-to-r from-[#1a68e8] via-[#38bdf8] to-white rounded-full transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-[0_0_16px_rgba(56,189,248,0.8)] relative"
              style={{ width: progressPercentage }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_14px_#38bdf8]" />
            </div>
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 relative z-10">
            {ROADMAP_STEPS.map((step) => {
              const isActive = currentStep === step.step;
              const isDone = currentStep > step.step;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setStepWithTransition(step.step)}
                  className="flex flex-col items-center gap-2 group cursor-pointer text-center"
                >
                  <div
                    className={`w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center font-serif-italic text-lg sm:text-xl font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-tr from-[#60a5fa] to-white text-[#010926] scale-110 shadow-[0_0_0_8px_rgba(56,189,248,0.2),0_0_30px_rgba(56,189,248,0.6)]'
                        : isDone
                        ? 'bg-[#38bdf8]/25 text-white border border-[#38bdf8]'
                        : 'bg-white/10 text-white/70 border border-white/20 group-hover:border-[#38bdf8]/50 group-hover:text-white'
                    }`}
                  >
                    0{step.step}
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isActive || isDone ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detailed Content Panel */}
        <div className="mt-10 sm:mt-12 glass-panel p-8 sm:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center hover:border-[#38bdf8]/40 transition-colors">
          {/* Left Art Illustration */}
          <div className="md:col-span-4 flex items-center justify-center">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-radial from-[#084ebd]/40 via-[#021f68]/20 to-transparent flex items-center justify-center border border-[#38bdf8]/30 shadow-xl shadow-[#021f68]/40">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 sm:w-28 sm:h-28 stroke-[#38bdf8] fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round animate-float"
              >
                <path d={activeStepData.svgPath} />
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-8 flex flex-col items-start">
            <div className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] mb-2">
              Giai đoạn {activeStepData.step} / 4 · {activeStepData.label}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {activeStepData.title}
            </h3>

            <p className="text-sm sm:text-base text-[#eef4ff]/80 leading-relaxed mb-6">
              {activeStepData.description}
            </p>

            {/* Checklist of deliverables */}
            <div className="space-y-2.5 w-full pt-4 border-t border-white/10 mb-8">
              {activeStepData.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eef4ff]/90">
                  <div className="w-4 h-4 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#38bdf8] stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Step navigation button */}
            <div className="flex flex-wrap items-center gap-4">
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={() => setStepWithTransition(Math.min(4, currentStep + 1))}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-full font-bold text-xs sm:text-sm border border-[#38bdf8]/40 bg-[#021f68]/30 text-white hover:bg-[#38bdf8] hover:text-[#010926] hover:border-[#38bdf8] transition-all cursor-pointer"
                >
                  <span>Giai đoạn tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onStartProject}
                  className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full font-bold text-sm bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white text-[#010926] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all cursor-pointer"
                >
                  <span>Khởi động dự án ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Calculator } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const navigate = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(navigate);
    } else {
      navigate();
    }
  };

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center px-5 sm:px-8 lg:px-14 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1220px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column: Core Value Proposition with Parallax Shift */}
        <div
          className="lg:col-span-7 flex flex-col items-start transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-white bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6 shadow-md hover:border-[#38bdf8]/50 transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] animate-pulse" />
            <span>CREATIVE AGENCY · DÀNH CHO DOANH NGHIỆP NHỎ</span>
          </div>

          {/* Main Headline with balanced typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.08] tracking-[-0.03em] max-w-2xl text-balance">
            Khởi đầu <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white">thương hiệu</span>, bứt phá cùng ý tưởng.
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg text-[#eef4ff]/85 leading-relaxed max-w-xl">
            KHỞI AGENCY đồng hành từ ý tưởng đầu tiên đến hình ảnh, video và nội dung giúp thương hiệu của bạn được nhìn thấy, yêu thích và bùng nổ doanh số.
          </p>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollTo('combo')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white text-[#010926] hover:shadow-[0_0_36px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Xem bảng giá combo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('du-toan')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white border border-[#1a68e8]/40 bg-[#021852]/30 hover:bg-[#38bdf8] hover:text-[#010926] hover:border-[#38bdf8] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Dự toán chi phí</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('dich-vu')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-[#60a5fa] hover:text-white transition-colors cursor-pointer"
            >
              <span>Khám phá 6 dịch vụ lẻ</span>
            </button>
          </div>

          {/* Trust Value Strip */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full text-xs font-semibold text-[#eef4ff]/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>Tư vấn chiến lược 0đ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>Báo giá minh bạch, rõ ràng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>Bàn giao 100% file gốc</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase with Parallax Layering */}
        <div
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          {/* Morphing Liquid Glow Backing with user's velvet sapphire gradient */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-[#021852] via-[#084ebd]/45 to-[#38bdf8]/20 rounded-full blur-3xl opacity-70 animate-morph pointer-events-none" />

          {/* Central Logo Emblem Glass Plate */}
          <div className="relative w-64 sm:w-80 h-64 sm:h-80 rounded-full glass-panel flex flex-col items-center justify-center p-6 text-center shadow-2xl animate-float group hover:border-[#38bdf8]/50 transition-colors">
            {/* Logo Emblem Icon */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2 shadow-2xl shadow-[#022a8a]/60 mb-3 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="Logo KHỞI AGENCY"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-xl sm:text-2xl font-black text-white tracking-wider">
              KHỞI <span className="font-serif-italic font-normal text-[#60a5fa]">AGENCY</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#38bdf8] font-bold mt-1">
              Creative Studio
            </div>

            {/* Ascending Vector Arrow */}
            <svg
              viewBox="0 0 100 40"
              className="w-24 h-8 mt-2 stroke-[#38bdf8] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round opacity-80"
            >
              <path d="M10 30 Q 50 25, 80 10" />
              <polyline points="70 10, 80 10, 80 20" />
            </svg>
          </div>

          {/* Floating Badges with Subtle Parallax Float */}
          <div
            className="absolute -top-3 left-2 sm:left-4 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-white shadow-lg backdrop-blur-xl animate-float [animation-delay:-2s] border border-white/20 hover:border-[#38bdf8] transition-colors"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <span className="text-[#38bdf8] mr-1.5 font-bold">01</span> Lên ý tưởng
          </div>

          <div
            className="absolute top-1/2 -right-4 sm:-right-6 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-white shadow-lg backdrop-blur-xl animate-float [animation-delay:-4s] border border-white/20 hover:border-[#38bdf8] transition-colors"
            style={{ transform: `translateY(${scrollY * -0.06}px)` }}
          >
            <span className="text-[#38bdf8] mr-1.5 font-bold">02</span> Chụp &amp; Quay 4K
          </div>

          <div
            className="absolute -bottom-3 left-8 sm:left-12 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-white shadow-lg backdrop-blur-xl animate-float [animation-delay:-1s] border border-white/20 hover:border-[#38bdf8] transition-colors"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            <span className="text-[#38bdf8] mr-1.5 font-bold">03</span> Bứt phá doanh thu
          </div>
        </div>
      </div>
    </section>
  );
};

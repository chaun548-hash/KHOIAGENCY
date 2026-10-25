import React from 'react';
import { PORTFOLIO_CASES } from '../data/agencyData';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenConsultation: (projectClient?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--px', `${x}px`);
    card.style.setProperty('--py', `${y}px`);
    const rx = ((y / rect.height - 0.5) * -7).toFixed(2);
    const ry = ((x / rect.width - 0.5) * 7).toFixed(2);
    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="du-an" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
            <span className="font-serif-italic text-lg">✦</span>
            <span>Dự án tiêu biểu</span>
            <span className="w-8 h-px bg-[#38bdf8]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
            Minh chứng <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">thực chiến</span> cùng khách hàng.
          </h2>

          <p className="mt-4 text-base text-[#eef4ff]/80">
            Xem cách KHỞI AGENCY giúp các cửa hàng F&B, thương hiệu thời trang và spa địa phương tạo dấu ấn và tăng trưởng doanh thu.
          </p>
        </div>

        {/* 4 Case Studies Grid with 3D Tilt Card Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_CASES.map((item) => (
            <div
              key={item.id}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="interactive-card glass-panel p-8 sm:p-9 rounded-3xl flex flex-col justify-between group"
            >
              <div className="relative z-10">
                {/* Industry & Services */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                    {item.industry}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.services.map((svc, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-[#60a5fa] transition-colors">
                  {item.client}
                </h3>

                <p className="text-sm text-[#eef4ff]/80 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Quantified Metric Badge (unified sapphire accent) */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0066ee]/20 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-white tabular-nums tracking-tight">
                      {item.growthMetric}
                    </span>
                    <span className="text-xs text-[#eef4ff]/70 block font-medium">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Dự án tương tự ${item.client}`)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:text-[#010926] group-hover:border-[#38bdf8] group-hover:bg-[#38bdf8] transition-all cursor-pointer"
                  aria-label={`Xem giải pháp cho ${item.client}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

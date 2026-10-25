import React from 'react';
import { AGENCY_COMBOS } from '../data/agencyData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

interface ComboSectionProps {
  onSelectCombo: (comboName: string) => void;
}

export const ComboSection: React.FC<ComboSectionProps> = ({ onSelectCombo }) => {
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
    <section id="combo" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
            <span className="font-serif-italic text-lg">03</span>
            <span>Gói combo</span>
            <span className="w-8 h-px bg-[#38bdf8]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
            Tiết kiệm hơn khi <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">đi cùng nhau</span>.
          </h2>

          <p className="mt-4 text-base text-[#eef4ff]/80">
            Ba combo thiết kế chuẩn chỉnh theo từng giai đoạn phát triển của doanh nghiệp nhỏ, giúp tối ưu chi phí và đồng bộ nhận diện.
          </p>
        </div>

        {/* 3 Combo Cards with 3D Card Hover */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {AGENCY_COMBOS.map((combo) => (
            <div
              key={combo.id}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className={`interactive-card rounded-3xl p-8 sm:p-9 flex flex-col justify-between group ${
                combo.popular
                  ? 'glass-panel-hot border-[#38bdf8]/70 shadow-[0_20px_50px_rgba(2,40,140,0.5)]'
                  : 'glass-panel hover:border-[#38bdf8]/40'
              }`}
            >
              <div className="relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#38bdf8]">
                    {combo.badge}
                  </span>
                  {combo.savings && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/35">
                      {combo.savings}
                    </span>
                  )}
                </div>

                {/* Package Name */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-[#60a5fa] transition-colors">
                  {combo.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#eef4ff]/75 leading-relaxed min-h-[38px] mb-6">
                  {combo.tagline}
                </p>

                {/* Price Display */}
                <div className="py-5 border-y border-white/10 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
                      {combo.priceFormatted} đ
                    </span>
                    {combo.originalPriceFormatted && (
                      <span className="text-sm line-through text-[#eef4ff]/50 tabular-nums">
                        {combo.originalPriceFormatted} đ
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#38bdf8] mt-1 block">
                    Trọn gói chìa khóa trao tay
                  </span>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-3 mb-8">
                  {combo.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eef4ff]/90">
                      <div className="w-4 h-4 rounded-full bg-[#38bdf8]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#38bdf8] stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10">
                <button
                  type="button"
                  onClick={() => onSelectCombo(combo.name)}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                    combo.popular
                      ? 'bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white text-[#010926] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)]'
                      : 'border border-white/30 text-white hover:bg-white hover:text-[#010926]'
                  }`}
                >
                  <span>Chọn gói {combo.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tailored Package Note */}
        <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-white/90 font-medium inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#38bdf8]" />
            <span>
              Cần gói giải pháp riêng cho mô hình kinh doanh của bạn? Chúng tôi sẵn sàng tùy chỉnh combo theo yêu cầu.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

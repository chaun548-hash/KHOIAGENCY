import React, { useState } from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Check, Plus, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEstimate?: (serviceId: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả dịch vụ' },
    { id: 'visual', label: 'Chụp ảnh & Video' },
    { id: 'strategy', label: 'Ý tưởng & Nhận diện' },
    { id: 'content', label: 'Content Fanpage' },
    { id: 'ads', label: 'Chạy Ads' },
  ];

  const handleCategoryChange = (catId: string) => {
    const update = () => setActiveCategory(catId);
    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(update);
    } else {
      update();
    }
  };

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

  const filteredServices = activeCategory === 'all'
    ? AGENCY_SERVICES
    : AGENCY_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="dich-vu" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
              <span className="font-serif-italic text-lg">02</span>
              <span>Dịch vụ lẻ</span>
              <span className="w-8 h-px bg-[#38bdf8]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
              Chọn đúng thứ bạn <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">đang cần</span>.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#eef4ff]/80 leading-relaxed max-w-md">
              Chưa sẵn sàng cho cả combo? Hãy bắt đầu từ một dịch vụ riêng lẻ và nâng cấp bất cứ lúc nào theo sự phát triển của thương hiệu.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Filter Tabs with View Transitions */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel self-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-[#60a5fa] to-white text-[#010926] shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Services Grid with 3D Tilt & Spotlight Hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className={`interactive-card glass-panel p-7 rounded-3xl flex flex-col justify-between group ${
                    service.popular ? 'border-[#38bdf8]/40 shadow-[0_10px_35px_rgba(2,35,115,0.4)]' : ''
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif-italic text-3xl font-bold text-[#38bdf8]">
                        {service.number}
                      </span>
                      {service.popular && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#010926] bg-[#38bdf8] px-2.5 py-0.5 rounded-full shadow-sm">
                          Phổ biến
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#60a5fa] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#eef4ff]/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverable bullets */}
                    <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#eef4ff]/85">
                          <Check className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="pt-4 border-t border-white/10 flex items-baseline justify-between mb-4">
                      <span className="text-xs text-[#eef4ff]/60 uppercase tracking-wider font-semibold">
                        Chi phí từ
                      </span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-black text-white tabular-nums">
                          {service.priceFormatted} đ
                        </span>
                        <span className="text-xs text-[#38bdf8] block">
                          / {service.priceUnit}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectServiceForEstimate?.(service.id)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-[#38bdf8]/40 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Thêm dự toán</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenConsultation(service.title)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-[#38bdf8] text-[#010926] hover:bg-white transition-colors cursor-pointer"
                      >
                        <span>Nhận tư vấn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

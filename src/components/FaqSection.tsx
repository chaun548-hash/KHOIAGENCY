import React, { useState } from 'react';
import { AGENCY_FAQS } from '../data/agencyData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-16 relative">
      <div className="max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#a8c8ff] mb-4">
              <span className="font-serif-italic text-lg">06</span>
              <span>Hỏi đáp</span>
              <span className="w-8 h-px bg-[#a8c8ff]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
              Giải đáp <span className="font-serif-italic font-normal text-[#a8c8ff]">nhanh</span>.
            </h2>

            <p className="mt-4 text-base text-[#eef4ff]/80 max-w-md">
              Những thắc mắc phổ biến nhất của các chủ doanh nghiệp và cửa hàng khi lần đầu tìm agency đồng hành.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 divide-y divide-white/15">
            {AGENCY_FAQS.map((faq, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#a8c8ff] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-[#a8c8ff] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#a8c8ff]/20' : 'group-hover:border-[#a8c8ff]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8 text-sm sm:text-base text-[#eef4ff]/80 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

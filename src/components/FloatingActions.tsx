import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calculator, ArrowUp } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('du-toan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-8 z-40 flex flex-col items-end gap-3">
      {/* Quick Estimator Button */}
      <button
        type="button"
        onClick={scrollToEstimator}
        className="hidden md:inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#020a24]/90 backdrop-blur-xl border border-[#a8c8ff]/40 text-xs font-bold text-white shadow-lg hover:border-[#a8c8ff] hover:bg-[#a8c8ff]/20 transition-all cursor-pointer"
      >
        <Calculator className="w-3.5 h-3.5 text-[#a8c8ff]" />
        <span>Tính chi phí dự án</span>
      </button>

      {/* Main Action Group */}
      <div className="flex items-center gap-2.5">
        {/* Zalo / Consultation Button */}
        <a
          href={AGENCY_CONTACT.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Nhắn tin Zalo với KHỞI AGENCY"
          title="Chat Zalo ngay"
        >
          <span className="font-extrabold text-xs tracking-tighter">Zalo</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${AGENCY_CONTACT.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#a8c8ff] to-white text-[#023287] flex items-center justify-center shadow-lg shadow-[#a8c8ff]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Gọi điện thoại trực tiếp"
          title={`Gọi ${AGENCY_CONTACT.phone}`}
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#010620]/80 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Cuộn lên đầu trang"
            title="Lên đầu trang"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

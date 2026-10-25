import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Play } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

interface NavbarProps {
  onOpenConsultation: (packageId?: string) => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Giới thiệu', href: '#gioi-thieu' },
    { label: 'Dịch vụ lẻ', href: '#dich-vu' },
    { label: 'Gói Combo', href: '#combo' },
    { label: 'Dự toán', href: '#du-toan' },
    { label: 'Roadmap', href: '#quy-trinh' },
    { label: 'Dự án', href: '#du-an' },
    { label: 'Hỏi đáp', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const navigate = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Use View Transitions API if available for silky smooth feel
    if ('startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(navigate);
    } else {
      navigate();
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-6 px-5 sm:px-8 lg:px-14 py-3 bg-[#010414]/75 backdrop-blur-3xl border-b border-[#1a68e8]/20 transition-all duration-300">
      {/* Zone 1: Brand Wordmark & Logo */}
      <a
        href="#top"
        onClick={(e) => handleNavClick(e, '#top')}
        className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 group"
      >
        <div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-md shadow-[#0066ee]/40 overflow-hidden shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <img
            src="/logo.png"
            alt="KHỞI AGENCY Logo"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
        <span className="font-extrabold tracking-normal">
          KHỞI <span className="font-serif-italic font-normal text-[#60a5fa]">AGENCY</span>
        </span>
      </a>

      {/* Zone 2: Single-line navigation links */}
      <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#e4e4e4]">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="whitespace-nowrap shrink-0 hover:text-white hover:underline underline-offset-8 decoration-[#38bdf8] transition-all duration-200 py-1"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Zone 3: 1 Primary Action + Quick Utilities */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Replay Intro Button */}
        {onReplayIntro && (
          <button
            type="button"
            onClick={onReplayIntro}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-[#38bdf8] transition-colors px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#38bdf8]/40"
            title="Xem lại hiệu ứng mở đầu"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Intro</span>
          </button>
        )}

        <a
          href={`tel:${AGENCY_CONTACT.phone.replace(/\s+/g, '')}`}
          className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-[#60a5fa] hover:text-white transition-colors px-3 py-1.5 rounded-full border border-[#1a68e8]/30 hover:border-[#60a5fa]/60 bg-[#021852]/40"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="tabular-nums">{AGENCY_CONTACT.phone}</span>
        </a>

        <button
          type="button"
          onClick={() => onOpenConsultation()}
          className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white text-[#010926] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>Nhận tư vấn</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-white rounded-lg border border-white/10 hover:border-white/30 transition-colors"
          aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bg-[#010414]/95 backdrop-blur-3xl border-b border-[#1a68e8]/25 p-6 shadow-2xl lg:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 px-3 rounded-lg text-base font-semibold text-white/90 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${AGENCY_CONTACT.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border border-[#38bdf8]/30 text-[#38bdf8]"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline: {AGENCY_CONTACT.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="py-3 px-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#60a5fa] to-white text-[#010926] text-center"
            >
              Đăng ký tư vấn miễn phí
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

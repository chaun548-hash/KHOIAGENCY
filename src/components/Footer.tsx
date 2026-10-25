import React from 'react';
import { ArrowUp, Phone, Mail } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-[#a8c8ff]/15 bg-white/[0.02] backdrop-blur-xl pt-16 pb-12 px-5 sm:px-8 lg:px-16">
      <div className="max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-md overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="KHỞI AGENCY Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                KHỞI <span className="font-serif-italic font-normal text-[#a8c8ff]">AGENCY</span>
              </span>
            </div>

            <p className="text-sm text-[#eef4ff]/75 leading-relaxed max-w-sm mb-6">
              Agency sáng tạo đồng hành cùng các cửa hàng và thương hiệu nhỏ. Tinh gọn, thẩm mỹ sắc nét và lấy hiệu quả kinh doanh làm thước đo.
            </p>

            <div className="text-xs text-[#a8c8ff] font-semibold">
              Khởi đầu thương hiệu, bứt phá cùng ý tưởng.
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Dịch vụ nổi bật
            </h4>
            <ul className="space-y-2.5 text-sm text-[#eef4ff]/70">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Lên ý tưởng &amp; Chiến lược
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Chụp ảnh sản phẩm &amp; Lookbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Quay dựng Video ngắn Reels/TikTok
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Thiết kế nhận diện thương hiệu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('dich-vu')}
                  className="hover:text-white transition-colors"
                >
                  Chạy quảng cáo tối ưu đơn hàng
                </button>
              </li>
            </ul>
          </div>

          {/* Combo Packages */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Gói giải pháp
            </h4>
            <ul className="space-y-2.5 text-sm text-[#eef4ff]/70">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('combo')}
                  className="hover:text-white transition-colors"
                >
                  Combo 01: Khởi Đầu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('combo')}
                  className="hover:text-white transition-colors"
                >
                  Combo 02: Bứt Phá
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('combo')}
                  className="hover:text-white transition-colors"
                >
                  Combo 03: Toàn Diện
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('du-toan')}
                  className="hover:text-white transition-colors"
                >
                  Bảng dự toán chi phí
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('quy-trinh')}
                  className="hover:text-white transition-colors"
                >
                  Roadmap 4 giai đoạn
                </button>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Kết nối với KHỞI
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#eef4ff]/75">
              <a
                href={AGENCY_CONTACT.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a8c8ff] transition-colors"
              >
                Zalo Official Account
              </a>
              <a
                href={AGENCY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a8c8ff] transition-colors"
              >
                Facebook Fanpage
              </a>
              <a
                href={AGENCY_CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a8c8ff] transition-colors"
              >
                Kênh TikTok
              </a>
              <a
                href={AGENCY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a8c8ff] transition-colors"
              >
                Instagram Gallery
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#eef4ff]/70">
          <p>© 2026 KHỞI AGENCY. Tất cả các quyền được bảo lưu.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

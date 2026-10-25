import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Lên ý tưởng',
    'Chụp ảnh sản phẩm',
    'Quay quảng cáo Reels',
    'Nhận diện thương hiệu',
    'Content Fanpage',
    'Chạy quảng cáo Meta & TikTok',
    'Bao bì & Menu bán hàng',
    'Chiến lược tăng trưởng',
  ];

  return (
    <div className="relative z-20 overflow-hidden py-6 sm:py-8 bg-white/[0.03] backdrop-blur-md border-y border-[#a8c8ff]/15">
      <div className="animate-marquee flex items-center">
        {/* Double array to create seamless infinite scroll */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6 text-xl sm:text-2xl lg:text-3xl font-extrabold whitespace-nowrap text-white/90 hover:text-[#a8c8ff] transition-colors cursor-default"
          >
            <span className={idx % 2 === 1 ? 'text-transparent [-webkit-text-stroke:1.2px_rgba(228,228,228,0.7)]' : ''}>
              {item}
            </span>
            <span className="text-[#a8c8ff] text-xs sm:text-sm select-none" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

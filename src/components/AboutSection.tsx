import React from 'react';
import { Users, Target, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Thấu hiểu trước',
      desc: 'Lắng nghe câu chuyện, sản phẩm và khách hàng của bạn trước khi đặt bút lên bất kỳ ý tưởng nào. Không áp đặt khuôn mẫu rập khuôn.',
      icon: Users,
    },
    {
      num: '02',
      title: 'Sáng tạo có chủ đích',
      desc: 'Mỗi hình ảnh, mỗi thước phim đều phục vụ một mục tiêu kinh doanh cụ thể: thu hút khách mới, tạo niềm tin hay chốt đơn hàng nhanh chóng.',
      icon: Target,
    },
    {
      num: '03',
      title: 'Đồng hành lâu dài',
      desc: 'Lớn lên cùng thương hiệu của bạn, từ gói nhỏ đầu tiên đến chiến dịch toàn diện với tinh thần nhiệt huyết và trách nhiệm cao nhất.',
      icon: HeartHandshake,
    },
  ];

  const stats = [
    { value: '50+', label: 'Thương hiệu & cửa hàng đã đồng hành' },
    { value: '100%', label: 'File gốc bàn giao trọn vẹn bản quyền' },
    { value: '3.5x', label: 'Tỷ lệ tăng trưởng tương tác trung bình' },
    { value: '48h', label: 'Cam kết phản hồi và kế hoạch sơ bộ' },
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--px', `${x}px`);
    card.style.setProperty('--py', `${y}px`);
    const rx = ((y / rect.height - 0.5) * -8).toFixed(2);
    const ry = ((x / rect.width - 0.5) * 8).toFixed(2);
    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="gioi-thieu" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        {/* Section Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
              <span className="font-serif-italic text-lg">01</span>
              <span>Giới thiệu</span>
              <span className="w-8 h-px bg-[#38bdf8]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
              Đội ngũ trẻ, <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">khởi</span> từ sự thấu hiểu.
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-[#eef4ff]/90 text-base sm:text-lg leading-relaxed">
            <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
              KHỞI AGENCY là agency sáng tạo trẻ trung, phục vụ cửa hàng, thương hiệu địa phương và doanh nghiệp nhỏ. Chúng tôi tin rằng thương hiệu nhỏ cũng xứng đáng có hình ảnh chuyên nghiệp, thẩm mỹ sắc nét với ngân sách rõ ràng và quy trình minh bạch.
            </p>
            <p className="text-[#eef4ff]/80">
              Không dùng thuật ngữ đao to búa lớn hay vẽ ra những kế hoạch xa vời, KHỞI tập trung tạo ra những tài sản truyền thông thực chiến: hình ảnh chỉn chu, video hút mắt và nội dung chạm đúng insight người tiêu dùng.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars with Interactive 3D Card Hover */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="interactive-card glass-panel p-7 sm:p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-italic text-3xl font-bold text-[#38bdf8]">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 group-hover:border-[#38bdf8]/40 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#eef4ff]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Quantified Stats Grid */}
        <div className="mt-12 glass-panel p-8 sm:p-10 rounded-3xl grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? 'pt-4 sm:pt-0' : ''}`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-[#60a5fa] tracking-tight tabular-nums">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm text-[#eef4ff]/80 font-medium max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

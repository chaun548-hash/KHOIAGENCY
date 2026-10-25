import React from 'react';
import { ShieldCheck, Clock, CheckCircle, FileCheck2 } from 'lucide-react';

export const CommitmentsSection: React.FC = () => {
  const commitments = [
    {
      title: 'Giá minh bạch',
      desc: 'Báo giá chi tiết từng hạng mục rõ ràng trước khi bấm máy, cam kết không phát sinh bất kỳ phụ phí nào ngoài thỏa thuận hợp đồng.',
      icon: ShieldCheck,
    },
    {
      title: 'Đúng hẹn cam kết',
      desc: 'Tiến độ bàn giao từng mốc được quy định cụ thể trong thỏa thuận. Đội ngũ cập nhật trạng thái liên tục để bạn hoàn toàn an tâm.',
      icon: Clock,
    },
    {
      title: 'Chỉnh sửa tận tâm',
      desc: 'Cam kết số vòng chỉnh sửa minh bạch theo từng gói dịch vụ, tiếp thu ý kiến chân thành để tạo ra sản phẩm khiến bạn ưng ý nhất.',
      icon: CheckCircle,
    },
    {
      title: 'Bàn giao trọn vẹn',
      desc: 'Khách hàng sở hữu 100% bản quyền thương hiệu, toàn bộ file thiết kế vector gốc và file ảnh/video chất lượng cao nhất sau thanh toán.',
      icon: FileCheck2,
    },
  ];

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
    <section id="cam-ket" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Sticky Left Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-4">
              <span className="font-serif-italic text-lg">05</span>
              <span>Cam kết</span>
              <span className="w-8 h-px bg-[#38bdf8]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
              Lời hứa của <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#38bdf8]">KHỞI</span>.
            </h2>
            <p className="mt-4 text-base text-[#eef4ff]/80 max-w-md">
              Uy tín tạo nên sự gắn kết. Chúng tôi tôn trọng từng đồng ngân sách và từng kỳ vọng mà bạn trao gửi.
            </p>
          </div>

          {/* Right Commitments Grid with 3D Tilt Hover */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  className="interactive-card glass-panel p-7 rounded-3xl group"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066ee]/20 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#60a5fa] transition-colors">
                      {c.title}
                    </h3>

                    <p className="text-sm text-[#eef4ff]/75 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

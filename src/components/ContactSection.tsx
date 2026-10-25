import React, { useState, useEffect } from 'react';
import { AGENCY_CONTACT } from '../data/agencyData';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialServiceOrPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceOrPackage }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Combo Bứt Phá (Khuyên dùng)');
  const [budget, setBudget] = useState('10 - 20 triệu');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Update selected package if passed from props
  useEffect(() => {
    if (initialServiceOrPackage) {
      if (initialServiceOrPackage.startsWith('Dự toán dịch vụ')) {
        setSelectedPackage('Dự toán tùy chỉnh theo nhu cầu');
        setMessage(initialServiceOrPackage);
      } else {
        setSelectedPackage(initialServiceOrPackage);
      }
    }
  }, [initialServiceOrPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    if (!phone.trim()) {
      setErrorMsg('Vui lòng nhập số điện thoại hoặc Zalo để KHỞI liên hệ.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable consultation submission
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = 'KHOI-' + Math.floor(1000 + Math.random() * 9000);
      setSubmittedCode(randomCode);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="lien-he" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-16 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#023287]/30 blur-[130px] pointer-events-none" />

      <div className="max-w-[1220px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Coordinates & Commitment */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#a8c8ff] mb-4">
              <span className="font-serif-italic text-lg">07</span>
              <span>Liên hệ tư vấn</span>
              <span className="w-8 h-px bg-[#a8c8ff]/60" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight">
              Cùng <span className="font-serif-italic font-normal text-[#a8c8ff]">khởi</span> một điều đặc biệt?
            </h2>

            <p className="mt-4 text-base text-[#eef4ff]/80 leading-relaxed">
              Để lại thông tin, đội ngũ KHỞI AGENCY sẽ liên hệ trong vòng 2 giờ để tư vấn ý tưởng và gửi bảng kế hoạch sơ bộ miễn phí cho thương hiệu của bạn.
            </p>

            {/* Direct contact coordinates */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a8c8ff]/15 flex items-center justify-center text-[#a8c8ff] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#eef4ff]/60 block uppercase tracking-wider">
                    Hotline / Zalo 24/7
                  </span>
                  <a
                    href={`tel:${AGENCY_CONTACT.phone.replace(/\s+/g, '')}`}
                    className="text-lg font-bold text-white hover:text-[#a8c8ff] transition-colors tabular-nums"
                  >
                    {AGENCY_CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a8c8ff]/15 flex items-center justify-center text-[#a8c8ff] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#eef4ff]/60 block uppercase tracking-wider">
                    Email trao đổi công việc
                  </span>
                  <a
                    href={`mailto:${AGENCY_CONTACT.email}`}
                    className="text-base font-bold text-white hover:text-[#a8c8ff] transition-colors"
                  >
                    {AGENCY_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a8c8ff]/15 flex items-center justify-center text-[#a8c8ff] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#eef4ff]/60 block uppercase tracking-wider">
                    Văn phòng làm việc
                  </span>
                  <span className="text-sm font-semibold text-white/90 leading-snug block">
                    {AGENCY_CONTACT.address}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#a8c8ff]/15 flex items-center justify-center text-[#a8c8ff] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#eef4ff]/60 block uppercase tracking-wider">
                    Thời gian hoạt động
                  </span>
                  <span className="text-sm font-semibold text-white/90 block">
                    {AGENCY_CONTACT.workingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 lg:p-12 rounded-3xl relative">
              {submittedCode ? (
                /* Success Screen */
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Yêu cầu đã được gửi thành công!
                  </h3>

                  <p className="text-sm text-[#eef4ff]/80 max-w-md mb-6 leading-relaxed">
                    Cảm ơn <strong>{fullName}</strong>. Chuyên viên của KHỞI AGENCY sẽ liên hệ qua số điện thoại / Zalo <strong>{phone}</strong> trong vòng 2 giờ làm việc để tư vấn giải pháp chi tiết.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 max-w-sm w-full">
                    <div className="text-xs text-[#eef4ff]/60 uppercase tracking-wider mb-1">
                      Mã hồ sơ tư vấn của bạn
                    </div>
                    <div className="text-xl font-mono font-bold text-[#a8c8ff] tracking-wider">
                      #{submittedCode}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={AGENCY_CONTACT.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-[#a8c8ff] text-[#023287] hover:bg-white transition-colors"
                    >
                      Nhắn tin Zalo trực tiếp ngay
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-full font-semibold text-xs sm:text-sm border border-white/20 text-white hover:bg-white/10 transition-colors"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a8c8ff] mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Đăng ký tư vấn miễn phí</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-xs sm:text-sm text-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="fld">
                      <label htmlFor="n">Họ và tên *</label>
                      <input
                        id="n"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nguyễn Văn A"
                        required
                      />
                    </div>

                    <div className="fld">
                      <label htmlFor="p">Số điện thoại hoặc Zalo *</label>
                      <input
                        id="p"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="09xx xxx xxx"
                        required
                      />
                    </div>
                  </div>

                  <div className="fld">
                    <label htmlFor="e">Địa chỉ Email (tùy chọn)</label>
                    <input
                      id="e"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@gmail.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="fld">
                      <label htmlFor="s">Gói hoặc dịch vụ quan tâm</label>
                      <select
                        id="s"
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                      >
                        <option value="Combo Bứt Phá (Khuyên dùng)">Combo Bứt Phá (Khuyên dùng)</option>
                        <option value="Combo Khởi Đầu">Combo Khởi Đầu</option>
                        <option value="Combo Toàn Diện">Combo Toàn Diện</option>
                        <option value="Chụp ảnh sản phẩm & Lifestyle">Chụp ảnh sản phẩm & Lifestyle</option>
                        <option value="Quay video quảng cáo (Reels/TikTok)">Quay video quảng cáo (Reels/TikTok)</option>
                        <option value="Thiết kế nhận diện thương hiệu">Thiết kế nhận diện thương hiệu</option>
                        <option value="Content & Quản trị Fanpage">Content & Quản trị Fanpage</option>
                        <option value="Chạy quảng cáo tối ưu (Ads)">Chạy quảng cáo tối ưu (Ads)</option>
                        <option value="Dự toán tùy chỉnh theo nhu cầu">Dự toán tùy chỉnh theo nhu cầu</option>
                      </select>
                    </div>

                    <div className="fld">
                      <label htmlFor="b">Ngân sách dự kiến</label>
                      <select
                        id="b"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      >
                        <option value="Dưới 10 triệu">Dưới 10 triệu</option>
                        <option value="10 - 20 triệu">10 - 20 triệu</option>
                        <option value="20 - 40 triệu">20 - 40 triệu</option>
                        <option value="Trên 40 triệu">Trên 40 triệu</option>
                      </select>
                    </div>
                  </div>

                  <div className="fld">
                    <label htmlFor="m">Lời nhắn hoặc câu chuyện thương hiệu của bạn</label>
                    <textarea
                      id="m"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hãy kể ngắn gọn về sản phẩm, lĩnh vực và mong muốn của bạn..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-sm bg-gradient-to-r from-[#a8c8ff] to-[#e4e4e4] text-[#023287] hover:shadow-[0_0_35px_rgba(168,200,255,0.7)] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi thông tin...</span>
                    ) : (
                      <>
                        <span>Gửi yêu cầu nhận tư vấn miễn phí</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#eef4ff]/60 mt-3">
                    KHỞI cam kết bảo mật 100% thông tin liên hệ và số điện thoại của bạn.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

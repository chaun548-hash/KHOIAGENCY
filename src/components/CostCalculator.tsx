import React, { useState } from 'react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { Calculator, Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface CostCalculatorProps {
  onApplyEstimate: (summary: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onApplyEstimate }) => {
  const [selectedServices, setSelectedServices] = useState<{ [id: string]: boolean }>({
    photo: true,
    video: true,
  });

  const [quantities, setQuantities] = useState<{ [id: string]: number }>({
    strategy: 1,
    photo: 1,
    video: 2,
    branding: 1,
    content: 1,
    ads: 1,
  });

  const toggleService = (id: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(10, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const resetCalculator = () => {
    setSelectedServices({
      photo: true,
      video: true,
    });
    setQuantities({
      strategy: 1,
      photo: 1,
      video: 2,
      branding: 1,
      content: 1,
      ads: 1,
    });
  };

  let rawTotal = 0;
  const chosenList: string[] = [];

  AGENCY_SERVICES.forEach((service) => {
    if (selectedServices[service.id]) {
      const qty = quantities[service.id] || 1;
      const itemCost = service.startingPrice * qty;
      rawTotal += itemCost;
      chosenList.push(`${service.title} (x${qty})`);
    }
  });

  const chosenCount = Object.values(selectedServices).filter(Boolean).length;
  let discountRate = 0;
  if (chosenCount >= 4) {
    discountRate = 0.2;
  } else if (chosenCount >= 2) {
    discountRate = 0.15;
  }

  const discountAmount = rawTotal * discountRate;
  const finalTotal = Math.round(rawTotal - discountAmount);

  const handleSendToConsultation = () => {
    if (chosenList.length === 0) return;
    const summaryText = `Dự toán dịch vụ: ${chosenList.join(', ')}. Tổng ước tính: ${finalTotal.toLocaleString('vi-VN')} đ (Đã giảm ${(discountRate * 100)}%)`;
    onApplyEstimate(summaryText);
  };

  return (
    <section id="du-toan" className="py-20 sm:py-24 px-5 sm:px-8 lg:px-14 relative">
      <div className="max-w-[1220px] mx-auto">
        <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl relative overflow-hidden border-[#1a68e8]/30 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#60a5fa] mb-2">
                <Calculator className="w-4 h-4 text-[#38bdf8]" />
                <span>Công cụ thông minh</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Dự toán chi phí dự án của bạn
              </h2>
              <p className="mt-2 text-sm text-[#eef4ff]/80 max-w-xl">
                Chọn các đầu mục bạn muốn thực hiện và số lượng mong muốn. KHỞI tự động áp dụng chiết khấu combo tiết kiệm lên tới 20%.
              </p>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60a5fa] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Đặt lại lựa chọn</span>
            </button>
          </div>

          {/* Main Calculation Layout */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Service Selection List */}
            <div className="lg:col-span-7 space-y-3">
              {AGENCY_SERVICES.map((service) => {
                const isChecked = !!selectedServices[service.id];
                const qty = quantities[service.id] || 1;

                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isChecked
                        ? 'bg-white/[0.08] border-[#38bdf8]/60 shadow-[0_4px_20px_rgba(2,38,120,0.35)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-6 h-6 rounded-lg border mt-0.5 flex items-center justify-center transition-colors shrink-0 ${
                          isChecked
                            ? 'bg-[#38bdf8] border-[#38bdf8] text-[#010926]'
                            : 'border-white/30 bg-transparent'
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {service.title}
                        </h4>
                        <div className="text-xs text-[#eef4ff]/70 mt-0.5">
                          Đơn giá: {service.priceFormatted} đ / {service.priceUnit}
                        </div>
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    {isChecked && (
                      <div
                        className="flex items-center gap-3 self-end sm:self-center bg-[#010620]/60 p-1 rounded-xl border border-white/15"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-[11px] font-semibold text-white/60 px-2">
                          Số lượng:
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(service.id, -1)}
                          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 text-white font-bold flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold text-white w-5 text-center tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(service.id, 1)}
                          className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/25 text-white font-bold flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Price Calculation Summary Box */}
            <div className="lg:col-span-5 glass-panel-hot p-6 sm:p-8 rounded-3xl sticky top-28">
              <div className="text-xs font-bold uppercase tracking-wider text-[#60a5fa] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#38bdf8]" />
                <span>Tóm tắt dự toán</span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-6">
                Chi phí ước tính
              </h3>

              {chosenCount === 0 ? (
                <div className="py-8 text-center text-sm text-[#eef4ff]/60">
                  Vui lòng tick chọn ít nhất một dịch vụ bên cạnh để bắt đầu ước tính chi phí.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-[#eef4ff]/80">
                    <span>Tổng đơn giá gốc ({chosenCount} dịch vụ):</span>
                    <span className="font-semibold text-white tabular-nums">
                      {rawTotal.toLocaleString('vi-VN')} đ
                    </span>
                  </div>

                  {discountRate > 0 && (
                    <div className="flex items-center justify-between text-sm text-[#38bdf8]">
                      <span>Ưu đãi Combo ({discountRate * 100}%):</span>
                      <span className="font-bold tabular-nums">
                        -{discountAmount.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/15 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-semibold text-white/70 block uppercase tracking-wider">
                        Tổng thanh toán dự kiến
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white tabular-nums tracking-tight">
                        {finalTotal.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  </div>

                  {discountRate > 0 && (
                    <div className="p-3 rounded-xl bg-[#0066ee]/20 border border-[#38bdf8]/35 text-xs text-[#eef4ff] leading-relaxed">
                      🎉 Tuyệt vời! Bạn đang nhận ưu đãi combo <strong>{discountRate * 100}%</strong> khi chọn từ {discountRate === 0.2 ? '4' : '2'} dịch vụ trở lên.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleSendToConsultation}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm bg-gradient-to-r from-[#60a5fa] via-[#38bdf8] to-white text-[#010926] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all cursor-pointer"
                  >
                    <span>Gửi dự toán này cho KHỞI</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#eef4ff]/60 mt-2">
                    * Mức giá dự toán mang tính tham khảo và có thể được điều chỉnh chi tiết theo thực tế sản phẩm của bạn.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

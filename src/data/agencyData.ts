export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'visual' | 'content' | 'ads' | 'strategy';
  description: string;
  startingPrice: number;
  priceFormatted: string;
  priceUnit: string;
  deliverables: string[];
  popular?: boolean;
}

export interface ComboPackage {
  id: string;
  number: string;
  name: string;
  badge?: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  originalPriceFormatted?: string;
  savings?: string;
  popular?: boolean;
  deliverables: string[];
}

export interface RoadmapStep {
  step: number;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
  svgPath: string;
}

export interface PortfolioItem {
  id: string;
  client: string;
  industry: string;
  services: string[];
  growthMetric: string;
  metricLabel: string;
  description: string;
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Lên ý tưởng & Chiến lược',
    category: 'strategy',
    description: 'Xây dựng concept truyền thông độc bản, định vị thương hiệu và kịch bản nội dung chi tiết theo từng chiến dịch bán hàng.',
    startingPrice: 2500000,
    priceFormatted: '2.500.000',
    priceUnit: 'gói concept',
    deliverables: [
      'Nghiên cứu khách hàng mục tiêu & đối thủ cạnh tranh',
      'Định hướng concept visual & tone of voice',
      'Moodboard định hình phong cách mỹ thuật',
      'Kịch bản nội dung chiến dịch chi tiết',
    ],
  },
  {
    id: 'photo',
    number: '02',
    title: 'Chụp ảnh sản phẩm & Lifestyle',
    category: 'visual',
    description: 'Chụp tại studio chuyên nghiệp hoặc tại cửa hàng của bạn. Đội ngũ stylist chuẩn bị đạo cụ và hậu kỳ chỉnh màu tinh tế.',
    startingPrice: 1800000,
    priceFormatted: '1.800.000',
    priceUnit: 'buổi chụp',
    deliverables: [
      'Concept setup theo nhận diện thương hiệu',
      '30 - 50 ảnh chụp hoàn thiện chỉnh màu cao cấp',
      'Bàn giao toàn bộ file gốc độ phân giải cao',
      'Tối ưu kích thước chuẩn đăng Facebook/Instagram/Shopee',
    ],
    popular: true,
  },
  {
    id: 'video',
    number: '03',
    title: 'Quay video quảng cáo (Reels/TikTok)',
    category: 'visual',
    description: 'Video ngắn viral bắt trend, giới thiệu sản phẩm hoặc review trải nghiệm. Trọn gói từ kịch bản, quay, dựng đến nhạc bản quyền.',
    startingPrice: 2200000,
    priceFormatted: '2.200.000',
    priceUnit: 'video hoàn thiện',
    deliverables: [
      'Biên kịch kịch bản giữ chân người xem 3s đầu',
      'Quay bằng thiết bị 4K, ánh sáng studio di động',
      'Dựng video, hiệu ứng chữ, âm nhạc có bản quyền',
      'Tối ưu tỷ lệ 9:16 dọc cho TikTok, Reels, Shorts',
    ],
    popular: true,
  },
  {
    id: 'branding',
    number: '04',
    title: 'Thiết kế nhận diện thương hiệu',
    category: 'strategy',
    description: 'Logo sáng tạo, bảng màu chủ đạo, font chữ và bộ ấn phẩm bán hàng cơ bản giúp hình ảnh của bạn luôn nhất quán và đáng tin cậy.',
    startingPrice: 3500000,
    priceFormatted: '3.500.000',
    priceUnit: 'bộ nhận diện',
    deliverables: [
      'Logo chính, logo phụ và biểu tượng icon',
      'Bảng quy chuẩn màu sắc và font chữ thương hiệu',
      'Thiết kế ấn phẩm: Namecard, Avatar, Cover, Tag sản phẩm',
      'Cung cấp file vector (AI, PDF, PNG trong suốt)',
    ],
  },
  {
    id: 'content',
    number: '05',
    title: 'Content & Quản trị Fanpage',
    category: 'content',
    description: 'Lên lịch biên tập bài đăng, viết bài thu hút, thiết kế hình ảnh bài post và chăm sóc tương tác cộng đồng bền vững.',
    startingPrice: 4000000,
    priceFormatted: '4.000.000',
    priceUnit: 'tháng',
    deliverables: [
      'Lịch xuất bản nội dung tháng theo hành trình khách hàng',
      '16 - 20 bài viết kèm ảnh thiết kế chuyên nghiệp',
      'Thiết kế ảnh bìa, avatar chiến dịch theo tháng',
      'Báo cáo đo lường tương tác và hiệu quả bài đăng',
    ],
  },
  {
    id: 'ads',
    number: '06',
    title: 'Chạy quảng cáo tối ưu (Meta / TikTok)',
    category: 'ads',
    description: 'Thiết lập chiến dịch quảng cáo đúng tệp khách tiềm năng, theo dõi chỉ số chi phí và tối ưu tỉ lệ chuyển đổi ra tin nhắn và đơn hàng.',
    startingPrice: 3000000,
    priceFormatted: '3.000.000',
    priceUnit: 'tháng quản lý',
    deliverables: [
      'Phân tích tệp đối tượng và địa điểm mục tiêu',
      'A/B Testing kịch bản quảng cáo và hình ảnh',
      'Tối ưu chi phí trên mỗi tin nhắn / lượt tương tác',
      'Báo cáo minh bạch số liệu hàng tuần & hàng tháng',
    ],
  },
];

export const AGENCY_COMBOS: ComboPackage[] = [
  {
    id: 'combo-khoi-dau',
    number: '01',
    name: 'Khởi Đầu',
    badge: 'DÀNH CHO THƯƠNG HIỆU MỚI',
    tagline: 'Gói giải pháp toàn vẹn để đặt nền móng vững chắc cho ngày ra mắt thương hiệu hoặc sản phẩm mới.',
    price: 6900000,
    priceFormatted: '6.900.000',
    originalPriceFormatted: '8.800.000',
    savings: 'Tiết kiệm 22%',
    popular: false,
    deliverables: [
      'Workshop tư vấn định vị & lên ý tưởng concept',
      'Bộ nhận diện thương hiệu cơ bản (Logo, Font, Bảng màu)',
      '1 buổi chụp ảnh sản phẩm (30 ảnh chỉnh sửa hoàn thiện)',
      '10 bài đăng mạng xã hội kèm ảnh thiết kế ra mắt',
      'Bàn giao toàn bộ file thiết kế và hình ảnh gốc',
    ],
  },
  {
    id: 'combo-but-pha',
    number: '02',
    name: 'Bứt Phá',
    badge: 'GÓI PHỔ BIẾN NHẤT · KHUYÊN DÙNG',
    tagline: 'Tăng tốc độ nhận diện, bứt phá lượt tương tác và biến khách hàng tò mò thành người mua thực sự.',
    price: 14500000,
    priceFormatted: '14.500.000',
    originalPriceFormatted: '19.200.000',
    savings: 'Tiết kiệm 25%',
    popular: true,
    deliverables: [
      'Kế hoạch chiến lược nội dung đa kênh 3 tháng',
      '2 buổi chụp ảnh sản phẩm + lifestyle lookbook',
      '2 video quảng cáo ngắn (TikTok / Reels / Shorts)',
      'Quản trị fanpage trọn gói 1 tháng (18 bài viết + visual)',
      'Thiết lập & tối ưu chiến dịch quảng cáo thử nghiệm',
      'Báo cáo phân tích số liệu chuyển đổi cuối tháng',
    ],
  },
  {
    id: 'combo-toan-dien',
    number: '03',
    name: 'Toàn Diện',
    badge: 'ĐỐI TÁC CHIẾN LƯỢC TOÀN NĂNG',
    tagline: 'Phòng marketing sáng tạo thuê ngoài dành cho doanh nghiệp muốn chuyển đổi số và tăng trưởng dài hạn.',
    price: 28000000,
    priceFormatted: '28.000.000',
    originalPriceFormatted: '38.000.000',
    savings: 'Tiết kiệm 26%',
    popular: false,
    deliverables: [
      'Toàn bộ quyền lợi của gói Bứt Phá',
      'Bộ nhận diện toàn diện + hệ thống bao bì & ấn phẩm bán hàng',
      '1 video TVC / Brand Film giới thiệu câu chuyện thương hiệu',
      'Quản trị nội dung & tối ưu quảng cáo liên tục 3 tháng',
      'Chuyên viên quản lý dự án riêng (Account Manager 1-1)',
      'Ưu tiên chỉnh sửa và hỗ trợ kỹ thuật truyền thông 24/7',
    ],
  },
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: 1,
    label: 'Tư vấn',
    title: 'Lắng nghe & Khảo sát',
    description: 'Chúng tôi lắng nghe mục tiêu kinh doanh, câu chuyện sản phẩm, chân dung khách hàng và hạn mức ngân sách của bạn. Buổi trao đổi hoàn toàn miễn phí và không có bất kỳ ràng buộc nào.',
    deliverables: [
      'Làm rõ mục tiêu cốt lõi: Tăng nhận diện, mở rộng khách hàng hay thúc đẩy doanh số',
      'Khảo sát hiện trạng kênh truyền thông và hình ảnh của thương hiệu',
      'Đề xuất gói dịch vụ hoặc combo tùy biến vừa vặn với ngân sách thực tế',
    ],
    svgPath: 'M20 28h80v52H56L36 98V80H20ZM40 48h40M40 62h24',
  },
  {
    step: 2,
    label: 'Ý tưởng',
    title: 'Sáng tạo & Lên kế hoạch',
    description: 'Đội ngũ creative đề xuất concept mỹ thuật, kịch bản nội dung và báo giá minh bạch từng đầu mục để bạn trực tiếp duyệt trước khi bắt đầu sản xuất.',
    deliverables: [
      'Xây dựng concept sáng tạo và moodboard thẩm mỹ thống nhất',
      'Kịch bản chi tiết từng khung hình cho buổi chụp và video quảng cáo',
      'Bảng timeline tiến độ rõ ràng từng ngày và báo giá cam kết không phát sinh',
    ],
    svgPath: 'M60 16a28 28 0 0 0-14 52v12h28V68A28 28 0 0 0 60 16ZM48 94h24M52 106h16',
  },
  {
    step: 3,
    label: 'Sản xuất',
    title: 'Thực thi & Tinh chỉnh',
    description: 'Tiến hành chụp ảnh, quay video, thiết kế đồ họa và dựng phim theo đúng concept đã được duyệt. Khách hàng nhận bản xem thử (preview) và góp ý chỉnh sửa theo thỏa thuận.',
    deliverables: [
      'Tổ chức buổi chụp/quay với trang thiết bị 4K và đạo cụ chỉn chu',
      'Dựng bản thảo preview gửi khách hàng duyệt và thu thập phản hồi',
      'Chỉnh sửa màu sắc, âm thanh, typo theo số vòng cam kết',
    ],
    svgPath: 'M18 38h24l8-12h20l8 12h24v62H18ZM60 52a18 18 0 1 0 .01 0Z',
  },
  {
    step: 4,
    label: 'Bàn giao',
    title: 'Chuyển giao & Đồng hành',
    description: 'Bàn giao đầy đủ toàn bộ file gốc có độ phân giải cao, tài liệu hướng dẫn đăng bài và tiếp tục đồng hành hỗ trợ tối ưu chiến dịch sau khi dự án hoàn tất.',
    deliverables: [
      'Bàn giao link Drive chứa toàn bộ file gốc thiết kế, ảnh và video chất lượng cao',
      'Tài liệu cẩm nang hướng dẫn sử dụng nội dung để đạt hiệu quả cao nhất',
      'Hỗ trợ kỹ thuật và tư vấn định hướng phát triển giai đoạn tiếp theo',
    ],
    svgPath: 'M60 14L104 36V84L60 106L16 84V36ZM16 36L60 58L104 36M60 58V106',
  },
];

export const PORTFOLIO_CASES: PortfolioItem[] = [
  {
    id: 'case-1',
    client: "L'Aura Artisan Bakery",
    industry: 'F&B · Bánh ngọt & Cà phê thủ công',
    services: ['Bộ nhận diện', 'Chụp ảnh món', 'Video ngắn Reels'],
    growthMetric: '+240%',
    metricLabel: 'Lượt khách ghé quán sau 45 ngày ra mắt',
    description: 'Định hình phong cách ấm áp kiểu Pháp với 35 bức ảnh món sống động và chuỗi video hậu trường làm bánh thu hút hàng trăm ngàn lượt xem trên TikTok.',
    color: '#38bdf8',
  },
  {
    id: 'case-2',
    client: 'CHIC N’ CHIC Studio',
    industry: 'Thời trang thiết kế nữ nội địa',
    services: ['Lookbook Collection', 'Quản trị Fanpage', 'Chạy Ads'],
    growthMetric: '4.8x',
    metricLabel: 'Tỷ lệ hoàn vốn chi phí quảng cáo (ROAS)',
    description: 'Chụp bộ lookbook mùa lễ hội với tone màu hiện đại, tối ưu 18 bài đăng bán hàng và duy trì tệp khách trung thành có tỷ lệ mua lại cao.',
    color: '#818cf8',
  },
  {
    id: 'case-3',
    client: 'Mộc An Botanicals',
    industry: 'Mỹ phẩm thiên nhiên & Chăm sóc cơ thể',
    services: ['Thiết kế bao bì', 'Chụp ảnh sản phẩm', 'Chiến lược nội dung'],
    growthMetric: '15.000+',
    metricLabel: 'Đơn hàng bán lẻ trong chiến dịch đầu tiên',
    description: 'Bộ nhận diện tối giản tôn vinh thành phần thảo mộc bản địa, giúp sản phẩm nổi bật giữa kệ hàng và các sàn thương mại điện tử.',
    color: '#34d399',
  },
  {
    id: 'case-4',
    client: 'Zenith Skin & Spa Clinic',
    industry: 'Chăm sóc da & Trị liệu thẩm mỹ',
    services: ['Brand Film giới thiệu', 'Chạy quảng cáo Meta', 'Content'],
    growthMetric: '+185%',
    metricLabel: 'Số lượt đặt lịch tư vấn điều trị mới',
    description: 'Sản xuất video trải nghiệm khách hàng chân thực, chuẩn y khoa, giúp gầy dựng lòng tin vững chắc ngay từ lần đầu tiếp cận.',
    color: '#fbbf24',
  },
];

export const AGENCY_FAQS: FaqItem[] = [
  {
    question: 'Doanh nghiệp nhỏ có ngân sách hạn chế có thể hợp tác với KHỞI được không?',
    answer: 'Hoàn toàn được! KHỞI AGENCY được sinh ra chính là để đồng hành cùng các cửa hàng, thương hiệu mới và doanh nghiệp nhỏ. Bạn có thể bắt đầu từ một dịch vụ lẻ chỉ từ 1.800.000 đ hoặc tùy biến combo theo khả năng tài chính hiện tại mà không sợ bị ép chi phí.',
  },
  {
    question: 'Thời gian hoàn thành một dự án thường mất bao lâu?',
    answer: 'Tùy theo phạm vi công việc: Buổi chụp ảnh thường hoàn thành và trả ảnh đã chỉnh sửa trong 3 - 5 ngày làm việc; Video ngắn mất 4 - 6 ngày; Gói nhận diện thương hiệu mất khoảng 7 - 10 ngày; và Gói Combo tổng thể thường triển khai từ 10 - 20 ngày theo hợp đồng thỏa thuận.',
  },
  {
    question: 'Tôi có được quyền chỉnh sửa sau khi xem bản thảo (preview) không?',
    answer: 'Có! Mỗi gói dịch vụ của KHỞI đều có cam kết số vòng chỉnh sửa cụ thể (thường từ 2 - 3 vòng chi tiết) để đảm bảo thành phẩm cuối cùng chuẩn xác đúng với kỳ vọng và phong cách thương hiệu của bạn trước khi đóng gói.',
  },
  {
    question: 'Tôi có sở hữu toàn bộ file gốc và bản quyền sau khi thanh toán không?',
    answer: '100% thuộc về bạn! Sau khi hoàn tất nghiệm thu và thanh toán, KHỞI sẽ bàn giao toàn bộ file thiết kế vector gốc (AI, PSD, PDF) và hình ảnh/video chất lượng cao nguyên bản qua link lưu trữ an toàn trọn đời.',
  },
  {
    question: 'Quy trình ký hợp đồng và thanh toán tại KHỞI diễn ra thế nào?',
    answer: 'Quy trình thanh toán minh bạch chia làm 2 đợt rõ ràng: Đợt 1 đặt cọc 50% giá trị hợp đồng khi chốt concept kế hoạch để khởi động sản xuất; Đợt 2 thanh toán 50% còn lại sau khi khách hàng đã nghiệm thu bản hoàn chỉnh và trước khi nhận trọn bộ file gốc.',
  },
];

export const AGENCY_CONTACT = {
  name: 'KHỞI AGENCY',
  phone: '0909 123 456',
  email: 'contact@khoiagency.vn',
  address: 'Số 18Bis/21 Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh',
  workingHours: 'Thứ 2 - Thứ 7: 08:30 - 18:00',
  zaloUrl: 'https://zalo.me/0909123456',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  tiktokUrl: 'https://tiktok.com',
};

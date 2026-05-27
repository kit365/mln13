import { useState } from 'react';

// --- 1. IMPORT HÌNH ẢNH MINH HỌA MỚI (TƯ LIỆU ĐẠI ÁN) ---
import tranduchauTrialImg from '../picture/tranduchau_trial.png';
import tamexcoTrialImg from '../picture/tamexco_trial.png';
import vinalinesTrialImg from '../picture/vinalines_trial.jpg';
import vanthinhphatTrialImg from '../picture/vanthinhphat_trial.jpg';
import lonongCampaignImg from '../picture/lonong_campaign.png';

// Import logo búa liềm từ đường dẫn cục bộ của bạn
import buaLiemImg from '../utils/picture/bua_liem.webp';

// --- 2. CẤU TRÚC DỮ LIỆU ---
interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  significance?: string;
  image: string;
  layout: 'layout-diagonal' | 'layout-split' | 'layout-center' | 'layout-hero';
  stage: 'prep' | 'boom';
  sourceUrl?: string;
  imageCaption?: string;
  photoSourceUrl?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1950-09',
    year: '1950',
    date: '05/09',
    title: 'Đại Án Cục Quân Nhu',
    location: 'Chiến khu Việt Bắc',
    shortDesc: 'Bản án tử hình nghiêm trị tham nhũng',
    fullDesc: 'Xét xử Cục trưởng Cục Quân nhu Trần Dụ Châu phạm tội tham ô quân nhu, quân trang và nhận hối lộ để sống xa hoa đồi trụy trong khi kháng chiến gian lao. Trước tính chất nghiêm trọng của vụ án, Chủ tịch Hồ Chí Minh thẳng thắn bác đơn xin ân xá, quyết định giữ nghiêm quân pháp kỷ cương để làm trong sạch quân đội.',
    significance: '"Một cái ung nhọt, dẫu đau đớn cũng phải cắt bỏ để cứu cả cơ thể." - Chủ tịch Hồ Chí Minh',
    image: tranduchauTrialImg,
    layout: 'layout-split',
    stage: 'prep',
    sourceUrl: 'https://vksnd.dongthap.gov.vn/chi-tiet-bai-viet/-/asset_publisher/1mOzUrGkrdAE/content/id/15859178',
    imageCaption: 'Nguồn: vksnd.dongthap.gov.vn | Ảnh minh họa được tạo bởi Gemini AI'
  },
  {
    id: '1997-01',
    year: '1997',
    date: '31/01',
    title: 'Đại Án Kinh Tế Tamexco',
    location: 'TP. Hồ Chí Minh',
    shortDesc: 'Cú sốc tham nhũng thời kỳ đầu mở cửa',
    fullDesc: 'Đại án kinh tế lớn đầu tiên nổ ra thời kỳ đầu Đổi mới. Phạm Huy Phước (Giám đốc Tamexco) cùng đồng phạm lừa đảo và đưa hối lộ gây thất thoát hàng trăm tỷ đồng của Nhà nước. Phiên tòa lịch sử khép lại với 4 án tử hình được tuyên, cảnh tỉnh nghiêm khắc về nguy cơ tham nhũng trong kinh tế thị trường sơ khai.',
    significance: '"Đấu tranh chống tham nhũng phải đi liền với việc hoàn thiện chặt chẽ các thể chế pháp luật."',
    image: tamexcoTrialImg,
    layout: 'layout-split',
    stage: 'prep',
    imageCaption: 'Ảnh minh họa được tạo bởi Gemini AI để minh họa'
  },
  {
    id: '2012-12',
    year: '2012',
    date: '14/12',
    title: 'Đại Án Vinalines (Dương Chí Dũng)',
    location: 'Hà Nội',
    shortDesc: 'Sai phạm kinh tế nghiêm trọng tại Vinalines',
    fullDesc: 'Vụ án cố ý làm trái quy định của Nhà nước về quản lý kinh tế gây hậu quả nghiêm trọng và tham ô tài sản xảy ra tại Tổng công ty Hàng hải Việt Nam (Vinalines). Cựu Cục trưởng Cục Hàng hải, cựu Chủ tịch Vinalines Dương Chí Dũng cùng các đồng phạm đã gây thất thoát hơn 360 tỷ đồng của Nhà nước. Phiên tòa xét xét xử nghiêm minh thể hiện kỷ cương pháp luật đối với các doanh nghiệp nhà nước.',
    significance: '"Kỷ cương kinh tế và tài sản công phải được bảo vệ bằng pháp luật nghiêm minh nhất."',
    image: vinalinesTrialImg,
    layout: 'layout-split',
    stage: 'boom',
    sourceUrl: 'https://baochinhphu.vn/vu-vinalines-tu-hinh-duong-chi-dung-mai-van-phuc-102155669.htm',
    photoSourceUrl: 'https://tuoitre.vn/nhung-loi-khai-chan-dong-cua-duong-chi-dung-tai-toa-589099.htm',
    imageCaption: 'Nguồn: baochinhphu.vn | Ảnh: tuoitre.vn'
  },
  {
    id: '2024-03',
    year: '2024',
    date: '05/03',
    title: 'Đại Án Vạn Thịnh Phát (Trương Mỹ Lan)',
    location: 'TP. Hồ Chí Minh',
    shortDesc: 'Đại án kinh tế lớn nhất lịch sử tài chính',
    fullDesc: 'Đại án tham nhũng và thao túng tài chính quy mô lớn nhất lịch sử Việt Nam. Trương Mỹ Lan (Chủ tịch Vạn Thịnh Phát) cùng đồng phạm thao túng Ngân hàng SCB, lừa đảo và tham ô tài sản gây thiệt hại kỷ lục hơn 415.000 tỷ đồng. Phiên tòa sơ thẩm tuyên phạt tử hình đối với Trương Mỹ Lan, thể hiện tính kỷ cương tột cùng và tinh thần không có vùng cấm của pháp luật.',
    significance: '"Kỷ cương luật pháp là nền tảng để bảo vệ sự ổn định của hệ thống tài chính quốc gia."',
    image: vanthinhphatTrialImg,
    layout: 'layout-split',
    stage: 'boom',
    sourceUrl: 'https://baochinhphu.vn/toa-tuyen-tu-hinh-bi-cao-truong-my-lan-102240411172004704.htm',
    photoSourceUrl: 'https://dantri.com.vn/phap-luat/vu-an-epco-minh-phung-chiem-song-o-phien-toa-xet-xu-ba-truong-my-lan-20241118165610511.htm',
    imageCaption: 'Nguồn: baochinhphu.vn | Ảnh: dantri.com.vn'
  },
  {
    id: '2017-12',
    year: '2017',
    date: 'Từ',
    title: 'Chiến Dịch "Lò Nóng" Rực Lửa',
    location: 'Cả nước',
    shortDesc: 'Không có vùng cấm, không có ngoại lệ',
    fullDesc: 'Cuộc chiến chống giặc nội xâm bước sang giai đoạn quyết liệt nhất dưới sự chỉ đạo của Tổng Bí thư Nguyễn Phú Trọng. Hàng loạt đại án tham nhũng lớn như Việt Á, Chuyến bay giải cứu, Vạn Thịnh Phát bị xét xử nghiêm minh, hiện thực hóa xuất sắc tư tưởng Hồ Chí Minh về tính thượng tôn pháp luật.',
    significance: '"Lò nóng lên rồi thì củi tươi vào cũng phải cháy... Không có vùng cấm, không có ngoại lệ, bất kể người đó là ai!" - Tổng Bí thư Nguyễn Phú Trọng',
    image: lonongCampaignImg,
    layout: 'layout-hero',
    stage: 'boom',
    imageCaption: 'Ảnh minh họa được tạo bởi Gemini AI để minh họa'
  }
];

// --- 3. STYLES ---
const TimelineStyles = () => (
  <style>{`
    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
      --hammer-sickle-local: url('${buaLiemImg}');
    }

    /* Đặt chiều cao 100vh cố định trên Desktop để triệt tiêu hoàn toàn lỗi sụp đổ chiều cao */
    .page-wrapper { 
      background-color: var(--bg); 
      color: var(--text); 
      font-family: 'Manrope', sans-serif; 
      height: 100vh; 
      width: 100%; 
      display: flex; 
      flex-direction: column; 
      overflow: hidden; 
      transition: background-color 1s ease; 
    }
    
    /* Màu nền thay đổi theo giai đoạn */
    .page-wrapper.stage-prep { background-color: #E8E4D9; }
    .page-wrapper.stage-boom { background-color: #FDFBF7; }

    .header-section { text-align: center; padding: 2vh 0 1vh 0; flex-shrink: 0; z-index: 200; position: relative; }
    .header-eyebrow { font-family: 'Manrope', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #555; margin-bottom: 2px; font-weight: 700; }
    .header-title { font-family: 'Playfair Display', serif; font-size: 3.25rem; font-weight: 700; color: #1a1a1a; margin: 0; line-height: 1.18; }
    .header-desc { font-family: 'Playfair Display', serif; font-size: 1rem; color: #444; margin-top: 5px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.4; }
    
    .timeline-stages { display: flex; justify-content: center; gap: 40px; margin-top: 2vh; margin-bottom: 1vh; }
    .stage { display: flex; align-items: center; gap: 10px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; transition: all 0.3s ease; opacity: 0.4; }
    .stage.active { opacity: 1; transform: scale(1.1); }
    .stage-dot-prep { width: 12px; height: 12px; background: #C9A227; border-radius: 50%; }
    .stage-dot-boom { width: 12px; height: 12px; background: #8B2323; border-radius: 50%; box-shadow: 0 0 10px #8B2323; }

    .timeline-body { display: flex; flex-grow: 1; height: calc(100% - 100px); position: relative; }
    
    .sidebar { 
      width: 120px; 
      height: 100%; 
      border-right: 1px solid rgba(139, 35, 35, 0.08); 
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      align-items: center; 
      gap: 40px; 
      z-index: 100; 
      background: rgba(244, 241, 234, 0.4); 
      position: relative;
    }
    
    /* Sợi chỉ đỏ chạy dọc làm đường trục thời gian */
    .sidebar::before {
      content: '';
      position: absolute;
      top: 10%;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      background: linear-gradient(to bottom, transparent, rgba(139, 35, 35, 0.15) 15%, rgba(139, 35, 35, 0.15) 85%, transparent);
      z-index: 0;
    }
    
    .stage-label {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      font-family: 'Playfair Display', serif;
      font-size: 0.7rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(139,35,35,0.12);
      white-space: nowrap;
      pointer-events: none;
    }

    .nav-dot { 
      width: 14px; 
      height: 14px; 
      background: #F4F1EA; 
      border: 2px solid #aaa; 
      border-radius: 50%; 
      cursor: pointer; 
      position: relative; 
      z-index: 10;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); 
    }

    .nav-dot.prep { border-color: var(--accent); }
    .nav-dot.boom { border-color: var(--primary); }

    .nav-dot:hover, .nav-dot.active { 
      width: 44px; 
      height: 44px; 
      border-width: 2px; 
      background-position: center; 
      background-size: 70%; 
      background-repeat: no-repeat;
      background-image: var(--hammer-sickle-local); 
      transform: scale(1.1) rotate(12deg); 
    }

    .nav-dot.active.prep { background-color: var(--accent); border-color: #fff; box-shadow: 0 0 18px rgba(201, 162, 39, 0.5); }
    .nav-dot.active.boom { background-color: var(--primary); border-color: #fff; box-shadow: 0 0 18px rgba(139, 35, 35, 0.5); }

    .nav-dot::before { content: attr(data-year); position: absolute; left: 55px; top: 50%; transform: translateY(-50%); font-family: 'Playfair Display', serif; font-weight: 700; opacity: 0; transition: all 0.3s; pointer-events: none; white-space: nowrap; font-size: 1rem; color: #333; }
    .nav-dot:hover::before, .nav-dot.active::before { opacity: 1; left: 50px; }
    
    .main-stage { flex-grow: 1; position: relative; height: 100%; overflow: hidden; perspective: 1200px; }
    
    .slide { 
      position: absolute; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      opacity: 0; 
      visibility: hidden; 
      transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      transform: translateY(30px) scale(0.97); 
    }
    .slide.active { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
    
    .bg-year { 
      position: absolute; 
      font-family: 'Playfair Display', serif; 
      font-size: 25vw; 
      font-weight: 900; 
      color: rgba(139, 35, 35, 0.02); 
      z-index: 1; 
      line-height: 1.12; 
      user-select: none; 
      top: 50%; 
      left: 50%; 
      transform: translate(-50%, -50%) scale(0.92);
      opacity: 0;
      transition: all 1.2s cubic-bezier(0.25, 1, 0.5, 1);
      pointer-events: none;
    }
    .slide.active .bg-year {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .content-wrap { position: relative; z-index: 5; width: 85%; min-height: 85%; }

    /* Nâng cấp chất lượng ảnh sang dạng Album Scrapbook cổ điển vật lý */
    .visual-img { 
      object-fit: cover; 
      box-shadow: 15px 15px 35px rgba(45, 26, 26, 0.15), 0 0 0 1px rgba(139, 35, 35, 0.08); 
      border: 8px solid #fff; 
      outline: 1px dashed var(--accent);
      outline-offset: -5px;
      transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1); 
    }

    .image-wrapper-vintage {
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s;
    }

    .image-caption-vintage {
      font-family: 'Manrope', sans-serif;
      font-size: 0.76rem;
      font-style: italic;
      color: #5d5952;
      text-align: center;
      margin-top: 8px;
      line-height: 1.4;
      font-weight: 500;
      letter-spacing: 0.02em;
    }
    
    .image-caption-vintage a.caption-link {
      color: var(--primary);
      text-decoration: underline;
      font-weight: 600;
      transition: color 0.2s ease;
    }
    
    .image-caption-vintage a.caption-link:hover {
      color: var(--accent);
    }

    /* Thiết lập chuyển động Staggered Entrance cho các khối chữ khi active slide */
    .meta-info { 
      font-family: 'Manrope', sans-serif; 
      font-size: 0.95rem; 
      font-weight: 800; 
      color: #333; 
      letter-spacing: 0.04em; 
      margin-bottom: 1.2vh; 
      text-transform: uppercase; 
      border-bottom: 3px solid var(--primary); 
      display: inline-block; 
      padding-bottom: 4px; 
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.2s;
    }
    
    .title { 
      font-family: 'Playfair Display', serif; 
      font-size: clamp(2rem, 4.2vh, 3.4rem); /* Responsive title to prevent huge wrap vertical overflow */
      color: var(--primary); 
      line-height: 1.18; 
      margin: 0.8vh 0 1.8vh 0; 
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 0.3s;
    }

    .description-box { 
      background: rgba(255, 255, 255, 0.96); 
      backdrop-filter: blur(10px); 
      padding: clamp(16px, 2.5vh, 28px); /* Tightened paddings for better height budgeting */
      border-left: 6px solid var(--primary); 
      box-shadow: 0 20px 50px rgba(45, 26, 26, 0.06); 
      max-width: 600px; 
      overflow-y: auto; 
      max-height: 28vh; /* Reduced from 35vh to fully prevent bottom overflow clipping */
      opacity: 0;
      transform: translateY(25px);
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s;
    }

    /* Custom elegant scrollbar inside text box to ensure it is always scrollable & visible */
    .description-box::-webkit-scrollbar {
      width: 5px;
    }
    .description-box::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.02);
    }
    .description-box::-webkit-scrollbar-thumb {
      background: rgba(139, 35, 35, 0.25);
      border-radius: 3px;
    }
    .description-box::-webkit-scrollbar-thumb:hover {
      background: rgba(139, 35, 35, 0.45);
    }

    .full-desc { font-size: clamp(0.95rem, 2.2vh, 1.15rem); line-height: 1.6; color: #222; margin-bottom: 1.5vh; text-align: justify; }
    .significance { font-family: 'Playfair Display', serif; font-style: italic; color: var(--primary); font-size: clamp(1rem, 2.4vh, 1.25rem); line-height: 1.4; font-weight: 500; }
    
    .source-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: clamp(0.7rem, 1.8vh, 0.82rem);
      font-weight: 700;
      color: var(--primary);
      text-decoration: none;
      border: 1px solid var(--primary);
      padding: 6px 14px;
      border-radius: 4px;
      background: rgba(139, 35, 35, 0.02);
      transition: all 0.3s ease;
      font-family: 'Manrope', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 1.5vh;
    }
    .source-link-btn:hover {
      background: var(--primary);
      color: #fff !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 35, 35, 0.15);
    }
    
    /* Thiết lập các góc xoay nghiêng nghệ thuật & Transition trễ cho từng Layout */
    .layout-diagonal .visual-img { 
      position: absolute; 
      bottom: 5%; 
      left: 5%; 
      width: 40%; 
      height: auto; 
      z-index: 6; 
      transform: scale(0.95) rotate(-2.5deg); 
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s;
    }
    
    .layout-diagonal .text-group { position: absolute; top: 2%; right: 5%; width: 50%; text-align: right; } /* Pushed up to top 2% */
    .layout-diagonal .description-box { margin-left: auto; border-left: none; border-right: 6px solid var(--primary); }

    .layout-split .image-wrapper-vintage { 
      position: absolute; 
      top: 0%; 
      right: 0%; 
      width: 48%; 
      height: 95%; 
      z-index: 4; 
      transform: scale(0.95) rotate(2deg);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .layout-split .image-wrapper-vintage .visual-img {
      width: 100%;
      height: calc(100% - 32px);
      object-fit: cover;
    }
    
    .layout-split .text-group { position: absolute; top: 6%; left: 5%; width: 44%; z-index: 6; } /* Pushed up to top 6% */

    .layout-center .content-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 1.5vh; }
    
    .layout-center .visual-img { 
      max-width: 60%; 
      max-height: 28vh; /* Reduced max-height to leave space for text description */
      flex-shrink: 0; 
      transform: scale(0.95) rotate(-1deg);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s;
    }
    
    .layout-center .text-group { max-width: 800px; display: flex; flex-direction: column; align-items: center; }
    .layout-center .description-box { margin: 0 auto; text-align: left; max-height: 25vh; }
    .layout-center .title { font-size: clamp(1.8rem, 4vh, 3rem); margin: 0.5vh 0 1.5vh 0; }
    .layout-center .meta-info { margin-bottom: 0.5vh; }

    .layout-hero .visual-img { position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.3; z-index: 0; filter: grayscale(100%); }
    .layout-hero .content-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; width: 100%; height: 100%; position: relative; }
    .layout-hero .content-wrap::before { content: ''; position: absolute; inset: 0; background: rgba(244, 241, 234, 0.8); z-index: 1; }
    
    .layout-hero .text-group { 
      position: relative; 
      z-index: 2; 
      max-width: 800px; 
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2vh;
    }
    
    .layout-hero .title { 
      font-size: clamp(2.2rem, 5.5vh, 4rem); 
      font-weight: 900; 
      background: linear-gradient(135deg, #8B2323, #C9A227); 
      -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent; 
      border: none; 
      padding: 0;
      margin: 0;
      line-height: 1.15;
    }

    .layout-hero .description-box {
      margin: 0 auto;
      text-align: left;
    }

    .layout-hero .hero-caption {
      position: absolute;
      bottom: 2.5vh;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.75rem;
      font-style: italic;
      color: rgba(0, 0, 0, 0.4);
      z-index: 10;
      margin: 0;
      white-space: nowrap;
    }

    /* RÚT KINH NGHIỆM: Quy tắc Active chống lỗi hiển thị tuyệt đối với mức độ ưu tiên cao nhất */
    .slide.active .visual-img {
      opacity: 1 !important;
    }
    .slide.active .image-wrapper-vintage {
      opacity: 1 !important;
    }
    .slide.active.layout-diagonal .visual-img {
      transform: scale(1) rotate(-1.5deg) !important;
    }
    .slide.active.layout-split .image-wrapper-vintage {
      transform: scale(1) rotate(0.8deg) !important;
    }
    .slide.active.layout-center .visual-img {
      transform: scale(1) rotate(-0.5deg) !important;
    }
    .slide.active.layout-diagonal .visual-img:hover {
      transform: scale(1.03) rotate(1.2deg) !important;
    }
    .slide.active.layout-split .image-wrapper-vintage:hover {
      transform: scale(1.03) rotate(-1.2deg) !important;
    }
    .slide.active.layout-center .visual-img:hover {
      transform: scale(1.03) rotate(1.2deg) !important;
    }

    .slide.active .meta-info {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .slide.active .title {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    .slide.active .description-box {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    @media (max-width: 768px) {
      .page-wrapper { min-height: 100vh; height: auto; overflow: visible; padding-bottom: 56px; }
      .header-section { padding: 56px 20px 24px; }
      .header-title { font-size: 2.4rem; line-height: 1.2; }
      .sidebar { display: none; }
      .timeline-body { display: block; height: auto; }
      .main-stage { height: auto; overflow: visible; perspective: none; }
      .slide { display: none; position: relative; height: auto; min-height: 0; padding: 0 18px; transform: none; }
      .slide.active { display: block; transform: none; }
      .bg-year { font-size: 8rem; top: 8px; left: auto; right: 16px; transform: none; }
      .content-wrap { width: 100%; min-height: 0; display: flex; flex-direction: column; gap: 22px; }
      
      .image-wrapper-vintage,
      .layout-split .image-wrapper-vintage {
        position: relative;
        inset: auto;
        width: 100%;
        max-width: none;
        height: auto;
        transform: none !important;
        opacity: 1 !important;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 12px;
      }
      
      .image-wrapper-vintage .visual-img,
      .layout-split .image-wrapper-vintage .visual-img {
        width: 100%;
        height: auto;
        max-height: 320px;
        transform: none !important;
        opacity: 1 !important;
      }

      .visual-img,
      .layout-diagonal .visual-img,
      .layout-split .visual-img,
      .layout-center .visual-img,
      .layout-hero .visual-img {
        position: relative;
        inset: auto;
        width: 100%;
        max-width: none;
        height: auto;
        max-height: 320px;
        transform: none;
        opacity: 1 !important;
        filter: none;
      }
      
      .layout-hero .hero-caption {
        position: relative;
        bottom: auto;
        right: auto;
        text-align: center;
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.5);
      }

      .text-group,
      .layout-diagonal .text-group,
      .layout-split .text-group,
      .layout-center .text-group,
      .layout-hero .text-group {
        position: relative;
        inset: auto;
        width: 100%;
        max-width: none;
        text-align: left;
        align-items: flex-start;
      }
      .meta-info { font-size: 0.86rem; line-height: 1.45; }
      .title,
      .layout-center .title,
      .layout-hero .title {
        font-size: 2.35rem;
        line-height: 1.22;
      }
      .description-box,
      .layout-diagonal .description-box,
      .layout-center .description-box {
        max-width: none;
        max-height: none;
        padding: 22px;
        border-left: 5px solid var(--primary);
        border-right: none;
      }
      .full-desc { font-size: 1rem; line-height: 1.7; text-align: left; }
    }
  `}</style>
);

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentEvent = timelineEvents[activeIndex];

  return (
    <>
      <TimelineStyles />
      <div id="lich-su" className={`page-wrapper stage-${currentEvent.stage}`}>
        <div className="header-section">
          <div className="header-eyebrow">Hành Trình Lịch Sử</div>
          <h2 className="header-title">Quyết Tâm Diệt "Giặc Nội Xâm"</h2>
        </div>

        <div className="timeline-body">
          <div className="sidebar">
            <div className="stage-label">GIAI ĐOẠN {currentEvent.stage === 'prep' ? 'NHẬN DIỆN' : 'KỶ CƯƠNG'}</div>
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`nav-dot ${event.stage} ${index === activeIndex ? 'active' : ''}`}
                data-year={event.year}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="main-stage">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`slide ${event.layout} ${index === activeIndex ? 'active' : ''}`}>
                <div className="bg-year">{event.year}</div>
                <div className="content-wrap">
                  {event.layout === 'layout-hero' ? (
                    <>
                      <img src={event.image} className="visual-img" alt={event.title} />
                      {event.imageCaption && (
                        <div className="image-caption-vintage hero-caption">
                          {event.imageCaption}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="image-wrapper-vintage">
                      <img src={event.image} className="visual-img" alt={event.title} />
                      {event.imageCaption && (
                        <div className="image-caption-vintage">
                          {event.sourceUrl ? (
                            <>
                              Nguồn tài liệu: <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="caption-link">{new URL(event.sourceUrl).hostname}</a>
                              {event.photoSourceUrl ? (
                                <>
                                  {' '} | Nguồn ảnh: <a href={event.photoSourceUrl} target="_blank" rel="noopener noreferrer" className="caption-link">{new URL(event.photoSourceUrl).hostname}</a>
                                </>
                              ) : (
                                event.id === '1950-09' && ' | Ảnh minh họa được tạo bởi Gemini AI'
                              )}
                            </>
                          ) : (
                            event.imageCaption
                          )}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="text-group">
                    <div className="meta-info" style={{ borderColor: event.stage === 'prep' ? 'var(--accent)' : 'var(--primary)' }}>
                      {event.date} {event.year} {event.location && `| ${event.location}`}
                    </div>
                    <h2 className="title" style={{ color: event.stage === 'prep' ? '#1A1A1A' : 'var(--primary)' }}>{event.title}</h2>
                    <div className="description-box" style={{ borderLeftColor: event.stage === 'prep' ? 'var(--accent)' : 'var(--primary)' }}>
                      <p className="full-desc">{event.fullDesc}</p>
                      {event.significance && <p className="significance">{event.significance}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

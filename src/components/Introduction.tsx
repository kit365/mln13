import { Star } from 'lucide-react';
// Import ảnh từ đường dẫn của bạn
import tuongDaiImg from '../picture/intropic.png';

// --- STYLES ---
const IntroStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .intro-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      overflow: hidden;
      background-image: 
        radial-gradient(#d1d1d1 1px, transparent 1px),
        linear-gradient(to bottom, rgba(244, 241, 234, 1), rgba(244, 241, 234, 0.8));
      background-size: 30px 30px, cover;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    .bg-number-decor {
      position: absolute;
      top: 5%;
      right: -5%;
      font-family: 'Playfair Display', serif;
      font-size: 30rem;
      font-weight: 900;
      color: rgba(139, 35, 35, 0.03);
      line-height: 1.12;
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }

    .portrait-frame {
      position: relative;
      padding: 20px;
      background: #fff;
      border: 1px solid rgba(139, 35, 35, 0.1);
      box-shadow: 30px 30px 0px rgba(139, 35, 35, 0.08); 
      width: 100%;
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .portrait-frame::before {
      content: '';
      position: absolute;
      inset: 8px;
      border: 3px solid var(--primary);
      z-index: 10;
      pointer-events: none;
    }
    
    .intro-text {
      font-family: 'Manrope', sans-serif;
      font-size: 1.15rem;
      line-height: 1.9;
      color: #333;
      text-align: justify;
    }

    .drop-cap {
      float: left;
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      line-height: 0.9;
      font-weight: 700;
      color: var(--primary);
      padding-right: 0.9rem;
      padding-top: 0.45rem;
    }

    .highlight-text {
      color: var(--primary);
      font-weight: 600;
      background: linear-gradient(to bottom, transparent 70%, rgba(201, 162, 39, 0.2) 30%);
    }

    .signature-area {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .signature-font {
      font-family: 'Great Vibes', cursive;
      font-size: 3.5rem;
      color: var(--primary);
      transform: rotate(-3deg);
      opacity: 0.9;
    }

    .quote-card-interactive {
      position: relative;
      text-decoration: none;
      display: block;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: 0 8px 8px 0;
    }
    
    .quote-card-interactive:hover {
      background: rgba(201, 162, 39, 0.06);
      border-left-color: var(--accent) !important;
      transform: translateX(6px);
    }
    
    .quote-tooltip {
      position: absolute;
      left: 2rem;
      bottom: 105%;
      background: #2D1A1A;
      border: 1px solid rgba(201, 162, 39, 0.4);
      color: #fff;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 0.8rem;
      line-height: 1.45;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
      z-index: 50;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
      width: max-content;
      max-width: 340px;
    }
    
    .quote-card-interactive:hover .quote-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateY(-8px);
    }

    @media (max-width: 640px) {
      .intro-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }

      .intro-text {
        font-size: 1rem;
        line-height: 1.8;
        text-align: left;
      }

      .drop-cap {
        font-size: 4rem;
        line-height: 0.95;
        padding-right: 0.65rem;
      }
    }
  `}</style>
);

export function Introduction() {
  return (
    <>
      <IntroStyles />
      <section id="gioi-thieu" className="intro-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-28">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="w-20 h-px bg-[#C9A227]"></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#8B2323]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Đặt Vấn Đề
              </span>
              <div className="w-20 h-px bg-[#C9A227]"></div>
            </div>
            <h2 className="text-4xl leading-[1.18] sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Giặc Ở Trong Lòng
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* CỘT ẢNH: Sử dụng ảnh tuongDaiImg bạn đã cung cấp */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="portrait-frame">
                <img
                  src={tuongDaiImg}
                  alt="Tượng đài Chủ tịch Hồ Chí Minh"
                  className="w-full h-auto object-cover grayscale sepia-[0.1] contrast-110 aspect-[2/3] block shadow-inner"
                />
              </div>
              <div className="text-center mt-3 text-xs italic text-gray-500 font-medium">
                Ảnh minh họa được tạo bởi Gemini AI
              </div>

              <div className="mt-10 text-center">
                <div className="flex items-center justify-center gap-3 text-[#C9A227] mb-3">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs tracking-[0.4em] uppercase text-[#8B2323] font-black opacity-60">
                  Tư Tưởng Cốt Lõi
                </span>
              </div>
            </div>

            {/* CỘT TEXT */}
            <div className="lg:col-span-7 space-y-10 pt-4">
              <div className="intro-text">
                <span className="drop-cap">T</span>
                rong tiến trình kiến thiết quốc gia, Chủ tịch Hồ Chí Minh luôn trăn trở về những nguy cơ làm suy yếu chế độ từ bên trong. Người sớm nhận diện tham nhũng không chỉ là hành vi tư lợi cá nhân đơn thuần, mà chính là một thứ <span className="highlight-text">"giặc nội xâm"</span> vô cùng xảo quyệt và nguy hiểm, bắt nguồn sâu xa từ chủ nghĩa cá nhân.
              </div>

              <a
                href="https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/phong-chong-tham-o-lang-phi-theo-mach-nguon-tu-tuong-ho-chi-minh-7250"
                target="_blank"
                rel="noopener noreferrer"
                className="quote-card-interactive intro-text border-l-4 border-[#C9A227]/30 pl-8 py-3"
              >
                <span className="italic text-[#8B2323] font-semibold block">
                  "Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ. Nó là kẻ thù khá nguy hiểm, vì nó không mang gươm mang súng, mà nó nằm trong các tổ chức của ta, để làm hỏng công việc của ta... Nó là một thứ 'giặc ở trong lòng' - giặc nội xâm."
                </span>
                
                {/* Custom Tooltip */}
                <div className="quote-tooltip">
                  <div style={{ color: '#C9A227', fontWeight: 800, fontSize: '0.85rem', marginBottom: 4 }}>📖 NGUỒN TRÍCH DẪN CHÍNH THỨC:</div>
                  <div style={{ color: '#E5E5E5', fontWeight: 500, marginBottom: 6 }}>Tác phẩm "Thực hành tiết kiệm, chống tham ô, lãng phí, chống bệnh quan liêu" (Tháng 5/1952)</div>
                  <div style={{ color: '#C9A227', fontSize: '0.72rem', fontStyle: 'italic', fontWeight: 600 }}>🌐 Nhấn để xem tư liệu tại Trang thông tin điện tử Hồ Chí Minh ↗</div>
                </div>
              </a>

              <div className="intro-text">
                Nhìn lại lịch sử cách mạng nước ta, cuộc chiến chống giặc nội xâm luôn song hành cùng cuộc chiến chống ngoại xâm. Đấu tranh chống tham nhũng, lãng phí và bệnh quan liêu là điều kiện <span className="text-[#1A1A1A] font-bold italic">Tất Yếu</span> để giữ gìn sự trong sạch, củng cố niềm tin tuyệt đối của nhân dân đối với Đảng và Chính phủ.
              </div>

              <div className="signature-area">
                <div className="w-32 h-px bg-[#8B2323] mb-4 opacity-30"></div>
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2 font-bold">Người lãnh đạo tối cao</p>
                <div className="signature-font">Hồ Chí Minh</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

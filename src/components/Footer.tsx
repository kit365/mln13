import { Star, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'; // Thay Heart bằng Star cho phù hợp ngữ cảnh

// --- STYLES ---
const FooterStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&display=swap');

    :root {
      --footer-bg: #8B2323; /* Đỏ huyết dụ */
      --footer-text: #F4F1EA; /* Màu kem sáng */
      --footer-accent: #C9A227; /* Vàng kim */
    }

    .custom-footer {
      background-color: var(--footer-bg);
      color: var(--footer-text);
      font-family: 'Manrope', sans-serif;
      overflow: hidden;
      border-top: 8px solid var(--footer-accent); /* Viền vàng trên cùng */
      position: relative;
    }

    /* Pattern trang trí nền mờ */
    .footer-pattern {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(201, 162, 39, 0.2) 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.1;
      pointer-events: none;
    }

    .footer-brand-title {
      font-family: 'Playfair Display', serif;
      letter-spacing: 1px;
    }

    .footer-col-title {
      font-family: 'Playfair Display', serif;
      color: var(--footer-accent);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.1rem;
      font-weight: 700;
      padding-bottom: 10px;
      border-bottom: 1px dashed rgba(201, 162, 39, 0.3);
      display: inline-block;
      margin-bottom: 1.5rem;
    }

    .footer-link {
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(244, 241, 234, 0.8);
      text-decoration: none;
    }

    .footer-link:hover {
      color: var(--footer-accent);
      transform: translateX(5px);
    }

    .icon-box {
      background: rgba(201, 162, 39, 0.1);
      border: 1px solid var(--footer-accent);
      color: var(--footer-accent);
    }

    /* Guaranteed Custom Layout Styles */
    .footer-container {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding: 4rem 1.5rem 1.5rem 1.5rem;
      position: relative;
      z-index: 10;
    }

    @media (min-width: 640px) {
      .footer-container {
        padding: 4rem 2rem 1.5rem 2rem;
      }
    }

    @media (min-width: 1024px) {
      .footer-container {
        padding: 4rem 3rem 1.5rem 3rem;
      }
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    @media (min-width: 640px) {
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .footer-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .footer-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }

    .footer-bottom {
      border-top: 1px solid rgba(201, 162, 39, 0.3);
      padding-top: 2rem;
      margin-top: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: rgba(244, 241, 234, 0.6);
    }

    @media (min-width: 768px) {
      .footer-bottom-content {
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .footer-bottom-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-bottom-link {
      color: rgba(244, 241, 234, 0.6);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-bottom-link:hover {
      color: var(--footer-accent);
    }
  `}</style>
);

export function Footer() {
  return (
    <>
      <FooterStyles />
      <footer className="custom-footer">
        <div className="footer-pattern"></div>

        <div className="footer-container">
          <div className="footer-grid">

            {/* Cột 1: Brand & Intro */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-box w-12 h-12 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h3 className="footer-brand-title text-2xl font-bold text-white">
                  Thanh Liêm & Chính Trực
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed font-light text-sm text-justify">
                Trang thông tin học tập, phân tích và làm rõ các khía cạnh về phòng, chống tham nhũng. Giáo dục đạo đức cách mạng, nâng cao nhận thức và trách nhiệm của công dân theo nội dung Tiết 16 và Tiết 17.
              </p>
            </div>

            {/* Cột 2: Liên Kết */}
            <div>
              <h3 className="footer-col-title">Điều Hướng</h3>
              <ul className="footer-list">
                {[
                  { id: 'hero', label: 'Mở Đầu' },
                  { id: 'gioi-thieu', label: 'Đặt Vấn Đề' },
                  { id: 'hau-qua', label: 'Hậu Quả' },
                  { id: 'lich-su', label: 'Lịch Sử (Đại án)' },
                  { id: 'thoi-co', label: 'Trận Tuyến' },
                  { id: 'trach-nhiem', label: 'Trách Nhiệm' },
                  { id: 'ket-luan', label: 'Tổng Kết' }
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="footer-link">
                      <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Tài Nguyên */}
            <div>
              <h3 className="footer-col-title">Tư Liệu</h3>
              <ul className="footer-list">
                {['Tài Liệu Tiết 16', 'Tài Liệu Tiết 17', 'Luật Phòng, Chống Tham Nhũng', 'Phóng Sự Thời Sự'].map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">
                      <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4: Liên Hệ */}
            <div>
              <h3 className="footer-col-title">Liên Hệ</h3>
              <ul className="footer-list">
                <li className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Hồ Chí Minh, Việt Nam</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">lienhe@lichsudang.vn</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">(+84) 1900 1945</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="text-center md:text-left font-light">
                © 2026 Dự án Học tập Lý luận Chính trị. Tự hào truyền thống liêm chính.
              </p>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Chính Sách</a>
                <a href="#" className="footer-bottom-link">Điều Khoản</a>
                <a href="#" className="footer-bottom-link">Bảo Mật</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

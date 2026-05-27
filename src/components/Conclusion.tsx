import React, { useState } from 'react';

export function Conclusion() {
    const [userAnswer, setUserAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userAnswer.trim()) {
            setIsSubmitted(true);
        }
    };

    return (
        <section id="ket-luan" className="conclusion-section">
            {/* Thớ giấy hữu cơ mịn */}
            <div className="conclusion-grain" />

            <div style={{ maxWidth: 950, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                {/* Header Eyebrow */}
                <div className="section-eyebrow">
                    <div className="eyebrow-line"></div>
                    <span className="eyebrow-text">
                        Tổng Kết Bài Học
                    </span>
                    <div className="eyebrow-line"></div>
                </div>

                <h2 className="main-section-title">
                    Kỷ Cương Vững Bền, <span className="tieu-de-do">Liêm Chính</span> Kiến Quốc
                </h2>

                {/* Main Editorial Card (Parchment Paper Plaque) */}
                <div className="conclusion-card">
                    <span className="card-drop-cap">Đ</span>
                    <p className="card-paragraph">
                        ấu tranh phòng, chống tham nhũng, lãng phí không phải là việc giải quyết những sai sót cá nhân đơn thuần, mà chính là <span className="highlight-span">quy luật sinh tồn và phát triển</span> nhằm bảo vệ chế độ dân chủ xã hội chủ nghĩa và xây dựng Nhà nước pháp quyền. Đúng như nội dung bài học từ Tiết 16 đã nhấn mạnh, tham nhũng gây ra những tác hại khôn lường: tàn phá nền kinh tế vĩ mô, gia tăng khoảng cách giàu nghèo trong xã hội, làm suy đồi văn hóa và vi phạm nghiêm trọng đạo đức cách mạng của người cán bộ vì dân.
                    </p>

                    <p className="card-paragraph">
                        Để diệt trừ tận gốc thứ "giặc nội xâm" vô cùng xảo quyệt và nguy hiểm này, tư tưởng Hồ Chí Minh đã chỉ ra ngọn nguồn sức mạnh nằm ở quần chúng. Sức mạnh thanh tra, giám sát tối cao bắt nguồn từ hàng triệu cặp mắt và lỗ tai cảnh giác của nhân dân. Nhân dân chính là ngọn đèn pha rực sáng chiếu rọi khắp nơi, làm cho mọi tệ lạm quyền, tham ô, lãng phí đều không thể nào ẩn nấp được.
                    </p>

                    {/* Classic Quote Block */}
                    <div className="quote-box">
                        <p className="quote-text">
                            "Nếu một người làm quan mà không Liêm, thì cũng như bức tượng gỗ quét sơn vàng, bên ngoài nhìn lộng lẫy nhưng bên trong rỗng tuếch."
                        </p>
                        <div className="quote-author">Chủ tịch Hồ Chí Minh</div>
                    </div>

                    <p className="card-paragraph">
                        Đối chiếu với bài học Tiết 17, <span className="highlight-span">Trách nhiệm của công dân</span> trong xã hội dân chủ không chỉ dừng lại ở việc chấp hành nghiêm chỉnh pháp luật. Mỗi người trẻ, mỗi sinh viên học tập lý luận chính trị cần nhận thức rõ quyền và nghĩa vụ của mình: chủ động phát hiện, báo tin khách quan, trung thực tố giác hành vi vụ lợi, và thực hiện quyền giám sát xã hội trực tiếp hoặc thông qua hoạt động của các *Ban thanh tra nhân dân* tại cơ sở. Liêm chính và trung thực phải được rèn luyện ngay từ giảng đường học đường.
                    </p>
                </div>

                {/* Gen Z Interactive Board (Slate Graphite Theme) */}
                <div className="interactive-board">
                    <h3 className="board-title">
                        Góc Nhìn Liêm Chính
                    </h3>
                    <p className="board-subtitle">
                        Từ bài học lý luận về Dân chủ và Nhà nước pháp quyền xã hội chủ nghĩa, là một sinh viên học tập học phần Chủ nghĩa xã hội khoa học, hành động thực tế nhỏ nhất bạn sẽ thực hiện để xây dựng tính Liêm Chính và trung thực học thuật ngay hôm nay là gì?
                    </p>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '650px', margin: '0 auto' }}>
                        <textarea
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Nhập suy nghĩ hoặc hành động thực tế của bạn tại giảng đường (ví dụ: trung thực trong thi cử, bảo vệ lẽ phải, đấu tranh với gian lận...)..."
                            disabled={isSubmitted}
                            className="feedback-textarea"
                        />

                        {!isSubmitted ? (
                            <button
                                type="submit"
                                className="btn-submit-gold"
                            >
                                Gửi Phản Hồi
                            </button>
                        ) : (
                            <div className="success-container">
                                <h4 className="success-title">
                                    CẢM ƠN BẠN ĐÃ CHIA SẺ LÝ TƯỞNG!
                                </h4>
                                <p className="success-quote">
                                    "Xây dựng liêm chính bắt đầu từ những việc làm trung thực nhỏ nhất mỗi ngày."
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* Custom Premium Stylesheet */}
            <style>{`
                :root {
                    --primary-red: #8B1E2F;     /* Rich premium crimson */
                    --accent-gold: #C5A059;     /* Curated antique bronze gold */
                    --dark-slate: #13151A;      /* Pure matte slate charcoal */
                    --bg-cream: #FDFBF7;
                    --bg-parchment: #F5F0E8;
                }

                .conclusion-section {
                    padding: 140px 24px;
                    background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-parchment) 100%);
                    position: relative;
                    overflow: hidden;
                    font-family: 'Manrope', sans-serif;
                }

                .conclusion-grain {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 drain=%220.08%22%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: overlay;
                    opacity: 0.35;
                }

                /* Section Header */
                .section-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .eyebrow-line {
                    width: 50px;
                    height: 1px;
                    background-color: var(--accent-gold);
                }

                .eyebrow-text {
                    font-size: 0.75rem;
                    letter-spacing: 0.28em;
                    text-transform: uppercase;
                    color: var(--primary-red);
                    font-weight: 700;
                    font-family: 'Playfair Display', serif;
                }

                .main-section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.3rem, 5vw, 3.4rem);
                    color: #1A1A1A;
                    margin-bottom: 60px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.15;
                }

                .tieu-de-do {
                    color: var(--primary-red);
                }

                /* Editorial Plaque Card */
                .conclusion-card {
                    background: linear-gradient(135deg, #FAF8F2 0%, #F5EFE4 100%);
                    border: 1px solid rgba(197, 160, 89, 0.3);
                    outline: 1px solid rgba(197, 160, 89, 0.1);
                    outline-offset: -8px;
                    border-radius: 4px;
                    padding: 60px 50px;
                    text-align: left;
                    position: relative;
                    margin-bottom: 70px;
                    box-shadow: 0 25px 60px rgba(45, 26, 26, 0.07);
                }

                .card-drop-cap {
                    float: left;
                    font-family: 'Playfair Display', serif;
                    font-size: 5rem;
                    line-height: 0.85;
                    font-weight: 900;
                    color: var(--primary-red);
                    padding-right: 0.9rem;
                    padding-top: 0.45rem;
                }

                .card-paragraph {
                    font-family: 'Lora', serif;
                    font-size: 1.15rem;
                    line-height: 1.85;
                    color: #2A2A2A;
                    margin-bottom: 24px;
                    text-align: justify;
                }

                .highlight-span {
                    background: linear-gradient(to bottom, transparent 65%, rgba(197, 160, 89, 0.18) 35%);
                    color: var(--primary-red);
                    font-weight: 700;
                    padding-inline: 4px;
                }

                /* Elegant Quote Box */
                .quote-box {
                    padding: 24px 30px;
                    background: rgba(255, 255, 255, 0.45);
                    border-left: 3px solid var(--primary-red);
                    border-radius: 0 6px 6px 0;
                    box-shadow: inset 1px 1px 5px rgba(45, 26, 26, 0.03);
                    margin: 35px 0;
                }

                .quote-text {
                    font-style: italic;
                    font-size: 1.15rem;
                    color: #1A1A1A;
                    margin: 0;
                    font-family: 'Playfair Display', serif;
                    line-height: 1.65;
                    font-weight: 500;
                }

                .quote-author {
                    font-family: 'Manrope', sans-serif;
                    font-size: 0.7rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    color: var(--accent-gold);
                    margin-top: 10px;
                }

                /* Interactive Board (Slate Theme) */
                .interactive-board {
                    background: var(--dark-slate);
                    border: 1px solid rgba(197, 160, 89, 0.25);
                    outline: 1px solid rgba(197, 160, 89, 0.08);
                    outline-offset: -8px;
                    padding: 60px 40px;
                    border-radius: 4px;
                    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.45);
                    text-align: center;
                    color: white;
                    position: relative;
                }

                .board-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.3rem;
                    color: var(--accent-gold);
                    margin-bottom: 20px;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }

                .board-subtitle {
                    font-family: 'Lora', serif;
                    font-size: 1.1rem;
                    color: #A0A5B5;
                    margin-bottom: 35px;
                    line-height: 1.7;
                    font-style: italic;
                }

                .feedback-textarea {
                    width: 100%;
                    min-height: 130px;
                    padding: 20px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(197, 160, 89, 0.2);
                    color: white;
                    font-size: 1rem;
                    font-family: 'Manrope', sans-serif;
                    resize: none;
                    margin-bottom: 24px;
                    outline: none;
                    transition: all 0.3s ease;
                }

                .feedback-textarea:focus {
                    border-color: var(--accent-gold);
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 10px rgba(197, 160, 89, 0.1);
                }

                .btn-submit-gold {
                    padding: 16px 45px;
                    background: var(--primary-red);
                    color: white;
                    border: none;
                    border-radius: 2px;
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 25px rgba(139, 30, 47, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .btn-submit-gold:hover {
                    background: #A02638;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(139, 30, 47, 0.45);
                }

                .success-container {
                    padding: 35px;
                    background: rgba(197, 160, 89, 0.05);
                    border: 1px dashed var(--accent-gold);
                    border-radius: 4px;
                    animation: fadeIn 0.6s ease-out;
                }

                .success-title {
                    color: var(--accent-gold);
                    font-size: 1.15rem;
                    margin-bottom: 12px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                }

                .success-quote {
                    color: #E2E6EE;
                    font-size: 1.5rem;
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    line-height: 1.4;
                    font-style: italic;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .conclusion-card {
                        padding: 40px 24px;
                    }
                    .interactive-board {
                        padding: 40px 24px;
                    }
                    .card-paragraph {
                        font-size: 1.05rem;
                    }
                }
            `}</style>
        </section>
    );
}

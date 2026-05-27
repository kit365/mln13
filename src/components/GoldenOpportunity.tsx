import { useState, useEffect } from 'react';

export function GoldenOpportunity() {

    // Bộ đếm ngược thời gian còn lại trong ngày để rèn chữ LIÊM (Tự soi chiếu)
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            
            const diff = endOfDay.getTime() - now.getTime();
            if (diff <= 0) {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                return;
            }
            
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            setTimeLeft({ hours: h, minutes: m, seconds: s });
        };
        
        updateTimer();
        const timer = setInterval(updateTimer, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <section id="thoi-co" className="gold-opp-section">
            {/* Thanh chỉ vàng mỏng tinh tế ở đầu section */}
            <div className="glow-thread" />
            
            {/* Thớ giấy hữu cơ cổ điển */}
            <div className="historical-grain" />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <div className="header-badge">
                        <span className="badge-text">
                            TRẬN TUYẾN KHÔNG TIẾNG SÚNG
                        </span>
                    </div>
                    <h2 className="section-title">
                        Quyết Liệt Khẩn Cấp
                    </h2>
                    <div className="title-divider">
                        <div className="title-divider-line" />
                        <span className="title-divider-emblem">✦</span>
                        <div className="title-divider-line" />
                    </div>
                    <p className="section-subtitle">
                        Đấu tranh chống "giặc nội xâm" là nhiệm vụ hệ trọng, cần kíp như cuộc chiến chống ngoại xâm. Mỗi ngày trôi qua đòi hỏi người cách mạng phải tự soi, tự sửa liên tục.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="layout-grid">
                    {/* Left Column: Muted Editorial Live Reflection Card */}
                    <div className="timer-editorial-card">
                        <div className="emblem-container">
                            <span className="card-emblem">✦ ✦ ✦</span>
                        </div>

                        {/* Muted Elegant Counters */}
                        <div className="capsule-container">
                            <div className="time-capsule">
                                <div className="capsule-number">{formatNumber(timeLeft.hours)}</div>
                                <span className="capsule-label">Giờ</span>
                            </div>
                            <div className="time-colon">✦</div>
                            <div className="time-capsule">
                                <div className="capsule-number gold-num">{formatNumber(timeLeft.minutes)}</div>
                                <span className="capsule-label">Phút</span>
                            </div>
                            <div className="time-colon">✦</div>
                            <div className="time-capsule">
                                <div className="capsule-number gold-num">{formatNumber(timeLeft.seconds)}</div>
                                <span className="capsule-label">Giây</span>
                            </div>
                        </div>

                        <div className="reflection-title">
                            Thời gian tự soi chiếu trong ngày
                        </div>

                        <div className="reflection-blockquote">
                            <p className="blockquote-text">
                                "Một dân tộc biết cần, kiệm, liêm, chính là một dân tộc văn minh, tiến bộ."
                            </p>
                            <div className="blockquote-author">Chủ tịch Hồ Chí Minh</div>
                        </div>
                    </div>

                    {/* Right Column: Premium Editorial Cards with Roman Numerals */}
                    <div className="pillars-container">
                        {[
                            {
                                numeral: 'I',
                                time: 'Đức tính hàng đầu',
                                title: 'Xây dựng "Cần, Kiệm, Liêm, Chính"',
                                event: 'Cán bộ cách mạng phải thực sự thấm nhuần đạo đức công vụ, giữ mình trong sạch, không tham danh tiếng hay địa vị để hết lòng phụng sự nhân dân.',
                                color: 'var(--accent-gold)'
                            },
                            {
                                numeral: 'II',
                                time: 'Cội rễ của tệ nạn',
                                title: 'Chống "Chủ nghĩa cá nhân"',
                                event: 'Kiên quyết chống lại sự ích kỷ, cục bộ - nguồn gốc sâu xa đẻ ra các tệ quan liêu, tham ô, lãng phí và lạm quyền hại nước hại dân.',
                                color: 'var(--primary-red)'
                            },
                            {
                                numeral: 'III',
                                time: 'Tai mắt quần chúng',
                                title: 'Sức mạnh giám sát của nhân dân',
                                event: 'Đặt hàng triệu cặp mắt, lỗ tai cảnh giác của quần chúng nhân dân làm ngọn đèn pha rực sáng khắp nơi, khiến tệ tham nhũng không thể ẩn nấp.',
                                color: 'var(--accent-gold)'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="pillar-editorial-card">
                                {/* Glowing Left Line Indicator */}
                                <div className="card-accent-bar" style={{ background: item.color }} />
                                
                                {/* Elegant Serif Roman Numeral */}
                                <div className="numeral-wrap">
                                    <span className="roman-num" style={{ color: item.color }}>
                                        {item.numeral}
                                    </span>
                                </div>
                                
                                <div className="pillar-text-group">
                                    <span className="pillar-badge-eyebrow" style={{ color: item.color }}>
                                        {item.time}
                                    </span>
                                    <h4 className="pillar-card-title">{item.title}</h4>
                                    <p className="pillar-card-desc">
                                        {item.event}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Premium Editorial Stylesheet */}
            <style>{`
                :root {
                    --primary-red: #8B1E2F;     /* Rich premium crimson */
                    --accent-gold: #C5A059;     /* Curated antique bronze gold */
                    --dark-slate: #111215;      /* Pure matte slate charcoal */
                    --border-subtle: rgba(197, 160, 89, 0.18);
                }

                .gold-opp-section {
                    padding: 140px 24px;
                    background: radial-gradient(circle at 5% 15%, rgba(139, 30, 47, 0.03), transparent 50%), 
                                radial-gradient(circle at 95% 85%, rgba(197, 160, 89, 0.05), transparent 50%), 
                                #F4F1EA; /* Warm aged ivory paper background */
                    color: #1A1A1A;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Manrope', sans-serif;
                }

                .glow-thread {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.25), transparent);
                    opacity: 0.6;
                }

                .historical-grain {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 drain=%220.08%22%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: overlay;
                    opacity: 0.35;
                }

                /* Header Components */
                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    margin-bottom: 20px;
                    padding: 6px 16px;
                    background: rgba(197, 160, 89, 0.05);
                    border: 1px solid rgba(197, 160, 89, 0.25);
                    border-radius: 2px;
                }

                .badge-text {
                    font-size: 0.72rem;
                    letter-spacing: 0.28em;
                    text-transform: uppercase;
                    color: var(--primary-red);
                    font-weight: 700;
                }

                .section-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.3rem, 5.5vw, 3.8rem);
                    margin-bottom: 16px;
                    font-weight: 700;
                    line-height: 1.15;
                    color: #1A1A1A;
                    letter-spacing: -0.01em;
                }

                .title-divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    margin-bottom: 28px;
                }

                .title-divider-line {
                    width: 60px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.4), transparent);
                }

                .title-divider-emblem {
                    font-size: 0.85rem;
                    color: var(--accent-gold);
                    opacity: 0.9;
                }

                .section-subtitle {
                    font-family: 'Lora', serif;
                    font-size: 1.15rem;
                    color: #4A4A4A;
                    max-width: 680px;
                    margin: 0 auto;
                    line-height: 1.75;
                    font-style: italic;
                }

                /* Grid Layout */
                .layout-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                    margin-top: 20px;
                }

                @media (min-width: 992px) {
                    .layout-grid {
                        grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                    }
                }

                /* Editorial Reflection Card (Dark Plaque Contrast) */
                .timer-editorial-card {
                    background: rgba(20, 22, 28, 0.96);
                    border: 1px solid rgba(197, 160, 89, 0.25);
                    outline: 1px solid rgba(197, 160, 89, 0.08);
                    outline-offset: -8px;
                    border-radius: 3px;
                    padding: 55px 40px;
                    text-align: center;
                    box-shadow: 0 30px 60px rgba(45, 26, 26, 0.22);
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: white;
                }

                .emblem-container {
                    margin-bottom: 24px;
                }

                .card-emblem {
                    font-size: 0.8rem;
                    letter-spacing: 0.5em;
                    color: var(--accent-gold);
                    opacity: 0.65;
                }

                /* Concentric Parchment Counters */
                .capsule-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 35px;
                }

                .time-capsule {
                    background: linear-gradient(135deg, #FAF8F2 0%, #F3ECE0 100%);
                    border: 1px solid rgba(197, 160, 89, 0.45);
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
                    border-radius: 3px;
                    padding: 18px 12px;
                    min-width: 92px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }

                .time-capsule::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: var(--accent-gold);
                    opacity: 0.8;
                }

                .capsule-number {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.85rem;
                    font-weight: 900;
                    color: #1A1A1A;
                    line-height: 1.1;
                    text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.9);
                }
                .capsule-number.gold-num {
                    color: var(--primary-red);
                }

                .capsule-label {
                    color: #5C5546;
                    font-size: 0.65rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    margin-top: 8px;
                }

                .time-colon {
                    font-family: 'Playfair Display', serif;
                    font-size: 2rem;
                    font-weight: 700;
                    color: var(--accent-gold);
                    opacity: 0.8;
                    animation: blink 1.2s infinite alternate;
                }

                .reflection-title {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.28em;
                    color: var(--accent-gold);
                    font-weight: 700;
                    margin-bottom: 30px;
                }

                .reflection-blockquote {
                    background: rgba(18, 20, 25, 0.55);
                    border-left: 3px solid var(--primary-red);
                    border-radius: 0 4px 4px 0;
                    padding: 22px 26px;
                    text-align: left;
                    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.25);
                }

                .blockquote-text {
                    font-family: 'Lora', serif;
                    font-size: 1.05rem;
                    color: #CDD2DF;
                    font-style: italic;
                    line-height: 1.65;
                    margin-bottom: 12px;
                }

                .blockquote-author {
                    font-family: 'Playfair Display', serif;
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--accent-gold);
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                /* Right Column: Premium Editorial Cards with Roman Numerals */
                .pillars-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .pillar-editorial-card {
                    background: rgba(255, 255, 255, 0.65);
                    border: 1px solid rgba(197, 160, 89, 0.2);
                    border-radius: 4px;
                    padding: 30px;
                    display: flex;
                    gap: 24px;
                    align-items: flex-start;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    box-shadow: 0 10px 30px rgba(45, 26, 26, 0.05);
                }

                .card-accent-bar {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 2px;
                    opacity: 0;
                    background: var(--accent-gold);
                    transition: all 0.4s ease;
                }

                .pillar-editorial-card:hover {
                    background: #FFFFFF;
                    border-color: rgba(197, 160, 89, 0.45);
                    transform: translateX(8px);
                    box-shadow: 0 20px 45px rgba(45, 26, 26, 0.12);
                }

                .pillar-editorial-card:hover .card-accent-bar {
                    opacity: 0.85;
                    width: 3px;
                }

                /* Elegant Serif Roman Numeral */
                .numeral-wrap {
                    min-width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: all 0.4s;
                }

                .roman-num {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.3rem;
                    font-weight: 700;
                    font-style: italic;
                    line-height: 1;
                    opacity: 0.8;
                    transition: all 0.4s;
                }

                .pillar-editorial-card:hover .roman-num {
                    transform: scale(1.08) rotate(-5deg);
                    opacity: 1;
                }

                .pillar-text-group {
                    display: flex;
                    flex-direction: column;
                }

                .pillar-badge-eyebrow {
                    font-size: 0.72rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.16em;
                    margin-bottom: 6px;
                }

                .pillar-card-title {
                    font-family: 'Playfair Display', serif;
                    color: #1A1A1A;
                    font-weight: 700;
                    font-size: 1.38rem;
                    margin-bottom: 10px;
                    letter-spacing: 0.01em;
                    transition: all 0.3s;
                }

                .pillar-editorial-card:hover .pillar-card-title {
                    color: var(--accent-gold);
                }

                .pillar-card-desc {
                    color: #3A3A3A;
                    font-size: 0.95rem;
                    line-height: 1.65;
                    text-align: justify;
                }

                @keyframes blink {
                    0% { opacity: 0.25; }
                    100% { opacity: 0.9; }
                }
            `}</style>
        </section>
    );
}

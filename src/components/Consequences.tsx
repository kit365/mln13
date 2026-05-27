import { useState } from 'react';
import { ShieldAlert, TrendingDown, Users, Flame, HeartCrack } from 'lucide-react';

interface CardData {
    id: number;
    title: string;
    icon: React.ReactNode;
    content: string;
}

const consequencesData: CardData[] = [
    {
        id: 1,
        title: "Suy yếu Chính trị",
        icon: <ShieldAlert size={32} className="text-[#8B2323]" />,
        content: "Bất kỳ công chức, viên chức hay đảng viên nào tham nhũng đều là hành vi vi phạm Hiến pháp, vi phạm Điều lệ Đảng, đi ngược lại bản chất của chế độ."
    },
    {
        id: 2,
        title: "Tàn phá Kinh tế",
        icon: <TrendingDown size={32} className="text-[#8B2323]" />,
        content: "Tham nhũng làm cản trở, gây khó khăn cho các hoạt động quản lý, kìm hãm sự phát triển sản xuất, kinh doanh ở cả khu vực nhà nước và tư nhân, từ tầm vĩ mô đến vi mô."
    },
    {
        id: 3,
        title: "Đứt gãy Xã hội",
        icon: <Users size={32} className="text-[#8B2323]" />,
        content: "Trực tiếp làm gia tăng khoảng cách giàu - nghèo, khiến trật tự, kỷ cương và an ninh xã hội diễn biến phức tạp. Nó là hòn đá tảng cản trở mục tiêu xây dựng xã hội công bằng, dân chủ, văn minh."
    },
    {
        id: 4,
        title: "Bào mòn Văn hóa",
        icon: <Flame size={32} className="text-[#8B2323]" />,
        content: "Tham nhũng làm suy đồi văn hóa xã hội, dựng lên rào cản ngăn chặn công cuộc cải cách tư pháp và xây dựng Nhà nước pháp quyền."
    },
    {
        id: 5,
        title: "Bất chấp Đạo đức",
        icon: <HeartCrack size={32} className="text-[#8B2323]" />,
        content: "Đây không chỉ là hành vi phạm pháp mà còn là sự bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung. Nó chà đạp lên đạo đức cách mạng của người cán bộ trong một Nhà nước của nhân dân, do nhân dân, vì nhân dân."
    }
];

export function Consequences() {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const toggleCard = (id: number) => {
        setFlippedCards(prev => 
            prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
        );
    };

    return (
        <section id="hau-qua" className="consequences-section">
            <div className="historical-grain" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="w-16 h-px bg-[#C9A227]"></div>
                        <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#8B2323]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            5 Hệ Lụy Tàn Phá Của Tham Nhũng
                        </span>
                        <div className="w-16 h-px bg-[#C9A227]"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
                        Vết Thương Thời Đại
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-[#4A4A4A] italic" style={{ fontFamily: "'Lora', serif", lineHeight: 1.8 }}>
                        Tham nhũng không chỉ tàn phá nền kinh tế, mà còn ăn mòn tận gốc rễ của chế độ, làm đứt gãy niềm tin và đạo đức xã hội. Nhấn vào các thẻ bài dưới đây để lật mở từng hệ lụy cốt lõi.
                    </p>
                </div>

                {/* Grid of Flip Cards */}
                <div className="cards-grid">
                    {consequencesData.map((card, index) => (
                        <div 
                            key={card.id} 
                            className={`flip-card-container ${index > 2 ? 'bottom-row' : ''}`}
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className={`flip-card-inner ${flippedCards.includes(card.id) ? 'is-flipped' : ''}`}>
                                
                                {/* Front of Card (Úp xuống) */}
                                <div className="flip-card-front">
                                    <div className="front-content border-pattern">
                                        <div className="card-number-large">0{card.id}</div>
                                        <div className="card-hint">
                                            <span className="hint-text">Bí Mật</span>
                                            <div className="hint-line"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Back of Card (Lật lên) */}
                                <div className="flip-card-back">
                                    <div className="back-content">
                                        <div className="back-header">
                                            <div className="icon-wrapper">
                                                {card.icon}
                                            </div>
                                            <h3 className="card-title">{card.title}</h3>
                                        </div>
                                        <div className="card-divider" />
                                        <p className="card-description">
                                            {card.content}
                                        </p>
                                        <div className="card-watermark">0{card.id}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .consequences-section {
                    padding: 120px 0;
                    background: radial-gradient(circle at 10% 90%, rgba(139, 35, 35, 0.04), transparent 50%),
                                radial-gradient(circle at 90% 10%, rgba(201, 162, 39, 0.05), transparent 50%),
                                #F9F7F1;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Manrope', sans-serif;
                }

                .historical-grain {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 drain=%220.08%22%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: multiply;
                }

                .cards-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px;
                    max-width: 1250px;
                    margin: 0 auto;
                }

                /* 3D Flip Card Styles */
                .flip-card-container {
                    flex: 0 1 350px;
                    width: 100%;
                    height: 420px;
                    perspective: 1500px;
                    cursor: pointer;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                    transform-style: preserve-3d;
                    border-radius: 8px;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                }

                .flip-card-container:hover .flip-card-inner:not(.is-flipped) {
                    transform: translateY(-8px) rotateX(2deg);
                    box-shadow: 0 20px 45px rgba(0,0,0,0.15);
                }

                .is-flipped {
                    transform: rotateY(180deg);
                    box-shadow: 0 20px 45px rgba(139, 35, 35, 0.15);
                }

                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 8px;
                    overflow: hidden;
                }

                /* Mặt trước (Úp) */
                .flip-card-front {
                    background: linear-gradient(135deg, #1A1C23 0%, #111215 100%);
                    border: 1px solid rgba(201, 162, 39, 0.3);
                }

                .border-pattern {
                    width: calc(100% - 24px);
                    height: calc(100% - 24px);
                    margin: 12px;
                    border: 1px solid rgba(201, 162, 39, 0.2);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .border-pattern::before, .border-pattern::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    border: 1px solid rgba(201, 162, 39, 0.4);
                }
                .border-pattern::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
                .border-pattern::after { bottom: -1px; right: -1px; border-left: none; border-top: none; }

                .card-number-large {
                    font-family: 'Playfair Display', serif;
                    font-size: 6rem;
                    font-weight: 900;
                    color: rgba(201, 162, 39, 0.15);
                    line-height: 1;
                    margin-bottom: 20px;
                }

                .card-hint {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    position: absolute;
                    bottom: 40px;
                }

                .hint-text {
                    color: #C9A227;
                    font-size: 0.8rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    font-weight: 700;
                }

                .hint-line {
                    width: 40px;
                    height: 1px;
                    background-color: rgba(201, 162, 39, 0.5);
                }

                /* Mặt sau (Lật lên) */
                .flip-card-back {
                    background: #FAF8F2;
                    transform: rotateY(180deg);
                    border: 1px solid rgba(139, 35, 35, 0.15);
                }

                .back-content {
                    padding: 45px 35px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    position: relative;
                }

                .back-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .icon-wrapper {
                    background: rgba(139, 35, 35, 0.08);
                    padding: 12px;
                    border-radius: 4px;
                    border: 1px dashed rgba(139, 35, 35, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-title {
                    font-family: 'Playfair Display', serif;
                    color: #8B2323;
                    font-size: 1.6rem;
                    font-weight: 800;
                    line-height: 1.25;
                    margin: 0;
                }

                .card-divider {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(139,35,35,0.2) 0%, transparent 100%);
                    margin-bottom: 24px;
                }

                .card-description {
                    font-family: 'Lora', serif;
                    color: #333;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    text-align: justify;
                }

                .card-watermark {
                    position: absolute;
                    bottom: -15px;
                    right: 10px;
                    font-family: 'Playfair Display', serif;
                    font-size: 5rem;
                    font-weight: 900;
                    color: rgba(139, 35, 35, 0.03);
                    line-height: 1;
                    pointer-events: none;
                }
            `}</style>
        </section>
    );
}

import { useState } from 'react';
import {
    Building2, Scale, Brain, Network, ShieldOff, Megaphone,
    Globe, FileWarning, Landmark, UsersRound, AlertTriangle, HeartCrack
} from 'lucide-react';

interface CauseCard {
    id: number;
    title: string;
    icon: React.ReactNode;
    content: string;
}

const subjectiveCauses: CauseCard[] = [
    {
        id: 1,
        title: "Hệ Thống Chính Trị Còn Khuyết Điểm",
        icon: <Building2 size={32} className="text-[#8B2323]" />,
        content: "Tổ chức, hoạt động và phân hóa chức năng của hệ thống chính trị nói chung còn nhiều khuyết điểm, tạo ra kẽ hở cho hành vi tham nhũng len lỏi và phát triển."
    },
    {
        id: 2,
        title: "Cơ Chế, Chính Sách Chưa Hoàn Thiện",
        icon: <Scale size={32} className="text-[#8B2323]" />,
        content: "Cơ chế, chính sách, pháp luật còn thiếu đồng bộ, chưa hoàn thiện; thể chế quản lý kinh tế - xã hội trên nhiều lĩnh vực vẫn còn bất cập, dễ bị lợi dụng."
    },
    {
        id: 3,
        title: "Lãnh Đạo Nhận Thức Chưa Đủ",
        icon: <Brain size={32} className="text-[#8B2323]" />,
        content: "Người đứng đầu các tổ chức, cơ quan, đơn vị chưa nhận thức đầy đủ và toàn diện về tính nguy hại của tham nhũng, dẫn đến buông lỏng quản lý nội bộ."
    },
    {
        id: 4,
        title: "Cơ Quan Chuyên Trách Chưa Rõ Nhiệm Vụ",
        icon: <Network size={32} className="text-[#8B2323]" />,
        content: "Chưa phân hóa rõ ràng nhiệm vụ, quyền hạn của hệ thống cơ quan chuyên trách về phòng, chống tham nhũng, dẫn đến chồng chéo và giảm hiệu quả phối hợp."
    },
    {
        id: 5,
        title: "Pháp Luật Chưa Đủ Mạnh",
        icon: <ShieldOff size={32} className="text-[#8B2323]" />,
        content: "Pháp luật về phòng, chống tham nhũng chưa đủ mạnh và hữu hiệu; chế tài xử lý chưa đủ sức răn đe, để hành vi tham nhũng có cơ hội tái diễn và lan rộng."
    },
    {
        id: 6,
        title: "Tuyên Truyền Mang Tính Phong Trào",
        icon: <Megaphone size={32} className="text-[#8B2323]" />,
        content: "Công tác tuyên truyền về phòng, chống tham nhũng còn mang tính phong trào, thiếu chiều sâu và tính bền vững, chưa thực sự thấm sâu vào ý thức của cán bộ, công chức."
    }
];

const objectiveCauses: CauseCard[] = [
    {
        id: 1,
        title: "Mặt Trái Kinh Tế Thị Trường",
        icon: <Globe size={32} className="text-[#8B2323]" />,
        content: "Tác động tiêu cực của mặt trái nền kinh tế thị trường và quá trình toàn cầu hóa, hội nhập quốc tế tạo ra áp lực vật chất, kích thích lòng tham và hành vi trục lợi."
    },
    {
        id: 2,
        title: "Chính Sách Thiếu Đồng Bộ",
        icon: <FileWarning size={32} className="text-[#8B2323]" />,
        content: "Hệ thống chính sách, pháp luật thiếu đồng bộ và nhất quán; thể chế về quản lý kinh tế - xã hội trên nhiều lĩnh vực còn bất cập, tạo ra nhiều lỗ hổng để lợi dụng."
    },
    {
        id: 3,
        title: "Quản Lý Nhà Nước Chưa Chặt Chẽ",
        icon: <Landmark size={32} className="text-[#8B2323]" />,
        content: "Công tác quản lý nhà nước trên một số lĩnh vực còn chưa chặt chẽ và hiệu quả, đặc biệt là trong quản lý tài sản công, đất đai, đầu tư xây dựng cơ bản."
    },
    {
        id: 4,
        title: "Quản Lý Cán Bộ Còn Hạn Chế",
        icon: <UsersRound size={32} className="text-[#8B2323]" />,
        content: "Công tác quản lý cán bộ, đảng viên, công chức, viên chức còn hạn chế; việc kiểm soát quyền lực, kê khai tài sản chưa thực chất, thiếu cơ chế giám sát hiệu quả."
    },
    {
        id: 5,
        title: "PCTN Địa Phương Chuyển Biến Chậm",
        icon: <AlertTriangle size={32} className="text-[#8B2323]" />,
        content: "\"Công tác PCTN tại một số địa phương, bộ, ngành chuyển biến chưa rõ rệt, trách nhiệm của người đứng đầu đối với công tác PCTN chưa được đề cao.\" (Nghị quyết TW)"
    },
    {
        id: 6,
        title: "Suy Thoái Phẩm Chất, Đạo Đức",
        icon: <HeartCrack size={32} className="text-[#8B2323]" />,
        content: "Sự suy thoái về phẩm chất và đạo đức của con người — từ lòng tham, sự ích kỷ — khiến những người có quyền lực lợi dụng vị trí để vụ lợi bất hợp pháp và không chính đáng."
    }
];

export function CausesOfCorruption() {
    const [activeTab, setActiveTab] = useState<'subjective' | 'objective'>('subjective');
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const currentData = activeTab === 'subjective' ? subjectiveCauses : objectiveCauses;

    const toggleCard = (id: number) => {
        setFlippedCards(prev =>
            prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
        );
    };

    const handleTabChange = (tab: 'subjective' | 'objective') => {
        setActiveTab(tab);
        setFlippedCards([]);
    };

    return (
        <section id="nguyen-nhan" className="causes-section">
            <div className="historical-grain-causes" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="w-16 h-px bg-[#C9A227]" />
                        <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#8B2323]"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            Phân Tích Gốc Rễ
                        </span>
                        <div className="w-16 h-px bg-[#C9A227]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
                        style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
                        Nguyên Nhân Tham Nhũng
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-[#4A4A4A] italic"
                        style={{ fontFamily: "'Lora', serif", lineHeight: 1.8 }}>
                        Tham nhũng không tự nhiên sinh ra — nó là hệ quả của những lỗ hổng trong thể chế,
                        nhận thức và đạo đức. Nhấn vào các thẻ để khám phá từng nguyên nhân cốt lõi.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="causes-tab-wrapper">
                    <div className="causes-tab-bar">
                        <button
                            className={`causes-tab-btn ${activeTab === 'subjective' ? 'active' : ''}`}
                            onClick={() => handleTabChange('subjective')}
                        >
                            <span className="tab-label">Nguyên Nhân Chủ Quan</span>
                            <span className="tab-sub">6 yếu tố nội tại</span>
                        </button>
                        <button
                            className={`causes-tab-btn ${activeTab === 'objective' ? 'active' : ''}`}
                            onClick={() => handleTabChange('objective')}
                        >
                            <span className="tab-label">Nguyên Nhân Khách Quan</span>
                            <span className="tab-sub">6 yếu tố bên ngoài</span>
                        </button>
                    </div>
                </div>

                {/* Flip Cards Grid */}
                <div className="causes-cards-grid">
                    {currentData.map((card, index) => (
                        <div
                            key={`${activeTab}-${card.id}`}
                            className={`causes-flip-container ${index > 2 ? 'bottom-row' : ''}`}
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className={`causes-flip-inner ${flippedCards.includes(card.id) ? 'is-flipped' : ''}`}>

                                {/* Front */}
                                <div className="causes-card-front">
                                    <div className="causes-border-pattern">
                                        <div className="causes-group-label">
                                            {activeTab === 'subjective' ? 'CHỦ QUAN' : 'KHÁCH QUAN'}
                                        </div>
                                        <div className="causes-number-large">0{card.id}</div>
                                        <div className="causes-card-hint">
                                            <span className="causes-hint-text">Khám Phá</span>
                                            <div className="causes-hint-line" />
                                        </div>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="causes-card-back">
                                    <div className="causes-back-content">
                                        <div className="causes-back-header">
                                            <div className="causes-icon-wrapper">{card.icon}</div>
                                            <h3 className="causes-card-title">{card.title}</h3>
                                        </div>
                                        <div className="causes-card-divider" />
                                        <p className="causes-card-description">{card.content}</p>
                                        <div className="causes-card-watermark">0{card.id}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .causes-section {
                    padding: 120px 0;
                    background: radial-gradient(circle at 90% 90%, rgba(139, 35, 35, 0.05), transparent 50%),
                                radial-gradient(circle at 10% 10%, rgba(201, 162, 39, 0.05), transparent 50%),
                                #F5F3ED;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Manrope', sans-serif;
                }

                .historical-grain-causes {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: multiply;
                }

                /* Tab switcher */
                .causes-tab-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 48px;
                }

                .causes-tab-bar {
                    display: flex;
                    background: #ECEAE4;
                    border: 1px solid rgba(139,35,35,0.12);
                    border-radius: 6px;
                    padding: 4px;
                    gap: 4px;
                }

                .causes-tab-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 14px 36px;
                    border: none;
                    background: transparent;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    gap: 3px;
                }

                .causes-tab-btn.active {
                    background: #8B2323;
                    box-shadow: 0 4px 12px rgba(139,35,35,0.25);
                }

                .tab-label {
                    font-family: 'Playfair Display', serif;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #4A4A4A;
                    transition: color 0.3s;
                }

                .tab-sub {
                    font-size: 0.72rem;
                    color: #888;
                    letter-spacing: 0.08em;
                    transition: color 0.3s;
                }

                .causes-tab-btn.active .tab-label,
                .causes-tab-btn.active .tab-sub {
                    color: #fff;
                }

                .causes-tab-btn:not(.active):hover {
                    background: rgba(139,35,35,0.06);
                }

                /* Cards grid */
                .causes-cards-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 28px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .causes-flip-container {
                    flex: 0 1 340px;
                    width: 100%;
                    height: 400px;
                    perspective: 1500px;
                    cursor: pointer;
                }

                .causes-flip-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                    transform-style: preserve-3d;
                    border-radius: 8px;
                    box-shadow: 0 12px 30px rgba(0,0,0,0.09);
                }

                .causes-flip-container:hover .causes-flip-inner:not(.is-flipped) {
                    transform: translateY(-8px) rotateX(2deg);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.14);
                }

                .causes-flip-inner.is-flipped {
                    transform: rotateY(180deg);
                    box-shadow: 0 20px 45px rgba(139,35,35,0.15);
                }

                .causes-card-front, .causes-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 8px;
                    overflow: hidden;
                }

                /* Front */
                .causes-card-front {
                    background: linear-gradient(135deg, #1A1C23 0%, #111215 100%);
                    border: 1px solid rgba(201, 162, 39, 0.3);
                }

                .causes-border-pattern {
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

                .causes-border-pattern::before, .causes-border-pattern::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    border: 1px solid rgba(201, 162, 39, 0.4);
                }
                .causes-border-pattern::before { top: -1px; left: -1px; border-right: none; border-bottom: none; }
                .causes-border-pattern::after  { bottom: -1px; right: -1px; border-left: none; border-top: none; }

                .causes-group-label {
                    font-size: 0.65rem;
                    font-weight: 800;
                    letter-spacing: 0.3em;
                    color: rgba(201, 162, 39, 0.6);
                    text-transform: uppercase;
                    margin-bottom: 8px;
                    font-family: 'Manrope', sans-serif;
                }

                .causes-number-large {
                    font-family: 'Playfair Display', serif;
                    font-size: 5.5rem;
                    font-weight: 900;
                    color: rgba(201, 162, 39, 0.13);
                    line-height: 1;
                    margin-bottom: 16px;
                }

                .causes-card-hint {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    position: absolute;
                    bottom: 36px;
                }

                .causes-hint-text {
                    color: #C9A227;
                    font-size: 0.78rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    font-weight: 700;
                }

                .causes-hint-line {
                    width: 36px;
                    height: 1px;
                    background-color: rgba(201, 162, 39, 0.5);
                }

                /* Back */
                .causes-card-back {
                    background: #FAF8F2;
                    transform: rotateY(180deg);
                    border: 1px solid rgba(139, 35, 35, 0.15);
                }

                .causes-back-content {
                    padding: 40px 32px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    position: relative;
                }

                .causes-back-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    margin-bottom: 20px;
                }

                .causes-icon-wrapper {
                    background: rgba(139,35,35,0.08);
                    padding: 10px;
                    border-radius: 4px;
                    border: 1px dashed rgba(139,35,35,0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .causes-card-title {
                    font-family: 'Playfair Display', serif;
                    color: #8B2323;
                    font-size: 1.4rem;
                    font-weight: 800;
                    line-height: 1.25;
                    margin: 0;
                }

                .causes-card-divider {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(139,35,35,0.2) 0%, transparent 100%);
                    margin-bottom: 20px;
                }

                .causes-card-description {
                    font-family: 'Lora', serif;
                    color: #333;
                    font-size: 1rem;
                    line-height: 1.75;
                    text-align: justify;
                }

                .causes-card-watermark {
                    position: absolute;
                    bottom: -15px;
                    right: 10px;
                    font-family: 'Playfair Display', serif;
                    font-size: 5rem;
                    font-weight: 900;
                    color: rgba(139,35,35,0.03);
                    line-height: 1;
                    pointer-events: none;
                }

                @media (max-width: 640px) {
                    .causes-tab-btn { padding: 12px 18px; }
                    .tab-label { font-size: 0.82rem; }
                    .causes-flip-container { height: 380px; }
                }
            `}</style>
        </section>
    );
}

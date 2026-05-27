import { useState } from 'react';
import { Scale, Megaphone, Shield, Eye, ShieldCheck } from 'lucide-react';

interface Responsibility {
    id: number;
    title: string;
    content: string;
    icon: React.ReactNode;
}

const leftResponsibilities: Responsibility[] = [
    {
        id: 1,
        title: "Thượng tôn pháp luật",
        content: "Trách nhiệm tiên quyết của mọi công dân là phải chấp hành nghiêm chỉnh pháp luật về phòng, chống tham nhũng (Luật Phòng, chống tham nhũng 2018).",
        icon: <Scale size={26} />,
    },
    {
        id: 3,
        title: "Quyền được bảo vệ",
        content: "Pháp luật luôn bảo vệ tuyệt đối và khen thưởng những người dũng cảm tố cáo, chống lại sự đe dọa, trù dập. Công dân có nghĩa vụ hợp tác điều tra.",
        icon: <Shield size={26} />,
    }
];

const rightResponsibilities: Responsibility[] = [
    {
        id: 2,
        title: "Tai mắt quần chúng",
        content: "Công dân có quyền phát hiện, tố cáo và báo tin về hành vi tham nhũng. Tuy nhiên, việc phản ánh phải đảm bảo tính khách quan và trung thực.",
        icon: <Megaphone size={26} />,
    },
    {
        id: 4,
        title: "Giám sát tối cao",
        content: "Công dân có quyền thực hiện việc giám sát thông qua Ban thanh tra nhân dân tại cơ sở và kiến nghị với Nhà nước để hoàn thiện các quy định.",
        icon: <Eye size={26} />,
    }
];

export function Responsibilities() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section id="trach-nhiem" className="responsibilities-section">
            <div className="historical-grain" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="w-16 h-px bg-[#C9A227]"></div>
                        <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#8B2323]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Quyền và Nghĩa Vụ Của Công Dân
                        </span>
                        <div className="w-16 h-px bg-[#C9A227]"></div>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>
                        Lá Chắn Nhân Dân
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-[#4A4A4A] italic" style={{ fontFamily: "'Lora', serif", lineHeight: 1.8 }}>
                        Sức mạnh lớn nhất để đẩy lùi tham nhũng nằm ở quần chúng. Mỗi công dân là một mắt xích, một lá chắn kiên cố bảo vệ sự trong sạch của bộ máy Nhà nước.
                    </p>
                </div>

                {/* 3-Column Layout with Floating Edge Icons */}
                <div className="shield-grid">
                    
                    {/* Left Column (Cards 1 & 3) */}
                    <div className="nodes-column left-nodes">
                        {leftResponsibilities.map(item => (
                            <div 
                                key={item.id}
                                className={`responsibility-node left-node ${activeId === item.id ? 'active' : ''} ${activeId !== null && activeId !== item.id ? 'dimmed' : ''}`}
                                onMouseEnter={() => setActiveId(item.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <div className="node-content">
                                    <div className="node-text">
                                        <h3 className="node-title">{item.title}</h3>
                                        <p className="node-description">{item.content}</p>
                                    </div>
                                    <div className="floating-icon right-edge">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column (Shield) */}
                    <div className="central-column" onMouseEnter={() => setActiveId(null)}>
                        <div className="central-shield-wrapper">
                            <div className="central-shield-glow"></div>
                            <div className="central-shield">
                                <ShieldCheck size={72} className="text-[#C9A227]" strokeWidth={1.5} />
                                <div className="shield-label">NHÂN DÂN</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Cards 2 & 4) */}
                    <div className="nodes-column right-nodes">
                        {rightResponsibilities.map(item => (
                            <div 
                                key={item.id}
                                className={`responsibility-node right-node ${activeId === item.id ? 'active' : ''} ${activeId !== null && activeId !== item.id ? 'dimmed' : ''}`}
                                onMouseEnter={() => setActiveId(item.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <div className="node-content">
                                    <div className="floating-icon left-edge">
                                        {item.icon}
                                    </div>
                                    <div className="node-text">
                                        <h3 className="node-title">{item.title}</h3>
                                        <p className="node-description">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
                .responsibilities-section {
                    padding: 120px 0;
                    background: linear-gradient(180deg, #F9F7F1 0%, #F4F1EA 100%);
                    position: relative;
                    overflow: hidden;
                    font-family: 'Manrope', sans-serif;
                }

                .historical-grain {
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 drain=%220.08%22%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
                    pointer-events: none;
                    mix-blend-mode: multiply;
                }

                /* Grid Layout */
                .shield-grid {
                    display: grid;
                    grid-template-columns: 1fr 200px 1fr; /* Fixed center width to ensure cards align perfectly */
                    gap: 3rem;
                    align-items: center;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .nodes-column {
                    display: flex;
                    flex-direction: column;
                    gap: 40px; /* More breathing room between vertical cards */
                }

                /* Central Shield */
                .central-column {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .central-shield-wrapper {
                    position: relative;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.4s ease;
                }

                .central-shield-wrapper:hover {
                    transform: scale(1.05);
                }

                .central-shield {
                    width: 160px;
                    height: 160px;
                    background: linear-gradient(135deg, #1A1A1A 0%, #2D1A1A 100%);
                    border-radius: 50%;
                    border: 2px solid #C9A227;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3), inset 0 0 30px rgba(201,162,39,0.2);
                }

                .shield-label {
                    margin-top: 12px;
                    color: #C9A227;
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    font-family: 'Playfair Display', serif;
                }

                .central-shield-glow {
                    position: absolute;
                    width: 230px;
                    height: 230px;
                    background: radial-gradient(circle, rgba(201,162,39,0.3) 0%, transparent 60%);
                    border-radius: 50%;
                    animation: pulse-glow 3s infinite alternate;
                    z-index: 1;
                }

                @keyframes pulse-glow {
                    0% { transform: scale(0.9); opacity: 0.5; }
                    100% { transform: scale(1.2); opacity: 0.9; }
                }

                /* Responsibility Nodes */
                .responsibility-node {
                    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                }

                /* Content Box */
                .node-content {
                    background: #FFFFFF;
                    border: 1px solid rgba(201, 162, 39, 0.2);
                    border-radius: 12px;
                    padding: 32px 40px;
                    position: relative;
                    transition: all 0.4s ease;
                    display: flex;
                    align-items: center;
                    min-height: 160px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                }

                .left-node .node-content {
                    text-align: right;
                    padding-right: 60px; /* Make room for floating icon */
                }

                .right-node .node-content {
                    text-align: left;
                    padding-left: 60px; /* Make room for floating icon */
                }

                /* Hover States for Content Box */
                .responsibility-node:hover .node-content,
                .responsibility-node.active .node-content {
                    border-color: rgba(201, 162, 39, 0.6);
                    box-shadow: 0 20px 50px rgba(139, 35, 35, 0.12);
                    transform: translateY(-5px);
                }

                .responsibility-node.dimmed {
                    opacity: 0.3;
                    transform: scale(0.98);
                    filter: grayscale(80%);
                }

                /* Floating Icon Wrapper */
                .floating-icon {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 68px;
                    height: 68px;
                    background: #F9F7F1;
                    border-radius: 50%;
                    color: #8B2323;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px dashed rgba(139, 35, 35, 0.3);
                    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    z-index: 2;
                }

                /* Position Icon on the Inner Edges */
                .floating-icon.right-edge {
                    right: -34px;
                }

                .floating-icon.left-edge {
                    left: -34px;
                }

                /* Hover States for Icon */
                .responsibility-node:hover .floating-icon,
                .responsibility-node.active .floating-icon {
                    background: #8B2323;
                    color: #FFFFFF;
                    border-style: solid;
                    border-color: #8B2323;
                    box-shadow: 0 10px 25px rgba(139,35,35,0.3);
                    transform: translateY(-50%) scale(1.1); /* Keep vertical centering while scaling */
                }

                /* Text Styling */
                .node-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: #1A1A1A;
                    margin-bottom: 12px;
                    transition: color 0.3s ease;
                }

                .responsibility-node:hover .node-title,
                .responsibility-node.active .node-title {
                    color: #8B2323;
                }

                .node-description {
                    font-family: 'Lora', serif;
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: #4A4A4A;
                    margin: 0;
                }

                /* Responsive Layout */
                @media (max-width: 1024px) {
                    .shield-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                        max-width: 600px;
                    }

                    .central-column {
                        order: -1; /* Move shield to top on mobile */
                        margin-bottom: 20px;
                    }

                    .left-node .node-content,
                    .right-node .node-content {
                        text-align: center;
                        padding: 60px 32px 32px 32px; /* Top padding for floating icon */
                        flex-direction: column;
                    }

                    .floating-icon.right-edge,
                    .floating-icon.left-edge {
                        /* Move icon to top center on mobile */
                        top: 0;
                        left: 50%;
                        right: auto;
                        transform: translate(-50%, -50%);
                    }

                    .responsibility-node:hover .floating-icon,
                    .responsibility-node.active .floating-icon {
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                }
            `}</style>
        </section>
    );
}

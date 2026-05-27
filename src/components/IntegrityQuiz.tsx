import { useState } from 'react';
import { X, Trophy, CheckCircle2, XCircle, RefreshCcw, Award, Sparkles, BookOpen, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
    slideRef: string;
}

const quizData: Question[] = [
    {
        question: "Theo Luật Phòng, chống tham nhũng hiện hành, khái niệm “Tham nhũng” được định nghĩa đầy đủ là gì?",
        options: [
            "Hành vi cố ý làm trái các quy định quản lý của nhà nước nhằm làm thất thoát ngân sách công.",
            "Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.",
            "Hành vi thỏa thuận ngầm giữa công chức nhà nước và doanh nghiệp tư nhân để chia chác lợi nhuận.",
            "Hành vi lợi dụng kẽ hở của pháp luật để chiếm đoạt tài sản công cộng làm tài sản riêng."
        ],
        correct: 1,
        explanation: "Theo [Khoản 1 Điều 3 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    },
    {
        question: "Theo Luật Phòng, chống tham nhũng hiện hành, đối tượng “Người có chức vụ, quyền hạn” bao gồm những ai?",
        options: [
            "Chỉ bao gồm cán bộ, công chức làm việc chính thức trong biên chế nhà nước từ cấp huyện trở lên.",
            "Chỉ bao gồm những người giữ cương vị lãnh đạo chủ chốt do bầu cử tại các cơ quan nhà nước.",
            "Người do bổ nhiệm, do bầu cử, do tuyển dụng, do hợp đồng hoặc do một hình thức khác, có hưởng lương hoặc không hưởng lương, được giao thực hiện nhiệm vụ, công vụ nhất định và có quyền hạn nhất định trong khi thực hiện nhiệm vụ, công vụ đó.",
            "Bất kỳ ai làm việc và đại diện pháp luật cho các doanh nghiệp tư nhân quy mô lớn."
        ],
        correct: 2,
        explanation: "Theo [Khoản 2 Điều 3 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Người có chức vụ, quyền hạn là người do bổ nhiệm, do bầu cử, do tuyển dụng, do hợp đồng hoặc do một hình thức khác, có hưởng lương hoặc không hưởng lương, được giao thực hiện nhiệm vụ, công vụ nhất định và có quyền hạn nhất định trong khi thực hiện nhiệm vụ, công vụ đó.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    },
    {
        question: "Theo Luật Phòng, chống tham nhũng hiện hành, thuật ngữ “Vụ lợi” được định nghĩa như thế nào?",
        options: [
            "Chỉ nhằm đạt được lợi ích về tiền bạc hoặc tài sản có giá trị lớn từ 2 triệu đồng trở lên.",
            "Là việc người có chức vụ lợi dụng chức trách để nâng đỡ người thân vào các cơ quan chính quyền.",
            "Vụ lợi là việc người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn nhằm đạt được lợi ích vật chất hoặc lợi ích phi vật chất không chính đáng.",
            "Chỉ là các khoản lợi ích phi vật chất như danh tiếng, bằng khen hoặc chức vụ cao hơn."
        ],
        correct: 2,
        explanation: "Theo [Khoản 7 Điều 3 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Vụ lợi là việc người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn nhằm đạt được lợi ích vật chất hoặc lợi ích phi vật chất không chính đáng.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    },
    {
        question: "Nghĩa vụ của công dân trong phòng, chống tham nhũng được quy định là gì?",
        options: [
            "Công dân có quyền tự do tuyệt đối trong việc điều tra và tự xử lý các hành vi có dấu hiệu tham nhũng.",
            "Công dân phải chịu mọi chi phí phát sinh khi tham gia vào quá trình giải quyết các vụ việc tham nhũng.",
            "Công dân có nghĩa vụ hợp tác, giúp đỡ cơ quan, tổ chức, cá nhân có thẩm quyền trong phòng, chống tham nhũng.",
            "Công dân chỉ thực hiện nghĩa vụ phòng, chống tham nhũng khi được cơ quan nhà nước yêu cầu bằng văn bản."
        ],
        correct: 2,
        explanation: "Theo [Khoản 2 Điều 5 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Công dân có nghĩa vụ hợp tác, giúp đỡ cơ quan, tổ chức, cá nhân có thẩm quyền trong phòng, chống tham nhũng.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    },
    {
        question: "Yếu tố nào sau đây thuộc nhóm Nguyên nhân chủ quan dẫn đến hành vi tham nhũng?",
        options: [
            "tác động của mặt trái nền kinh tế thị trường và quá trình toàn cầu hóa, hội nhập quốc tế.",
            "do hệ thống chính sách, pháp luật ở nước ta thiếu đồng bộ và nhất quán.",
            "Tổ chức, hoạt động, phân hóa chức năng của hệ thống chính trị nói chung còn nhiều khuyết điểm",
            "công tác quản lý nhà nước trên một số lĩnh vực còn chưa chặt chẽ, hiệu quả."
        ],
        correct: 2,
        explanation: "Theo tài liệu bài giảng Tiết 16 (Slide 7), các nguyên nhân chủ quan dẫn đến tham nhũng gồm: “Tổ chức, hoạt động, phân hóa chức năng của hệ thống chính trị nói chung còn nhiều khuyết điểm”, “Cơ chế, chính sách, pháp luật chưa hoàn thiện”, “Người đứng đầu các tổ chức chưa nhận thức đầy đủ về tham nhũng”, “Chưa phân hóa rõ nhiệm vụ của hệ thống cơ quan chuyên trách về phòng, chống tham nhũng”, “Pháp luật tham nhũng chưa đủ mạnh, hữu hiệu”, và “Công tác tuyên truyền mang tính phong trào”.",
        slideRef: "Tiết 16 - Slide 7"
    },
    {
        question: "Yếu tố nào sau đây phản ánh nguồn gốc cốt lõi từ lòng tham và sự ích kỷ dẫn đến hành vi tham nhũng?",
        options: [
            "công tác quản lý cán bộ, đảng viên, công chức, viên chức còn hạn chế.",
            "sự suy thoái về phẩm chất và đạo đức của con người, từ lòng tham, sự ích kỷ của những người được coi là có quyền lực trong xã hội, họ đã lợi dụng quyền hạn của mình để vụ lợi một cách bất hợp pháp và không chính đáng",
            "thể chế, chính sách về quản lý kinh tế - xã hội trên nhiều lĩnh vực vẫn còn bất cập,",
            "tác động của mặt trái nền kinh tế thị trường và quá trình toàn cầu hóa, hội nhập quốc tế."
        ],
        correct: 1,
        explanation: "Theo tài liệu bài giảng Tiết 16 (Slide 9): Nguyên nhân khách quan thứ sáu dẫn đến tham nhũng là “sự suy thoái về phẩm chất và đạo đức của con người, từ lòng tham, sự ích kỷ của những người được coi là có quyền lực trong xã hội, họ đã lợi dụng quyền hạn của mình để vụ lợi một cách bất hợp pháp và không chính đáng”.",
        slideRef: "Tiết 16 - Slide 9"
    },
    {
        question: "Tác hại của tham nhũng về phương diện chính trị được biểu hiện như thế nào?",
        options: [
            "tham nhũng góp phần làm suy đồi văn hóa của xã hội, là một thứ rào cản đối với công cuộc cải cách tư pháp, xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở nước ta.",
            "bất cứ người công chức, viên chức hay người đảng viên nào có hành vi tham nhũng thì cũng đều vi phạm Hiến pháp, vi phạm Điều lệ Đảng và gây thiệt hại cho xã hội.",
            "tham nhũng đã khiến cho gia tăng cách biệt giàu - nghèo; theo đó, các vấn đề trật tự, kỷ cương, an ninh xã hội cũng diễn biến phức tạp ;",
            "Tham nhũng không chỉ là hành vi phạm pháp, mà còn là một hành vi bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung, hoàn toàn trái ngược với đạo đức cách mạng"
        ],
        correct: 1,
        explanation: "Theo tài liệu bài giảng Tiết 16 (Slide 10), tác hại về phương diện chính trị: “bất cứ người công chức, viên chức hay người đảng viên nào có hành vi tham nhũng thì cũng đều vi phạm Hiến pháp, vi phạm Điều lệ Đảng và gây thiệt hại cho xã hội.”",
        slideRef: "Tiết 16 - Slide 10"
    },
    {
        question: "Tác hại của tham nhũng về phương diện đạo đức được biểu hiện như thế nào?",
        options: [
            "Tham nhũng không chỉ là hành vi phạm pháp, mà còn là một hành vi bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung, hoàn toàn trái ngược với đạo đức cách mạng của người cán bộ, đảng viên, công chức, viên chức trong một Nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng Cộng sản Việt",
            "tham nhũng trở thành vật cản rất lớn đối với mục tiêu xây dựng xã hội công bằng, dân chủ, tiến bộ, văn minh ở nước ta.",
            "Bất cứ một hành vi tham nhũng nào cũng đều trực tiếp hoặc gián tiếp gây khó khăn, trở ngại cho các hoạt động quản lý và sự phát triển của các ngành nghề sản xuất, kinh doanh, dịch vụ ở khu vực nhà nước",
            "tham nhũng góp phần làm suy đồi văn hóa của xã hội, là một thứ rào cản đối với công cuộc cải cách tư pháp, xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở nước ta."
        ],
        correct: 0,
        explanation: "Theo tài liệu bài giảng Tiết 16 (Slide 12): “Tham nhũng không chỉ là hành vi phạm pháp, mà còn là một hành vi bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung, hoàn toàn trái ngược với đạo đức cách mạng của người cán bộ, đảng viên, công chức, viên chức trong một Nhà nước của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng Cộng sản Việt”",
        slideRef: "Tiết 16 - Slide 12"
    },
    {
        question: "Quyền của công dân trong phòng, chống tham nhũng được quy định như thế nào?",
        options: [
            "Công dân có nghĩa vụ hợp tác, giúp đỡ cơ quan, tổ chức, cá nhân có thẩm quyền trong phòng, chống tham nhũng.",
            "Công dân có quyền phát hiện, phản ánh, tố cáo, tố giác, báo tin về hành vi tham nhũng và được bảo vệ, khen thưởng theo quy định của pháp luật.",
            "Công dân phải chấp hành nghiêm chỉnh pháp luật về phòng, chống tham nhũng.",
            "Khi tố cáo hành vi tham nhũng với cơ quan, tổ chức, cá nhân có thẩm quyền, công dân phải nêu rõ họ, tên, địa chỉ, nội dung tố cáo"
        ],
        correct: 1,
        explanation: "Theo [Khoản 1 Điều 5 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Công dân có quyền phát hiện, phản ánh, tố cáo, tố giác, báo tin về hành vi tham nhũng và được bảo vệ, khen thưởng theo quy định của pháp luật; có quyền kiến nghị với cơ quan nhà nước hoàn thiện pháp luật về phòng, chống tham nhũng và giám sát việc thực hiện pháp luật về phòng, chống tham nhũng.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    },
    {
        question: "Trách nhiệm của Ban thanh tra nhân dân trong phòng, chống tham nhũng được quy định như thế nào?",
        options: [
            "Ban thanh tra nhân dân chỉ thực hiện quyền giám sát khi có yêu cầu bằng văn bản của Chủ tịch UBND cấp xã hoặc cơ quan nhà nước cấp trên trực tiếp.",
            "Ban thanh tra nhân dân có trách nhiệm tiếp nhận ý kiến phản ánh của nhân dân, cán bộ, công chức, viên chức, người lao động về hành vi có dấu hiệu tham nhũng, xem xét và kiến nghị Chủ tịch UBND xã, phường, thị trấn, người đứng đầu cơ quan nhà nước, đơn vị sự nghiệp, doanh nghiệp nhà nước hoặc cơ quan, tổ chức, cá nhân có trách nhiệm xem xét, giải quyết theo quy định của pháp luật và giám sát việc giải quyết đó.",
            "Ban thanh tra nhân dân có quyền trực tiếp xử lý kỷ luật hoặc đình chỉ công tác của người có hành vi tham nhũng.",
            "Ban thanh tra nhân dân có nghĩa vụ giữ bí mật tuyệt đối và không được công khai kết quả giám sát giải quyết phản ánh."
        ],
        correct: 1,
        explanation: "Theo [Khoản 4 Điều 75 Luật Phòng, chống tham nhũng](https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx): “Ban thanh tra nhân dân có trách nhiệm tiếp nhận ý kiến phản ánh của nhân dân, cán bộ, công chức, viên chức, người lao động về hành vi có dấu hiệu tham nhũng, xem xét và kiến nghị Chủ tịch UBND xã, phường, thị trấn, người đứng đầu cơ quan nhà nước, đơn vị sự nghiệp, doanh nghiệp nhà nước hoặc cơ quan, tổ chức, cá nhân có trách nhiệm xem xét, giải quyết theo quy định của pháp luật và giám sát việc giải quyết đó.”",
        slideRef: "Luật Phòng, chống tham nhũng"
    }
];

function renderTextWithLinks(text: string) {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+)/g);
    return parts.map((part, idx) => {
        const markdownLinkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (markdownLinkMatch) {
            const [_, label, url] = markdownLinkMatch;
            return (
                <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#8B2323', fontWeight: 700, textDecoration: 'underline', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A227'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8B2323'}
                >
                    {label}
                </a>
            );
        }
        if (part.startsWith('http://') || part.startsWith('https://')) {
            return (
                <a
                    key={idx}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#8B2323', fontWeight: 700, textDecoration: 'underline', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A227'}
                    onMouseLeave={e => e.currentTarget.style.color = '#8B2323'}
                >
                    {part}
                </a>
            );
        }
        return part;
    });
}

export function IntegrityQuiz({ onClose }: { onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'result'>('start');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleOptionSelect = (index: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(index);
        const correct = index === quizData[currentIndex].correct;
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
        }
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowExplanation(false);
        } else {
            setCurrentStep('result');
        }
    };

    const resetQuiz = () => {
        setCurrentStep('start');
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setShowExplanation(false);
    };

    // Hàm nhận xét kết quả
    const getVerdict = () => {
        if (score === 10) return { title: "Tuyệt Đối Thanh Liêm!", desc: "Bạn sở hữu tri thức hoàn hảo về đạo đức cách mạng và pháp luật phòng chống tham nhũng. Xứng đáng là tấm gương sáng ngời!", rank: "CỐ VẤN THƯỢNG HẠNG" };
        if (score >= 8) return { title: "Rất Xuất Sắc!", desc: "Hiểu biết rất sâu sắc về các nguyên tắc liêm chính và trách nhiệm công dân. Hãy tiếp tục phát huy phẩm chất này nhé!", rank: "HIỆP SĨ LIÊM CHÍNH" };
        if (score >= 5) return { title: "Đạt Yêu Cầu!", desc: "Bạn có nhận thức nền tảng tốt về phòng chống tham nhũng, tuy nhiên cần nghiên cứu thêm các slide để nắm chắc hơn.", rank: "CHIẾN SĨ LIÊM CHÍNH" };
        return { title: "Cần Cố Gắng Hơn!", desc: "Tri thức liêm chính rất quan trọng để bảo vệ nhà nước pháp quyền. Hãy đọc kỹ lại tài liệu và thử thách lại nhé!", rank: "TẬP SỰ LIÊM CHÍNH" };
    };

    const verdict = getVerdict();

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#FDFBF7', overflowY: 'auto' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Manrope:wght@300;400;600;700;800&display=swap');

                .quiz-container {
                    font-family: 'Manrope', sans-serif;
                }
                
                .quiz-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                }

                .classic-text {
                    font-family: 'Lora', serif;
                }

                .option-btn {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .option-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(139, 35, 35, 0.08);
                    border-color: #8B2323 !important;
                    background: rgba(139, 35, 35, 0.02) !important;
                }

                @keyframes pulseGold {
                    0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(201, 162, 39, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
                }

                .gold-pulse {
                    animation: pulseGold 2s infinite;
                }

                @keyframes confettiFall {
                    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(80vh) rotate(720deg); opacity: 0; }
                }

                .confetti-particle {
                    position: absolute;
                    animation: confettiFall 3s linear infinite;
                    pointer-events: none;
                }

                @media print {
                    .no-print { display: none !important; }
                    .print-area { width: 100% !important; max-width: 100% !important; box-shadow: none !important; border: none !important; background: white !important; color: black !important; }
                }
            `}</style>

            {/* Confetti khi đạt điểm 10 */}
            {currentStep === 'result' && score === 10 && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 10002, pointerEvents: 'none', overflow: 'hidden' }}>
                    {[...Array(40)].map((_, i) => {
                        const colors = ['#C9A227', '#8B2323', '#2D4A3E', '#1A3A5F', '#E6C280'];
                        const size = Math.random() * 8 + 6;
                        const left = Math.random() * 100;
                        const delay = Math.random() * 3;
                        const duration = Math.random() * 2 + 2;
                        return (
                            <div
                                key={i}
                                className="confetti-particle"
                                style={{
                                    left: `${left}%`,
                                    width: size,
                                    height: size,
                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                                    animationDelay: `${delay}s`,
                                    animationDuration: `${duration}s`,
                                    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                                    top: -10
                                }}
                            />
                        );
                    })}
                </div>
            )}

            {/* Header Đồng bộ */}
            <header className="no-print" style={{ position: 'sticky', top: 0, background: 'rgba(244, 241, 234, 0.98)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #C9A227', zIndex: 100, padding: '16px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Trophy size={32} color="#8B2323" />
                        <div>
                            <h1 className="quiz-title" style={{ fontSize: '1.4rem', color: '#1A1A1A', margin: 0 }}>Đấu Trường Thanh Liêm</h1>
                            <p style={{ fontSize: '0.65rem', color: '#8B2323', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0, fontWeight: 800 }}>Thử Thách Tri Thức Phòng Chống Tham Nhũng</p>
                        </div>
                    </div>

                    <button onClick={onClose} style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid #C9A227', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#F4F1EA'} onMouseLeave={(e) => e.currentTarget.style.background = 'white'}>
                        <X size={24} color="#8B2323" />
                    </button>
                </div>
            </header>

            {/* Nội dung chính */}
            <main className="quiz-container" style={{ padding: '40px 16px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
                <AnimatePresence mode="wait">
                    {/* 1. MÀN HÌNH BẮT ĐẦU */}
                    {currentStep === 'start' && (
                        <motion.div
                            key="start-screen"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'flex', gap: 40, flexDirection: 'row', flexWrap: 'wrap', marginTop: 30 }}
                        >
                            {/* Cột trái: Giới thiệu */}
                            <div style={{ flex: '1 1 450px', background: 'linear-gradient(145deg, #7B1F1F 0%, #9E3030 40%, #6B3020 100%)', padding: '60px 40px', color: 'white', borderRadius: 4, display: 'flex', flexDirection: 'column', border: '1px solid #C9A227', boxShadow: '0 20px 40px rgba(139,35,35,0.25)' }}>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                                    <Star size={16} color="#C9A227" fill="#C9A227" />
                                    <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A227', fontWeight: 800 }}>Ôn Tập &amp; Kiểm Tra Kiến Thức</span>
                                </div>
                                <h2 className="quiz-title" style={{ fontSize: '2.5rem', color: '#F5D98B', lineHeight: 1.2, margin: '0 0 24px 0' }}>Đấu Trường<br />Thanh Liêm</h2>
                                
                                <blockquote className="classic-text" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', borderLeft: '3px solid #8B2323', paddingLeft: 20, margin: '0 0 30px 0', fontStyle: 'italic' }}>
                                    “Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ... Nó là giặc nội xâm.”
                                    <cite style={{ display: 'block', fontSize: '0.8rem', color: '#F5D98B', marginTop: 10, fontStyle: 'normal', fontWeight: 700, letterSpacing: '1px' }}>— CHỦ TỊCH HỒ CHÍ MINH</cite>
                                </blockquote>

                                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 40px 0' }}>
                                    Bộ câu hỏi ôn tập về nội dung <strong>Phòng, Chống Tham Nhũng</strong> (Tiết 16 &amp; 17) — giúp bạn củng cố kiến thức, tra cứu điều luật và tự đánh giá mức độ nắm bài trước kỳ thi. Mỗi câu đều có giải thích và dẫn nguồn cụ thể.
                                </p>

                                <button
                                    onClick={() => setCurrentStep('quiz')}
                                    className="gold-pulse"
                                    style={{
                                        marginTop: 'auto',
                                        padding: '18px',
                                        background: '#8B2323',
                                        color: 'white',
                                        borderRadius: 2,
                                        fontWeight: 800,
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 12,
                                        transition: '0.3s',
                                        fontFamily: "'Playfair Display', serif",
                                        letterSpacing: '1px',
                                        fontSize: '0.95rem'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#A52A2A'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#8B2323'}
                                >
                                    BẮT ĐẦU ÔN TẬP <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Cột phải: Luật chơi & Thông tin */}
                            <div style={{ flex: '1 1 500px', background: 'white', padding: '50px 40px', borderRadius: 4, border: '1px solid rgba(139, 35, 35, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="quiz-title" style={{ fontSize: '1.6rem', color: '#1A1A1A', marginBottom: 24, borderBottom: '2px solid #F4F1EA', paddingBottom: 15 }}>Bộ Đề Ôn Tập Gồm</h3>
                                
                                <div style={{ display: 'grid', gap: 24 }}>
                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(139, 35, 35, 0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <BookOpen size={20} color="#8B2323" />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', color: '#1A1A1A', fontWeight: 700 }}>10 Câu Hỏi Ôn Tập Có Nguồn</h4>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>Bám sát Luật PCTN và bài giảng Tiết 16 & 17. Mỗi đáp án đều có thể Ctrl+F kiểm chứng trực tiếp trên nguồn gốc.</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(201, 162, 39, 0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Sparkles size={20} color="#C9A227" />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', color: '#1A1A1A', fontWeight: 700 }}>Giải Thích + Dẫn Nguồn Ngay Lập Tức</h4>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>Sau mỗi câu, nhận ngay phần giải thích chi tiết kèm đường dẫn tới điều luật hoặc slide gốc.</p>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(45, 74, 62, 0.05)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Award size={20} color="#2D4A3E" />
                                        </div>
                                        <div>
                                            <h4 style={{ margin: '0 0 6px 0', fontSize: '1rem', color: '#1A1A1A', fontWeight: 700 }}>Bằng Khích Lệ Cuối Bài</h4>
                                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>Vượt qua thử thách với điểm số cao để nhận Bằng danh dự “Hiệp sĩ Liêm chính” hoặc “Cố vấn Thượng hạng”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 2. MÀN HÌNH TRẢ LỜI CÂU HỎI */}
                    {currentStep === 'quiz' && (
                        <motion.div
                            key="quiz-screen"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'flex', gap: 40, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}
                        >
                            {/* Cột trái: Câu hỏi & Các tùy chọn */}
                            <div style={{ flex: '1 1 600px', background: 'white', padding: '40px 30px', borderRadius: 4, border: '1px solid rgba(139, 35, 35, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                {/* Thanh Tiến Độ */}
                                <div style={{ marginBottom: 35 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.85rem', fontWeight: 700 }}>
                                        <span style={{ color: '#8B2323' }}>CÂU HỎI {currentIndex + 1} / {quizData.length}</span>
                                        <span style={{ color: '#C9A227' }}>Hoàn thành {Math.round(((currentIndex) / quizData.length) * 100)}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: 6, background: '#F4F1EA', borderRadius: 10, overflow: 'hidden' }}>
                                        <div style={{ width: `${((currentIndex + 1) / quizData.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #8B2323, #C9A227)', transition: 'width 0.4s ease-out' }} />
                                    </div>
                                </div>

                                {/* Đề Bài */}
                                <h3 className="classic-text" style={{ fontSize: '1.35rem', color: '#1A1A1A', lineHeight: 1.6, marginBottom: 35, fontWeight: 700 }}>
                                    {quizData[currentIndex].question}
                                </h3>

                                {/* Phương án chọn */}
                                <div style={{ display: 'grid', gap: 14 }}>
                                    {quizData[currentIndex].options.map((option, idx) => {
                                        let borderStyle = '1px solid rgba(0,0,0,0.1)';
                                        let bgStyle = 'white';
                                        let textStyle = '#1A1A1A';
                                        let fontWg = 500;

                                        // Khi đã trả lời câu này
                                        if (selectedOption !== null) {
                                            if (idx === quizData[currentIndex].correct) {
                                                // Đáp án đúng hiển thị xanh lục
                                                borderStyle = '2px solid #22C55E';
                                                bgStyle = '#F0FDF4';
                                                textStyle = '#14532D';
                                                fontWg = 700;
                                            } else if (idx === selectedOption) {
                                                // Người chơi chọn đáp án sai hiển thị đỏ
                                                borderStyle = '2px solid #EF4444';
                                                bgStyle = '#FEF2F2';
                                                textStyle = '#7F1D1D';
                                                fontWg = 700;
                                            } else {
                                                // Các phương án khác mờ đi
                                                bgStyle = '#FAF9F6';
                                                textStyle = '#888';
                                            }
                                        }

                                        const prefix = ['A', 'B', 'C', 'D'][idx];

                                        return (
                                            <button
                                                key={idx}
                                                disabled={selectedOption !== null}
                                                onClick={() => handleOptionSelect(idx)}
                                                className="option-btn"
                                                style={{
                                                    padding: '20px 24px',
                                                    border: borderStyle,
                                                    background: bgStyle,
                                                    color: textStyle,
                                                    borderRadius: 4,
                                                    textAlign: 'left',
                                                    fontSize: '0.95rem',
                                                    fontWeight: fontWg,
                                                    cursor: selectedOption === null ? 'pointer' : 'default',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 16,
                                                    outline: 'none',
                                                    width: '100%'
                                                }}
                                            >
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 28,
                                                    height: 28,
                                                    borderRadius: '50%',
                                                    background: selectedOption === null ? '#FAF6F0' : (idx === quizData[currentIndex].correct ? '#22C55E' : (idx === selectedOption ? '#EF4444' : '#E5E5E5')),
                                                    color: selectedOption === null ? '#8B2323' : 'white',
                                                    fontWeight: 700,
                                                    fontSize: '0.85rem',
                                                    flexShrink: 0,
                                                    border: selectedOption === null ? '1px solid rgba(139, 35, 35, 0.2)' : 'none'
                                                }}>
                                                    {prefix}
                                                </span>
                                                <span style={{ lineHeight: 1.5, flex: 1 }}>{option}</span>

                                                {selectedOption !== null && idx === quizData[currentIndex].correct && (
                                                    <CheckCircle2 color="#22C55E" size={20} style={{ flexShrink: 0, marginLeft: 10 }} />
                                                )}
                                                {selectedOption !== null && idx === selectedOption && idx !== quizData[currentIndex].correct && (
                                                    <XCircle color="#EF4444" size={20} style={{ flexShrink: 0, marginLeft: 10 }} />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Cột phải: Thông tin Giải thích & Nút chuyển tiếp */}
                            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <div style={{ background: '#FAF6F0', border: '1px solid #C9A227', padding: 30, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', minHeight: 320 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, borderBottom: '1px solid rgba(201, 162, 39, 0.2)', paddingBottom: 12 }}>
                                        <BookOpen size={20} color="#8B2323" />
                                        <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#1A1A1A', letterSpacing: '1px', textTransform: 'uppercase' }}>Giải Nghĩa Liêm Chính</span>
                                    </div>

                                    {showExplanation ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                                        >
                                            <div style={{ display: 'inline-flex', alignSelf: 'flex-start', background: isCorrect ? '#22C55E' : '#EF4444', color: 'white', fontSize: '0.75rem', fontWeight: 800, padding: '4px 12px', borderRadius: 2, marginBottom: 15, letterSpacing: '1px' }}>
                                                {isCorrect ? 'ĐÁP ÁN ĐÚNG!' : 'CHƯA CHÍNH XÁC!'}
                                            </div>
                                            
                                            <p className="classic-text" style={{ fontSize: '1rem', lineHeight: 1.7, color: '#333', margin: 0, flex: 1 }}>
                                                {renderTextWithLinks(quizData[currentIndex].explanation)}
                                            </p>

                                            <div style={{ marginTop: 20, background: 'rgba(201,162,39,0.1)', padding: '12px 18px', borderLeft: '3px solid #C9A227', fontSize: '0.85rem', fontWeight: 700, color: '#7B2D3E' }}>
                                                Tham chiếu:{" "}
                                                 <a
                                                     href={quizData[currentIndex].slideRef.startsWith('Tiết') 
                                                         ? 'https://drive.google.com/drive/folders/1QupRI2q9CcG8rycs1V7Hqd1iGvfzv1Q5' 
                                                         : 'https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Phong-chong-tham-nhung-322049.aspx'}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     style={{
                                                         color: '#8B2323',
                                                         textDecoration: 'underline',
                                                         transition: 'color 0.2s',
                                                         cursor: 'pointer'
                                                     }}
                                                     onMouseEnter={e => e.currentTarget.style.color = '#C9A227'}
                                                     onMouseLeave={e => e.currentTarget.style.color = '#8B2323'}
                                                 >
                                                     {quizData[currentIndex].slideRef}
                                                 </a>
                                            </div>

                                            <button
                                                onClick={nextQuestion}
                                                style={{
                                                    marginTop: 30,
                                                    padding: '16px',
                                                    background: '#8B2323',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: 2,
                                                    fontWeight: 800,
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 8,
                                                    transition: '0.3s',
                                                    width: '100%',
                                                    fontFamily: "'Playfair Display', serif",
                                                    letterSpacing: '1px'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.background = '#A52A2A'}
                                                onMouseLeave={(e) => e.currentTarget.style.background = '#8B2323'}
                                            >
                                                {currentIndex < quizData.length - 1 ? 'CÂU TIẾP THEO' : 'XEM KẾT QUẢ'} <ArrowRight size={16} />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto 0', textAlign: 'center', color: '#888' }}>
                                            <Sparkles size={40} color="#C9A227" style={{ marginBottom: 15 }} />
                                            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>Chọn một đáp án để giải mã tri thức và kiểm tra kết quả ngay lập tức!</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* 3. MÀN HÌNH HIỂN THỊ KẾT QUẢ */}
                    {currentStep === 'result' && (
                        <motion.div
                            key="result-screen"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}
                        >
                            {/* Kết quả tổng quát */}
                            <div className="no-print" style={{ display: 'flex', gap: 40, width: '100%', flexWrap: 'wrap', marginBottom: 50 }}>
                                {/* Tròn tiến độ SVG */}
                                <div style={{ flex: '1 1 300px', background: 'white', border: '1px solid rgba(139, 35, 35, 0.1)', padding: 40, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ position: 'relative', width: 180, height: 180, marginBottom: 20 }}>
                                        <svg width="180" height="180" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="44" fill="none" stroke="#F4F1EA" strokeWidth="8" />
                                            <circle cx="50" cy="50" r="44" fill="none" stroke={score >= 8 ? '#2D4A3E' : (score >= 5 ? '#C9A227' : '#8B2323')} strokeWidth="8"
                                                strokeDasharray={`${(score / quizData.length) * 276.4} 276.4`}
                                                transform="rotate(-90 50 50)"
                                                strokeLinecap="round"
                                                style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                            />
                                        </svg>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                            <span style={{ fontSize: '3rem', fontWeight: 900, color: '#1A1A1A' }}>{score}</span>
                                            <span style={{ fontSize: '1.25rem', color: '#888' }}>/{quizData.length}</span>
                                        </div>
                                    </div>
                                    <h3 className="quiz-title" style={{ fontSize: '1.4rem', color: '#1A1A1A', margin: '0 0 8px 0' }}>{verdict.title}</h3>
                                    <span style={{ background: score >= 8 ? 'rgba(45, 74, 62, 0.1)' : 'rgba(139, 35, 35, 0.1)', color: score >= 8 ? '#2D4A3E' : '#8B2323', fontSize: '0.75rem', fontWeight: 800, padding: '4px 14px', borderRadius: 100, letterSpacing: '1px' }}>
                                        {verdict.rank}
                                    </span>
                                </div>

                                {/* Lời nhận xét */}
                                <div style={{ flex: '1 1 500px', background: 'white', border: '1px solid rgba(139, 35, 35, 0.1)', padding: 40, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h4 className="quiz-title" style={{ fontSize: '1.5rem', color: '#8B2323', margin: '0 0 16px 0' }}>Báo Cáo Đánh Giá</h4>
                                    <p className="classic-text" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333', margin: '0 0 30px 0' }}>
                                        {verdict.desc}
                                    </p>

                                    <div style={{ display: 'flex', gap: 16 }}>
                                        <button
                                            onClick={resetQuiz}
                                            style={{
                                                padding: '14px 28px',
                                                background: '#1A1A1A',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: 2,
                                                fontWeight: 800,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8,
                                                fontSize: '0.85rem',
                                                fontFamily: "'Playfair Display', serif",
                                                letterSpacing: '1px',
                                                transition: '0.3s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#8B2323'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = '#1A1A1A'}
                                        >
                                            <RefreshCcw size={16} /> CHƠI LẠI
                                        </button>

                                        <button
                                            onClick={() => window.print()}
                                            style={{
                                                padding: '14px 28px',
                                                background: 'white',
                                                color: '#8B2323',
                                                border: '1px solid #8B2323',
                                                borderRadius: 2,
                                                fontWeight: 800,
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8,
                                                fontSize: '0.85rem',
                                                fontFamily: "'Playfair Display', serif",
                                                letterSpacing: '1px',
                                                transition: '0.3s'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = '#FAF6F0'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                                        >
                                            <Award size={16} /> IN CHỨNG NHẬN
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Giấy Chứng Nhận Thanh Liêm */}
                            {score >= 5 ? (
                                <>
                                <div className="print-area" style={{
                                    width: '100%',
                                    maxWidth: 800,
                                    background: '#FCFAF6',
                                    border: '20px solid #1A1A1A',
                                    outline: '3px double #C9A227',
                                    outlineOffset: '-12px',
                                    padding: '60px 40px',
                                    position: 'relative',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                    boxSizing: 'border-box',
                                    textAlign: 'center',
                                    marginBottom: 60
                                }}>
                                    {/* Hoa văn góc hoàng gia */}
                                    <div style={{ position: 'absolute', top: 15, left: 15, width: 40, height: 40, borderTop: '2px solid #C9A227', borderLeft: '2px solid #C9A227' }} />
                                    <div style={{ position: 'absolute', top: 15, right: 15, width: 40, height: 40, borderTop: '2px solid #C9A227', borderRight: '2px solid #C9A227' }} />
                                    <div style={{ position: 'absolute', bottom: 15, left: 15, width: 40, height: 40, borderBottom: '2px solid #C9A227', borderLeft: '2px solid #C9A227' }} />
                                    <div style={{ position: 'absolute', bottom: 15, right: 15, width: 40, height: 40, borderBottom: '2px solid #C9A227', borderRight: '2px solid #C9A227' }} />

                                    {/* Quốc huy / Logo cách điệu */}
                                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: '50%', border: '2px solid #8B2323', background: '#8B2323', color: 'white', marginBottom: 20, boxShadow: '0 4px 10px rgba(139,35,35,0.2)' }}>
                                        <Award size={36} />
                                    </div>

                                    <h5 style={{ margin: '0 0 8px 0', fontSize: '0.75rem', letterSpacing: '0.3em', color: '#8B2323', fontWeight: 900, textTransform: 'uppercase' }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h5>
                                    <h6 className="classic-text" style={{ margin: '0 0 30px 0', fontSize: '0.85rem', letterSpacing: '0.15em', color: '#1A1A1A', fontWeight: 600 }}>Độc lập - Tự do - Hạnh phúc</h6>

                                    <div style={{ width: 100, height: 1, background: '#C9A227', margin: '0 auto 30px' }} />

                                    <h2 className="quiz-title" style={{ fontSize: '2.5rem', color: '#C9A227', margin: '0 0 10px 0', fontWeight: 900, textShadow: '1px 1px 0 rgba(0,0,0,0.1)' }}>CHỨNG NHẬN LIÊM CHÍNH</h2>
                                    <p style={{ margin: '0 0 35px 0', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#8B2323', fontWeight: 800 }}>MỘT TRONG NĂM PHẨM CHẤT CỐT LÕI CỦA CÔNG DÂN</p>

                                    <p style={{ fontFamily: "'Lora', 'Times New Roman', serif", fontSize: '1.15rem', color: '#333', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px' }}>
                                        Trân trọng vinh danh Người học đã hoàn thành xuất sắc Thử Thách Trắc Nghiệm <strong style={{ color: '#8B2323' }}>“Đấu Trường Thanh Liêm”</strong>, chứng minh năng lực nhận thức sâu sắc về Chuyên đề Phòng, Chống Tham Nhũng và đạo đức Liêm chính.
                                    </p>

                                    {/* Bảng điểm */}
                                    <div style={{ display: 'inline-flex', gap: 40, border: '1px dashed #C9A227', padding: '16px 40px', borderRadius: 4, background: '#FFFDF9', marginBottom: 40 }}>
                                        <div style={{ textAlign: 'left' }}>
                                            <span style={{ fontSize: '0.65rem', color: '#888', display: 'block', fontWeight: 700 }}>ĐIỂM SỐ ĐẠT</span>
                                            <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#8B2323' }}>{score} / 10 Đúng</span>
                                        </div>
                                        <div style={{ width: 1, background: 'rgba(201,162,39,0.3)' }} />
                                        <div style={{ textAlign: 'left' }}>
                                            <span style={{ fontSize: '0.65rem', color: '#888', display: 'block', fontWeight: 700 }}>PHÂN HẠNG</span>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#2D4A3E' }}>{verdict.rank}</span>
                                        </div>
                                    </div>

                                    {/* Chữ ký & Ngày tháng */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 650, margin: '40px auto 0', padding: '0 20px' }}>
                                        <div style={{ textAlign: 'left', fontSize: '0.75rem', color: '#666' }}>
                                            <span>Mã chứng nhận: <strong>TL-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
                                            <br />
                                            <span>Ngày cấp: <strong>27/05/2026</strong></span>
                                        </div>

                                        <div style={{ textAlign: 'center', width: 200 }}>
                                            <span style={{ fontSize: '0.75rem', color: '#1A1A1A', fontWeight: 700, display: 'block', marginBottom: 50 }}>CỐ VẤN THANH LIÊM</span>
                                            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.1rem', color: '#8B2323', fontWeight: 700 }}>Ký Tên</div>
                                            <div style={{ width: 120, height: 1, background: 'rgba(0,0,0,0.15)', margin: '5px auto 0' }} />
                                        </div>
                                    </div>

                                    {/* Watermark in chìm */}
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.02, fontSize: '12rem', fontWeight: 900, fontFamily: "'Playfair Display', serif", pointerEvents: 'none', userSelect: 'none', color: '#8B2323' }}>
                                        LIÊM
                                    </div>
                                </div>

                            <p className="no-print" style={{ fontSize: '0.78rem', color: '#aaa', fontStyle: 'italic', textAlign: 'center', margin: '12px auto 60px', maxWidth: 560, lineHeight: 1.7 }}>
                                ⚠️ Bằng này chỉ mang tính khích lệ tinh thần học tập, không có giá trị pháp lý, học bạ hay bất kỳ hiệu lực chính thức nào.
                            </p>
                            </>
                            ) : (
                                <div style={{
                                    width: '100%',
                                    maxWidth: 800,
                                    background: '#FFF',
                                    border: '1px solid rgba(139, 35, 35, 0.2)',
                                    padding: '40px',
                                    textAlign: 'center',
                                    color: '#666',
                                    borderRadius: 4,
                                    marginBottom: 60
                                }}>
                                    <Award size={48} color="#888" style={{ marginBottom: 15, opacity: 0.6 }} />
                                    <h4 className="quiz-title" style={{ fontSize: '1.3rem', color: '#1A1A1A', marginBottom: 10 }}>Chưa Đủ Điều Kiện Nhận Bằng</h4>
                                    <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Bạn cần trả lời đúng tối thiểu 5 câu để nhận Giấy Chứng Nhận Thanh Liêm. Đừng nản lòng, tri thức phòng chống tham nhũng rất bổ ích, hãy ôn lại và thử lại nhé!</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

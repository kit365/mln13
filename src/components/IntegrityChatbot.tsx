import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, BookOpen, RotateCcw, Sparkles } from 'lucide-react';

// --- 1. HỘI THOẠI & TRI THỨC BÀI HỌC (TIẾT 16 & 17) ---
interface LessonDoc {
  id: string;
  category: 'khai_niem' | 'hanh_vi' | 'nguyen_nhan' | 'tac_hai' | 'trach_nhiem' | 'thanh_tra';
  keywords: string[];
  title: string;
  content: string;
  significance?: string;
  slideRef: string;
}

const lessonKnowledge: LessonDoc[] = [
  {
    id: 'khai-niem-tham-nhung',
    category: 'khai_niem',
    keywords: ['dinh nghia tham nhung', 'khai niem', 'tham nhung la gi', 'vu loi', 'chuc vu', 'quyen han', 'nhan dien tham nhung'],
    title: 'Khái niệm về Tham Nhũng & Vụ Lợi',
    content: `Theo Luật Phòng, chống tham nhũng và **Tiết 16 (Slide 4)**:
• **Tham nhũng** là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.
• **Người có chức vụ, quyền hạn**: Là người do bổ nhiệm, bầu cử, tuyển dụng, hợp đồng hoặc một hình thức khác, có hưởng lương hoặc không hưởng lương, được giao thực hiện nhiệm vụ, công vụ nhất định và có quyền hạn nhất định trong khi thực hiện công vụ.
• **Vụ lợi**: Là việc người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn nhằm đạt được lợi ích vật chất hoặc phi vật chất không chính đáng.`,
    significance: '"Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ... Nó là giặc nội xâm." - Chủ tịch Hồ Chí Minh',
    slideRef: 'Tiết 16 - Slide 4'
  },
  {
    id: 'cac-hanh-vi-tham-nhung',
    category: 'hanh_vi',
    keywords: ['hanh vi tham nhung', 'cac hanh vi', 'nhan hoi lo', 'tham o', 'lam dung', 'lam quyen', 'nhung nhieu', 'gia mao'],
    title: 'Các Hành Vi Tham Nhũng Điển Hình',
    content: `Theo **Tiết 16 (Slide 5 & 6)**, các hành vi tham nhũng trong khu vực nhà nước bao gồm:
• **Tham ô tài sản** & **Nhận hối lộ**.
• **Lạm dụng chức vụ, quyền hạn** để chiếm đoạt tài sản.
• **Lợi dụng hoặc Lạm quyền** trong khi thi hành nhiệm vụ, công vụ vì vụ lợi.
• **Lợi dụng chức vụ, quyền hạn** gây ảnh hưởng đối với người khác để trục lợi.
• **Giả mạo trong công tác** vì vụ lợi.
• **Đưa hối lộ, môi giới hối lộ** để giải quyết công việc vì vụ lợi.
• **Sử dụng trái phép tài sản công** vì vụ lợi.
• **Nhũng nhiễu** vì vụ lợi.
• **Không thực hiện hoặc thực hiện không đúng** nhiệm vụ, công vụ vì vụ lợi.
• **Bao che cho người vi phạm** hoặc can thiệp trái pháp luật vào việc thanh tra, kiểm tra, điều tra, xét xử, thi hành án vì vụ lợi.`,
    slideRef: 'Tiết 16 - Slide 5, 6'
  },
  {
    id: 'nguyen-nhan-chu-quan',
    category: 'nguyen_nhan',
    keywords: ['nguyen nhan chu quan', 'chu quan', 'slide 7'],
    title: 'Nguyên Nhân Chủ Quan Dẫn Đến Tham Nhũng',
    content: `Theo **Tiết 16 (Slide 7)**, các nguyên nhân chủ quan bao gồm:
• **Tổ chức, hoạt động, phân hóa chức năng** của hệ thống chính trị nói chung còn nhiều khuyết điểm.
• **Cơ chế, chính sách, pháp luật** chưa hoàn thiện.
• **Người đứng đầu các tổ chức** chưa nhận thức đầy đủ về tham nhũng.
• **Chưa phân hóa rõ nhiệm vụ** của hệ thống cơ quan chuyên trách về phòng, chống tham nhũng.
• **Pháp luật tham nhũng** chưa đủ mạnh, hữu hiệu.
• **Công tác tuyên truyền** mang tính phong trào.`,
    slideRef: 'Tiết 16 - Slide 7'
  },
  {
    id: 'nguyen-nhan-khach-quan',
    category: 'nguyen_nhan',
    keywords: ['nguyen nhan khach quan', 'khach quan', 'slide 8', 'slide 9'],
    title: 'Nguyên Nhân Khách Quan Dẫn Đến Tham Nhũng',
    content: `Theo **Tiết 16 (Slide 8 & 9)**, các nguyên nhân khách quan bao gồm:
• **Thứ nhất:** Tác động của mặt trái nền kinh tế thị trường và quá trình toàn cầu hóa, hội nhập quốc tế.
• **Thứ hai:** Do hệ thống chính sách, pháp luật ở nước ta thiếu đồng bộ và nhất quán. Thể chế, chính sách về quản lý kinh tế - xã hội trên nhiều lĩnh vực vẫn còn bất cập.
• **Thứ ba:** Công tác quản lý nhà nước trên một số lĩnh vực còn chưa chặt chẽ, hiệu quả.
• **Thứ tư:** Công tác quản lý cán bộ, đảng viên, công chức, viên chức còn hạn chế.
• **Thứ năm:** Công tác phòng chống tham nhũng (PCTN) đã được lãnh đạo, chỉ đạo quyết liệt, toàn diện đạt được kết quả quan trọng, song *“công tác PCTN tại một số địa phương, bộ, ngành chuyển biến chưa rõ rệt, trách nhiệm của người đứng đầu đối với công tác PCTN chưa được đề cao”*.
• **Thứ sáu:** Sự suy thoái về phẩm chất và đạo đức của con người, từ lòng tham, sự ích kỷ của những người được coi là có quyền lực trong xã hội, họ đã lợi dụng quyền hạn của mình để vụ lợi một cách bất hợp pháp và không chính đáng.`,
    slideRef: 'Tiết 16 - Slide 8, 9'
  },
  {
    id: 'ca-hai-nguyen-nhan',
    category: 'nguyen_nhan',
    keywords: ['ca hai nguyen nhan', 'ca hai', 'xem ca hai nguyen nhan'],
    title: 'Cả Hai Nhóm Nguyên Nhân Dẫn Đến Tham Nhũng',
    content: `Theo tài liệu **Tiết 16 (Slide 7, 8 & 9)**:

### 1. Nguyên nhân chủ quan (Slide 7)
• **Tổ chức, hoạt động, phân hóa chức năng** của hệ thống chính trị nói chung còn nhiều khuyết điểm.
• **Cơ chế, chính sách, pháp luật** chưa hoàn thiện.
• **Người đứng đầu các tổ chức** chưa nhận thức đầy đủ về tham nhũng.
• **Chưa phân hóa rõ nhiệm vụ** của hệ thống cơ quan chuyên trách về phòng, chống tham nhũng.
• **Pháp luật tham nhũng** chưa đủ mạnh, hữu hiệu.
• **Công tác tuyên truyền** mang tính phong trào.

### 2. Nguyên nhân khách quan (Slide 8 & 9)
• **Thứ nhất:** Tác động của mặt trái nền kinh tế thị trường và quá trình toàn cầu hóa, hội nhập quốc tế.
• **Thứ hai:** Do hệ thống chính sách, pháp luật ở nước ta thiếu đồng bộ và nhất quán. Thể chế, chính sách về quản lý kinh tế - xã hội trên nhiều lĩnh vực vẫn còn bất cập.
• **Thứ ba:** Công tác quản lý nhà nước trên một số lĩnh vực còn chưa chặt chẽ, hiệu quả.
• **Thứ tư:** Công tác quản lý cán bộ, đảng viên, công chức, viên chức còn hạn chế.
• **Thứ năm:** Công tác phòng chống tham nhũng (PCTN) đã được lãnh đạo, chỉ đạo quyết liệt, toàn diện đạt được kết quả quan trọng, song *“công tác PCTN tại một số địa phương, bộ, ngành chuyển biến chưa rõ rệt, trách nhiệm của người đứng đầu đối với công tác PCTN chưa được đề cao”*.
• **Thứ sáu:** Sự suy thoái về phẩm chất và đạo đức của con người, từ lòng tham, sự ích kỷ của những người được coi là có quyền lực trong xã hội, họ đã lợi dụng quyền hạn của mình để vụ lợi một cách bất hợp pháp và không chính đáng.`,
    slideRef: 'Tiết 16 - Slide 7, 8, 9'
  },
  {
    id: 'tac-hai-tham-nhung',
    category: 'tac_hai',
    keywords: ['tac hai', 'hau qua', 'chinh tri', 'kinh te', 'xa hoi', 'dao duc', 'van hoa', 'tac dong', 'nguy hai'],
    title: 'Tác Hại Đa Chiều Của Tham Nhũng',
    content: `Theo **Tiết 16 (Slide 10, 11 & 12)**, tham nhũng tàn phá trên 5 phương diện cực kỳ nghiêm trọng:
1. **Chính trị**: Vi phạm Hiến pháp, Điều lệ Đảng; làm xói mòn lòng tin của nhân dân đối với Đảng và sự lãnh đạo của Nhà nước.
2. **Kinh tế**: Trực tiếp/gián tiếp làm thất thoát lớn tài sản công; cản trở hoạt động sản xuất kinh doanh lành mạnh, làm méo mó thị trường kinh tế.
3. **Xã hội**: Làm gia tăng khoảng cách giàu nghèo sâu sắc; trật tự an ninh xã hội diễn biến phức tạp, cản trở xã hội tiến bộ công bằng.
4. **Văn hóa**: Làm suy đồi văn hóa ứng xử công cộng; rào cản lớn đối với việc cải cách tư pháp và xây dựng Nhà nước pháp quyền.
5. **Đạo đức**: Là hành vi bất nhân, bất nghĩa, bất tín, bất hiếu, bất trung; đi ngược lại hoàn toàn đạo đức cách mạng của người cán bộ cách mạng.`,
    slideRef: 'Tiết 16 - Slide 10, 11, 12'
  },
  {
    id: 'trach-nhiem-cong-dan',
    category: 'trach_nhiem',
    keywords: ['trach nhiem', 'nghia vu', 'quyen cua cong dan', 'to cao', 'to giac', 'bao tin', 'khen thuong', 'bao ve'],
    title: 'Trách Nhiệm & Quyền Hạn Của Công Dân',
    content: `Theo **Tiết 17 (Slide 3, 4, 5 & 7)**, công dân có trách nhiệm và quyền lợi sau trong công cuộc phòng, chống tham nhũng:
• **Chấp hành nghiêm chỉnh** mọi quy định của pháp luật về phòng chống tham nhũng.
• **Quyền phát hiện, phản ánh, tố cáo, tố giác**, báo tin về hành vi có dấu hiệu tham nhũng.
• **Quyền được bảo vệ & khen thưởng**: Người tố cáo khách quan, trung thực được nhà nước bảo vệ an toàn khi bị đe dọa, trả thù hoặc trù dập, đồng thời được khen thưởng xứng đáng.
• **Nghĩa vụ hợp tác, giúp đỡ**: Hợp tác tích cực với cơ quan, tổ chức có thẩm quyền trong việc điều tra làm rõ tham nhũng.
• **Yêu cầu khi tố cáo**: Phải nêu rõ họ tên, địa chỉ, nội dung tố cáo rõ ràng và cung cấp các thông tin, tài liệu liên quan mà mình thu thập được.`,
    slideRef: 'Tiết 17 - Slide 3, 4, 5, 7'
  },
  {
    id: 'ban-thanh-tra-nhan-dan',
    category: 'thanh_tra',
    keywords: ['ban thanh tra', 'thanh tra nhan dan', 'giam sat', 'phan anh', 'kien nghi', 'ubnd'],
    title: 'Giám Sát Qua Ban Thanh Tra Nhân Dân',
    content: `Theo **Tiết 17 (Slide 6, 8 & 9)**, cơ chế giám sát thực thi pháp luật của công dân gồm:
• **Thực hiện quyền giám sát**: Công dân thực hiện quyền giám sát trực tiếp hoặc thông qua hoạt động của **Ban thanh tra nhân dân** tại cơ sở.
• **Trách nhiệm của Ban thanh tra**:
  - Tiếp nhận ý kiến phản ánh về hành vi có dấu hiệu tham nhũng của nhân dân, người lao động.
  - Xem xét và **kiến nghị trực tiếp Chủ tịch UBND xã, phường, thị trấn** hoặc người đứng đầu cơ quan nhà nước, đơn vị sự nghiệp, doanh nghiệp nhà nước giải quyết.
  - **Giám sát chặt chẽ** quá trình giải quyết kiến nghị đó.
• **Yêu cầu phản ánh**: Việc phản ánh, báo cáo của cán bộ, nhân dân về hành vi có dấu hiệu tham nhũng phải bảo đảm khách quan, trung thực.
• **Kiến nghị pháp luật**: Công dân có quyền kiến nghị cơ quan nhà nước hoàn thiện pháp luật về PCTN và trực tiếp giám sát quá trình thi hành pháp luật.`,
    slideRef: 'Tiết 17 - Slide 6, 8, 9'
  }
];

// --- 2. BỘ ĐỆM XỬ LÝ KHÔNG DẤU TIẾNG VIỆT ---
function removeVietnameseTones(str: string): string {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'a');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'e');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'i');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'o');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'u');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'y');
  str = str.replace(/Đ/g, 'd');
  
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
}

// --- 3. ÂM THANH MÔ PHỎNG (WEB AUDIO API) ---
const playSoftTick = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {
    // Ignore autoplay blocked
  }
};

const playPaperRustle = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const bufferSize = audioCtx.sampleRate * 0.15;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000;
    filter.Q.value = 1.0;

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noise.start();
    noise.stop(audioCtx.currentTime + 0.15);
  } catch (e) {
    // Ignore
  }
};

// --- 4. CẤU PHẦN CHÍNH ---
interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  docRef?: string;
  significance?: string;
  suggestions?: string[];
  isTyping?: boolean;
}

export function IntegrityChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Theo dõi sự thay đổi kích thước cửa sổ để co giãn giao diện chatbot
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Khởi tạo tin nhắn chào mừng
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: `Chào mừng bạn đến với chuyên mục hỗ trợ học tập! Tôi là **Cố Vấn Thanh Liêm**. 📜

Tôi có thể giải đáp chi tiết tất cả các nội dung xoay quanh tài liệu:
• **Tiết 16: Tác hại của tham nhũng**
• **Tiết 17: Trách nhiệm của công dân**

🌐 **[Tải Slide bài giảng chính thức tại đây!](https://drive.google.com/drive/folders/1QupRI2q9CcG8rycs1V7Hqd1iGvfzv1Q5)** ↗

Bạn có thể tự gõ câu hỏi hoặc lựa chọn các gợi ý nhanh bên dưới nhé!`,
        suggestions: [
          'Khái niệm tham nhũng là gì?',
          'Tham nhũng gồm các hành vi nào?',
          'Tác hại về đạo đức cách mạng?',
          'Nguyên nhân chủ quan & khách quan?',
          'Nghĩa vụ tố cáo của công dân?',
          'Ban thanh tra nhân dân có vai trò gì?'
        ]
      }
    ]);
  }, []);

  // Tự động cuộn xuống dưới
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    playSoftTick();

    const userMsgId = 'user-' + Date.now();
    const newMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: queryText
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    const cleanedQuery = removeVietnameseTones(queryText);

    // Xử lý các câu hỏi về danh tính, tên của Cố vấn hoặc lời chào trước tiên
    const greetingKeywords = ['chao', 'xin chao', 'hello', 'hi', 'ai do', 'chao ban'];
    const isGreeting = greetingKeywords.some(kw => {
      const cleanedKw = removeVietnameseTones(kw);
      if (cleanedKw === 'hi') {
        return cleanedQuery === 'hi' || cleanedQuery.startsWith('hi ') || cleanedQuery.endsWith(' hi') || cleanedQuery.includes(' hi ');
      }
      if (cleanedKw === 'chao') {
        return cleanedQuery === 'chao' || cleanedQuery.startsWith('chao ') || cleanedQuery.endsWith(' chao') || cleanedQuery.includes(' chao ');
      }
      return cleanedQuery === cleanedKw || cleanedQuery.includes(cleanedKw);
    });

    const isBotSubject = cleanedQuery.includes('ban') || cleanedQuery.includes('co van') || cleanedQuery.includes('tro ly') || cleanedQuery.includes('may');
    const isIdentityQuestion = (cleanedQuery.includes('la ai') || cleanedQuery.includes('la gi') || cleanedQuery.includes('ten gi') || cleanedQuery.includes('ten la gi')) && isBotSubject;
    const isDirectName = cleanedQuery.includes('co van thanh liem');

    const isIdentityQuery = isGreeting || isIdentityQuestion || isDirectName;

    if (isIdentityQuery) {
      setTimeout(() => {
        playPaperRustle();
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-identity-' + Date.now(),
            sender: 'bot',
            text: `Tôi là **Cố Vấn Thanh Liêm**, trợ lý ảo đồng hành học tập trực tuyến về nội dung phòng, chống tham nhũng (Tiết 16 & Tiết 17). 📜\n\nTôi có thể giúp bạn tra cứu nhanh các khía cạnh chính luận như định nghĩa tham nhũng, các hành vi tham nhũng, nguyên nhân, tác hại đa chiều và trách nhiệm công dân. Hãy đặt câu hỏi hoặc chọn gợi ý bên dưới nhé!`,
            suggestions: [
              'Khái niệm tham nhũng là gì?',
              'Tham nhũng gồm các hành vi nào?',
              'Tác hại về đạo đức cách mạng?',
              'Nghĩa vụ tố cáo của công dân?'
            ]
          }
        ]);
      }, 1200);
      return;
    }

    const isCauseQuery = cleanedQuery.includes('nguyen nhan') || cleanedQuery.includes('tai sao co tham nhung') || cleanedQuery.includes('ly do co tham nhung');
    const isSpecificCause = cleanedQuery.includes('chu quan') || cleanedQuery.includes('khach quan') || cleanedQuery.includes('ca hai');

    if (isCauseQuery && !isSpecificCause) {
      setTimeout(() => {
        playPaperRustle();
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-causes-prompt-' + Date.now(),
            sender: 'bot',
            text: `Đối với **Nguyên nhân dẫn đến tham nhũng (Tiết 16 - Slide 7, 8 & 9)**, tài liệu giảng dạy được phân chia rất chi tiết thành hai nhóm.

Bạn muốn tìm hiểu về nhóm nguyên nhân nào dưới đây?`,
            suggestions: [
              'Nguyên nhân Chủ quan',
              'Nguyên nhân Khách quan',
              'Xem cả hai nguyên nhân'
            ]
          }
        ]);
      }, 1200);
      return;
    }

    setTimeout(() => {
      let bestMatch: LessonDoc | null = null;
      let maxScore = 0;

      lessonKnowledge.forEach((doc) => {
        let score = 0;
        doc.keywords.forEach((kw) => {
          const cleanedKw = removeVietnameseTones(kw);
          if (cleanedQuery.includes(cleanedKw)) {
            score += kw.split(' ').length * 3;
          }
        });

        const docTitleClean = removeVietnameseTones(doc.title);
        cleanedQuery.split(' ').forEach((word) => {
          if (word.length > 2 && docTitleClean.includes(word)) {
            score += 1;
          }
        });

        if (score > maxScore) {
          maxScore = score;
          bestMatch = doc;
        }
      });

      playPaperRustle();
      setIsTyping(false);

      if (bestMatch && maxScore > 2) {
        const doc: LessonDoc = bestMatch;
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-' + Date.now(),
            sender: 'bot',
            text: `### ${doc.title}\n\n${doc.content}`,
            docRef: doc.slideRef,
            significance: doc.significance,
            suggestions: lessonKnowledge
              .filter((d) => d.id !== doc.id)
              .map((d) => d.title)
              .slice(0, 3)
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-fallback-' + Date.now(),
            sender: 'bot',
            text: `Tôi **không hiểu** câu hỏi này hoặc chủ đề bạn hỏi nằm ngoài phạm vi tài liệu **Tiết 16 & Tiết 17** về Phòng, chống tham nhũng. 📜

Nhưng bạn đừng lo, hãy thử tra cứu các câu hỏi học tập gợi ý dưới đây:`,
            suggestions: [
              'Khái niệm tham nhũng là gì?',
              'Tham nhũng gồm các hành vi nào?',
              'Tác hại về đạo đức cách mạng?',
              'Nghĩa vụ tố cáo của công dân?'
            ]
          }
        ]);
      }
    }, 1200);
  };

  const handleResetChat = () => {
    playPaperRustle();
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'bot',
        text: `Chào mừng bạn trở lại! Tôi là **Cố Vấn Thanh Liêm**. 📜

Tôi đã sẵn sàng hỗ trợ bạn tra cứu về:
• **Tiết 16: Tác hại của tham nhũng**
• **Tiết 17: Trách nhiệm của công dân**

🌐 **[Tải Slide bài giảng chính thức tại đây!](https://drive.google.com/drive/folders/1QupRI2q9CcG8rycs1V7Hqd1iGvfzv1Q5)** ↗

Hãy để lại câu hỏi của bạn bên dưới!`,
        suggestions: [
          'Khái niệm tham nhũng là gì?',
          'Tham nhũng gồm các hành vi nào?',
          'Tác hại về đạo đức cách mạng?',
          'Nguyên nhân chủ quan & khách quan?',
          'Nghĩa vụ tố cáo của công dân?',
          'Ban thanh tra nhân dân có vai trò gì?'
        ]
      }
    ]);
  };

  const toggleChat = () => {
    playSoftTick();
    setIsOpen(!isOpen);
  };

  const renderMessageText = (text: string, sender: 'user' | 'bot') => {
    const parseLinks = (str: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let lastIndex = 0;
      let match;
      
      while ((match = linkRegex.exec(str)) !== null) {
        if (match.index > lastIndex) {
          parts.push(str.substring(lastIndex, match.index));
        }
        parts.push(
          <a
            key={`link-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: sender === 'user' ? '#FFE18A' : '#8B2323',
              textDecoration: 'underline',
              fontWeight: 'bold',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {match[1]}
          </a>
        );
        lastIndex = linkRegex.lastIndex;
      }
      
      if (lastIndex < str.length) {
        parts.push(str.substring(lastIndex));
      }
      
      return parts.length > 0 ? parts : [str];
    };

    const parseBold = (str: string): React.ReactNode[] => {
      const parts: React.ReactNode[] = [];
      const boldRegex = /\*\*([^*]+)\*\*/g;
      let lastIndex = 0;
      let match;
      
      while ((match = boldRegex.exec(str)) !== null) {
        if (match.index > lastIndex) {
          parts.push(...parseLinks(str.substring(lastIndex, match.index)));
        }
        parts.push(
          <strong key={`bold-${match.index}`} style={{ color: sender === 'user' ? '#FFE18A' : '#8B2323', fontWeight: 'bold' }}>
            {parseLinks(match[1])}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      
      if (lastIndex < str.length) {
        parts.push(...parseLinks(str.substring(lastIndex)));
      }
      
      return parts.length > 0 ? parts : [str];
    };

    return text.split('\n').map((line, idx) => {
      let formatted = line;
      
      if (formatted.startsWith('### ')) {
        return (
          <h4
            key={idx}
            style={{
              fontFamily: "'Playfair Display', serif",
              color: sender === 'user' ? '#FFE18A' : '#8B2323',
              fontSize: '16px',
              fontWeight: 'bold',
              marginTop: '8px',
              marginBottom: '12px',
              borderBottom: sender === 'user' ? '1px solid rgba(255, 225, 138, 0.2)' : '1px solid rgba(139, 35, 35, 0.15)',
              paddingBottom: '4px'
            }}
          >
            {parseBold(formatted.replace('### ', ''))}
          </h4>
        );
      }

      return (
        <p key={idx} style={{ marginBottom: '8px', textAlign: 'justify', lineHeight: '1.6', margin: '0 0 8px 0' }}>
          {parseBold(formatted)}
        </p>
      );
    });
  };

  return (
    <>
      <style>{`
        /* Custom vintage scrollbar for chatbot chat panel */
        .chat-body-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .chat-body-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.02);
        }
        .chat-body-scroll::-webkit-scrollbar-thumb {
          background: rgba(139, 35, 35, 0.22);
          border-radius: 3px;
        }
        .chat-body-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 35, 35, 0.45);
        }

        /* Pulsing light behind vintage icon trigger */
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.4); }
          70% { box-shadow: 0 0 0 12px rgba(201, 162, 39, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
        }
        .pulse-trigger {
          animation: pulse-gold 2.5s infinite;
        }
      `}</style>

      {/* --- FLOATING TRIGGER BUTTON (PURE INLINE STYLES) --- */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '32px',
          zIndex: 99999,
          display: 'flex',
          height: '56px',
          width: '56px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: isOpen ? '2px solid white' : '2px solid #C9A227',
          backgroundColor: isOpen ? '#8B2323' : '#F4F1EA',
          color: isOpen ? 'white' : '#8B2323',
          boxShadow: '0 10px 30px rgba(45, 26, 26, 0.25)',
          transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          cursor: 'pointer',
          outline: 'none',
          padding: 0
        }}
        className="pulse-trigger"
        aria-label="Kích hoạt Cố Vấn Thanh Liêm"
      >
        {isOpen ? <X style={{ width: '24px', height: '24px' }} /> : <MessageSquare style={{ width: '24px', height: '24px' }} />}
      </button>

      {/* --- CHAT DIALOG PANEL (PURE INLINE STYLES) --- */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: isMobile ? '0px' : '168px',
            right: isMobile ? '0px' : '32px',
            zIndex: 99998,
            display: 'flex',
            width: isMobile ? '100vw' : '380px',
            maxWidth: isMobile ? '100vw' : 'calc(100vw - 64px)',
            height: isMobile ? '100vh' : '520px',
            flexDirection: 'column',
            borderRadius: isMobile ? '0px' : '12px',
            border: isMobile ? 'none' : '1px solid rgba(201, 162, 39, 0.4)',
            backgroundColor: '#F4F1EA',
            boxShadow: '0 25px 60px rgba(45, 26, 26, 0.22)',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
            fontFamily: "'Manrope', sans-serif",
            backgroundImage: 'radial-gradient(circle, #F9F7F1 0%, #EFEBE0 100%)'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'linear-gradient(90deg, #8B2323 0%, #5C2230 100%)',
              padding: '14px 16px',
              borderBottom: '2px solid #C9A227',
              color: 'white',
              flexShrink: 0
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  height: '32px',
                  width: '32px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <BookOpen style={{ height: '16px', width: '16px', color: '#C9A227' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '15px',
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    color: '#F9F7F1',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Cố Vấn Thanh Liêm <Sparkles style={{ height: '12px', width: '12px', color: '#C9A227' }} className="animate-pulse" />
                </h3>
                <span
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    color: 'rgba(244, 241, 234, 0.8)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '-2px',
                    textAlign: 'left'
                  }}
                >
                  Trợ Lý Bài Học Tiết 16 & 17
                </span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={handleResetChat}
                style={{
                  padding: '6px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Làm mới cuộc hội thoại"
              >
                <RotateCcw style={{ height: '16px', width: '16px' }} />
              </button>
              <button
                onClick={toggleChat}
                style={{
                  padding: '6px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                title="Đóng bảng cố vấn"
              >
                <X style={{ height: '16px', width: '16px' }} />
              </button>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div
            className="chat-body-scroll"
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  width: '100%'
                }}
              >
                {/* Bubble */}
                <div
                  style={{
                    borderRadius: '8px',
                    borderTopRightRadius: msg.sender === 'user' ? '0px' : '8px',
                    borderTopLeftRadius: msg.sender === 'bot' ? '0px' : '8px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    maxWidth: '85%',
                    boxShadow: '0 2px 8px rgba(45, 26, 26, 0.05)',
                    border: msg.sender === 'user' ? '1px solid #8B2323' : '1px solid #E8E2D2',
                    background: msg.sender === 'user' 
                      ? 'linear-gradient(135deg, #8B2323 0%, #701E1E 100%)' 
                      : 'white',
                    color: msg.sender === 'user' ? 'white' : '#2D1A1A'
                  }}
                >
                  {renderMessageText(msg.text, msg.sender)}

                  {msg.docRef && (
                    <a
                      href="https://drive.google.com/drive/folders/1QupRI2q9CcG8rycs1V7Hqd1iGvfzv1Q5"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: msg.sender === 'user' ? '#FFE18A' : '#8B2323',
                        backgroundColor: msg.sender === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(139,35,35,0.06)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: msg.sender === 'user' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(139,35,35,0.12)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease-in-out'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.85';
                        e.currentTarget.style.backgroundColor = msg.sender === 'user' ? 'rgba(255,255,255,0.15)' : 'rgba(139,35,35,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.backgroundColor = msg.sender === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(139,35,35,0.06)';
                      }}
                      title="Nhấn để tải Slide bài giảng chính thức"
                    >
                      <BookOpen style={{ height: '12px', width: '12px' }} />
                      Nguồn bài giảng: {msg.docRef} ↗
                    </a>
                  )}

                  {msg.significance && (
                    <div
                      style={{
                        marginTop: '12px',
                        borderTop: '1px dashed rgba(201, 162, 39, 0.3)',
                        paddingTop: '8px',
                        fontSize: '11.5px',
                        fontStyle: 'italic',
                        color: msg.sender === 'user' ? '#EFEBE0' : '#6B5618',
                        lineHeight: 1.45,
                        textAlign: 'left'
                      }}
                    >
                      {msg.significance}
                    </div>
                  )}
                </div>

                {/* Suggestions bubbles */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: '10px',
                      maxWidth: '95%'
                    }}
                  >
                    {msg.suggestions.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuery(sug)}
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#8B2323',
                          backgroundColor: 'white',
                          border: '1px solid rgba(139, 35, 35, 0.25)',
                          padding: '5px 12px',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
                          outline: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#8B2323';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = '#8B2323';
                        }}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <div
                  style={{
                    borderRadius: '8px',
                    borderTopLeftRadius: '0px',
                    background: 'white',
                    border: '1px solid #E8E2D2',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 16px',
                    gap: '4px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B2323' }} className="animate-pulse" />
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B2323' }} className="animate-pulse" />
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8B2323' }} className="animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Form Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery(inputValue);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid rgba(201, 162, 39, 0.25)',
              padding: '12px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              zIndex: 10,
              flexShrink: 0
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Đặt câu hỏi về Tiết 16 hoặc Tiết 17..."
              style={{
                flex: 1,
                borderRadius: '6px',
                border: '1px solid rgba(201, 162, 39, 0.3)',
                backgroundColor: '#FBF9F5',
                padding: '8px 12px',
                fontSize: '13px',
                color: '#2D1A1A',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
                outline: 'none',
                transition: 'all 0.2s',
                fontFamily: "'Manrope', sans-serif"
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#8B2323';
                e.currentTarget.style.backgroundColor = 'white';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 162, 39, 0.3)';
                e.currentTarget.style.backgroundColor = '#FBF9F5';
              }}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              style={{
                display: 'flex',
                height: '36px',
                width: '36px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                backgroundColor: (!inputValue.trim() || isTyping) ? '#ccc' : '#8B2323',
                color: 'white',
                border: 'none',
                cursor: (!inputValue.trim() || isTyping) ? 'not-allowed' : 'pointer',
                opacity: (!inputValue.trim() || isTyping) ? 0.5 : 1,
                transition: 'all 0.2s',
                flexShrink: 0
              }}
              title="Gửi câu hỏi"
            >
              <Send style={{ height: '16px', width: '16px' }} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

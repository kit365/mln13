import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Minimize2, Trophy } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline';
import { Consequences } from './components/Consequences';
import { Footer } from './components/Footer';
import { Conclusion } from './components/Conclusion';
import { Responsibilities } from './components/Responsibilities';
import { FloatingLotus } from './components/FloatingLotus';
import { GoldenOpportunity } from './components/GoldenOpportunity';
import { CustomCursor } from './components/CustomCursor';
import { IntegrityQuiz } from './components/IntegrityQuiz';
import { ImageGallery } from './components/ImageGallery';
import { Soundscape } from './components/Soundscape';
import { IntegrityChatbot } from './components/IntegrityChatbot';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPresenting, setIsPresenting] = useState(false);
  const [presentationIndex, setPresentationIndex] = useState(0);

  const { scrollYProgress } = useScroll();

  // Scroll reveal logic and active section spy
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('section, main > div').forEach(section => {
      section.classList.add('section-reveal');
      sectionObserver.observe(section);
      if (section.id) {
        activeObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);



  const scrollToSection = (id: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Mở Đầu' },
    { id: 'gioi-thieu', label: 'Đặt Vấn Đề' },
    { id: 'hau-qua', label: 'Hậu Quả' },
    { id: 'lich-su', label: 'Lịch Sử' },
    { id: 'thoi-co', label: 'Trận Tuyến' },
    { id: 'trach-nhiem', label: 'Trách Nhiệm' },
    { id: 'ket-luan', label: 'Tổng Kết' },
  ];

  const presentationSlides = [
    <Hero isPresenting />,
    <Introduction />,
    <Consequences />,
    <Timeline />,
    <GoldenOpportunity />,
    <Responsibilities />,
    <Conclusion />,
  ];

  const goToSlide = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, navItems.length - 1));

    if (isPresenting) {
      setPresentationIndex(nextIndex);
      return;
    }

    scrollToSection(navItems[nextIndex].id);
  };

  const exitPresentation = async () => {
    setIsPresenting(false);
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    }
  };

  useEffect(() => {
    const startPresentation = () => {
      setPresentationIndex(0);
      setIsPresenting(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('start-presentation', startPresentation);
    return () => window.removeEventListener('start-presentation', startPresentation);
  }, []);

  useEffect(() => {
    if (!isPresenting) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        setPresentationIndex((current) => Math.min(current + 1, navItems.length - 1));
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setPresentationIndex((current) => Math.max(current - 1, 0));
      }

      if (event.key === 'Escape') {
        void exitPresentation();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresenting]);

  // Nếu đang xem Integrity Quiz → render fullscreen
  if (showQuiz) {
    return <IntegrityQuiz onClose={() => setShowQuiz(false)} />;
  }

  // Nếu đang xem Gallery → render fullscreen
  if (showGallery) {
    return <ImageGallery onClose={() => setShowGallery(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] overflow-x-hidden">
      <motion.div
        className={`fixed left-0 right-0 h-1 bg-gold-accent origin-left z-[51] ${isPresenting ? 'top-0' : 'top-20'}`}
        style={{ scaleX: scrollYProgress }}
      />
      <div className="historical-grain" />
      <div className="vignette" />
      <CustomCursor />
      {!isPresenting && <FloatingLotus />}
      <Soundscape />

      {!isPresenting && <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        background: 'linear-gradient(180deg, rgba(45, 26, 26, 0.98) 0%, rgba(92, 34, 48, 0.95) 100%)',
        backdropFilter: 'blur(15px)',
        zIndex: 50,
        boxShadow: '0 4px 60px rgba(0,0,0,0.3)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex justify-between items-center h-20 w-full relative">
            {/* Logo */}
            <div className="flex items-center gap-6 shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-xl text-white font-bold tracking-tighter text-historical">
                DECODE<span className="text-gold-accent">1945</span>
              </span>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => setShowQuiz(true)}
                className="group relative px-6 py-3 rounded-md bg-[#8B2323] hover:bg-[#A52A2A] border border-[#C9A227]/50 transition-all duration-300 outline-none flex items-center justify-center overflow-hidden shadow-[0_4px_15px_rgba(139,35,35,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 text-[14px] sm:text-[15px] text-white tracking-[0.08em] uppercase font-bold transition-transform duration-300 group-hover:scale-105 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <Trophy size={16} color="#C9A227" fill="#C9A227" /> Đấu Trường Thanh Liêm
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>}



      {isPresenting && (
        <div
          className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/45 px-4 py-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md"
          style={{ zIndex: 2147483647, pointerEvents: 'auto' }}
        >
          <button
            onClick={() => goToSlide(presentationIndex - 1)}
            disabled={presentationIndex === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Slide trước"
          >
            <ChevronUp className="h-5 w-5" />
          </button>

          <div className="min-w-28 text-center text-sm font-bold tracking-[0.04em]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {presentationIndex + 1} / {navItems.length}
          </div>

          <button
            onClick={() => goToSlide(presentationIndex + 1)}
            disabled={presentationIndex === navItems.length - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Slide tiếp theo"
          >
            <ChevronDown className="h-5 w-5" />
          </button>

          <button
            onClick={() => void exitPresentation()}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4D06F] text-[#1A1A1A] transition hover:bg-[#FFE18A]"
            aria-label="Thoát trình chiếu"
          >
            <Minimize2 className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className={isPresenting ? 'pt-0' : 'pt-20'}>
        {isPresenting ? (
          <div className="min-h-screen overflow-hidden">
            {presentationSlides[presentationIndex]}
          </div>
        ) : (
          <>
            <div id="hero"><Hero /></div>
            <div id="gioi-thieu"><Introduction /></div>
            <div id="hau-qua"><Consequences /></div>
            <div id="lich-su"><Timeline /></div>
            <div id="thoi-co"><GoldenOpportunity /></div>
            <div id="trach-nhiem"><Responsibilities /></div>
            <div id="ket-luan"><Conclusion /></div>
          </>
        )}
      </main>
      {!isPresenting && <Footer />}

      {/* Back to Top Button */}
      {!isPresenting && <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999,
          width: 48,
          height: 48,
          background: 'white',
          color: '#7B2D3E',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
      >
        <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
      </button>}

      {/* Cố Vấn Thanh Liêm Chatbot */}
      {!isPresenting && <IntegrityChatbot />}
    </div >
  );
}

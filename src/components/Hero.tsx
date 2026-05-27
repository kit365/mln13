import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import tolamHeroImg from '../picture/tolam_hero.jpg';

interface HeroProps {
  isPresenting?: boolean;
}

export function Hero({ isPresenting = false }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.03]);

  const startPresentation = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen?.();
    }
    window.dispatchEvent(new CustomEvent('start-presentation'));
  };

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 72% 28%, rgba(220,38,38,0.12), transparent 38%), linear-gradient(135deg, #081017 0%, #0B1118 52%, #111820 100%)',
        minHeight: isPresenting ? '100vh' : 'calc(100vh - 5rem)',
        paddingTop: isPresenting ? '0' : '4rem',
        paddingBottom: isPresenting ? '0' : '4rem'
      }}
    >
      {/* Background patterns */}
      <motion.div
        style={{ y: y1, opacity, zIndex: 1 }}
        className="absolute inset-0 pointer-events-none opacity-60"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '56px 56px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081017] via-[#081017]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081017] via-transparent to-[#081017]/60" />
      </motion.div>

      {/* Atmospheric lighting glows */}
      <motion.div
        style={{ y: y1, opacity, zIndex: 0 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div style={{
          position: 'absolute',
          top: '12%',
          right: '15%',
          width: 580,
          height: 580,
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.14) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: 450,
          height: 450,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
      </motion.div>

      {/* Main Grid Content */}
      <motion.div
        style={{ y: y2, scale, zIndex: 10 }}
        className="hero-section-layout relative grid w-full max-w-7xl items-center gap-12 px-6 md:px-12 lg:px-16"
      >
        {/* Left Column: Text Content */}
        <div className="min-w-0 flex flex-col justify-center" style={{ zIndex: 12 }}>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-[2.2rem] font-black leading-[1.15] sm:text-[3.2rem] sm:leading-[1.12] lg:text-[3.8rem]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", textShadow: '0 12px 36px rgba(0,0,0,0.6)', color: '#FFFFFF' }}
          >
            THAM NHŨNG <br className="hidden sm:inline" />
            KHÔNG BẮT ĐẦU TỪ <br />
            NHỮNG VỤ ÁN LỚN.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-8 text-base font-semibold leading-relaxed sm:text-lg lg:text-xl"
            style={{ fontFamily: "'Lora', Georgia, serif", textShadow: '0 4px 12px rgba(0,0,0,0.3)', color: 'rgba(255, 255, 255, 0.92)' }}
          >
            Nó bắt đầu từ sự im lặng.
            <br />
            Và lớn dần khi không ai dám nói ra sự thật.
          </motion.p>

          {/* Button Block */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            style={{ zIndex: 15 }}
          >
            {/* CTA Button */}
            <button
              onClick={startPresentation}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-lg px-7 py-4 transition-all duration-300 hover:bg-[#FF3126] hover:shadow-[0_15px_30px_rgba(225,37,27,0.35)] hover:-translate-y-0.5"
              style={{
                fontFamily: "'Manrope', sans-serif",
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 12px 24px rgba(225,37,27,0.22)',
                backgroundColor: '#E1251B',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              <span className="relative z-10 text-sm font-black uppercase tracking-[0.06em]">
                Bắt đầu hành trình
              </span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-750 group-hover:translate-x-[100%]" />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Hand Bribe Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative hidden md:block overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
          style={{ minHeight: 450, height: '100%', width: '100%', zIndex: 11 }}
        >
          {/* Main Photo */}
          <img
            src={tolamHeroImg}
            alt="Tổng Bí thư Tô Lâm chủ trì phiên họp của Ban Chỉ đạo Trung ương về phòng, chống tham nhũng, tiêu cực"
            className="w-full h-full object-cover object-center select-none absolute inset-0 pointer-events-none"
          />
          {/* Dynamic blending overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081017] via-[#081017]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081017]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-500" />
          {/* Photo Citation overlay - Premium Glassmorphism Pill Badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              right: '14px',
              zIndex: 30,
              backgroundColor: 'rgba(8, 16, 23, 0.8)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.03em',
              color: 'rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
            }}
            className="transition-all duration-300 hover:scale-[1.03] hover:border-white/20"
          >
            <span style={{ opacity: 0.85 }}>Ảnh:</span>&nbsp;
            <a
              href="https://noichinh.vn/cong-tac-phong-chong-tham-nhung/202507/dong-chi-tong-bi-thu-to-lam-tham-nhung-lang-phi-khong-chi-co-toi-ma-con-co-loi-rat-lon-voi-dang-nha-nuoc-va-nhan-dan-314824/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#FF3126] transition-colors duration-300"
              style={{ color: '#FFFFFF', fontWeight: 700 }}
            >
              noichinh.vn
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Styled Grid system */}
      <style>{`
        .hero-section-layout {
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .hero-section-layout {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          }
        }
      `}</style>
    </section>
  );
}


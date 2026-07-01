import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { LanguageToggle } from '../components/LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';
import { copy, localize } from '../data/content';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import heroImage from '../assets/images/hero-hotel.webp';
import logoImage from '../assets/images/logo.webp';

export const Hero = forwardRef<HTMLDivElement>(function Hero(_props, ref) {
  const { lang } = useLanguage();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref} className="relative h-[80vh] w-full overflow-hidden rounded-b-[28px] lg:h-[50vh]">
      <motion.img
        src={heroImage}
        alt="Hotel Tibisay Boutique"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: reducedMotion ? 1 : 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: reducedMotion ? 0 : 8, ease: 'easeOut' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(4,4,3,0.92) 0%, rgba(4,4,3,0.5) 40%, rgba(4,4,3,0.15) 70%, transparent 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pt-0 pb-9 text-center">
        <Reveal y={12}>
          <img src={logoImage} alt="Hotel Tibisay Boutique" className="w-full max-w-[80px]" />
        </Reveal>
        <Reveal y={20} delay={0.2}>
          <div className="font-display mt-4 text-[clamp(26px,6vw,38px)] leading-[1.2] font-bold tracking-[0.03em] text-[#F1EEEA]">
            {localize(copy.hero.title, lang)}
          </div>
        </Reveal>
        <Reveal y={16} delay={0.4}>
          <div className="mx-auto mt-2.5 max-w-[300px] text-sm leading-relaxed text-[rgba(241,238,234,0.65)]">
            {localize(copy.hero.subtitle, lang)}
          </div>
        </Reveal>
        <Reveal y={12} delay={0.5}>
          <LanguageToggle />
        </Reveal>
      </div>
    </div>
  );
});

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ServiceCardProps {
  icon: LucideIcon;
  label: string;
  delay: number;
  onClick: () => void;
}

const CARD_SHADOW =
  'shadow-[0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3),0_0_1px_rgba(196,164,104,0.05)]';

export function ServiceCard({ icon: Icon, label, delay, onClick }: ServiceCardProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Reveal scale delay={delay}>
      <motion.button
        type="button"
        onClick={onClick}
        whileTap={reducedMotion ? undefined : { scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`card-glow relative flex w-full flex-col items-center overflow-hidden rounded-[20px] border border-[rgba(196,164,104,0.12)] bg-[rgba(26,21,17,0.80)] px-4 py-7 backdrop-blur-[24px] select-none ${CARD_SHADOW}`}
      >
        <Icon size={30} strokeWidth={1.5} color="#C4A468" />
        <span className="mt-2.5 text-[13px] font-medium text-[#F1EEEA]">{label}</span>
      </motion.button>
    </Reveal>
  );
}

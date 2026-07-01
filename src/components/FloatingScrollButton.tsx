import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface FloatingScrollButtonProps {
  visible: boolean;
  onClick: () => void;
  label: string;
  ariaLabel: string;
}

export function FloatingScrollButton({ visible, onClick, label, ariaLabel }: FloatingScrollButtonProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="fixed bottom-7 left-1/2 z-50 -translate-x-1/2"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className="flex items-center gap-2 rounded-full border border-[rgba(196,164,104,0.20)] px-6 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        style={{ background: 'rgba(26,21,17,0.7)', backdropFilter: 'blur(16px)' }}
      >
        <ChevronDown
          size={16}
          color="#F6D99F"
          className={reducedMotion ? '' : 'chevron-bounce'}
        />
        <span className="text-[13px] font-medium text-[#F1EEEA]">{label}</span>
      </button>
    </motion.div>
  );
}

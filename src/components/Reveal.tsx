import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const SCALE_EASE: [number, number, number, number] = [0.2, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: boolean;
  className?: string;
}

export function Reveal({ children, delay = 0, y = 16, scale = false, className }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={scale ? { opacity: 0, y: 12, scale: 0.9 } : { opacity: 0, y }}
      whileInView={scale ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -20px 0px' }}
      transition={
        scale
          ? { duration: 0.5, delay, ease: SCALE_EASE }
          : { duration: 0.6, delay, ease: 'easeOut' }
      }
    >
      {children}
    </motion.div>
  );
}

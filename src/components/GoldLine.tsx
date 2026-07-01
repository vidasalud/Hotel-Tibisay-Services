import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface GoldLineProps {
  maxWidth?: number;
  opacity?: number;
  className?: string;
}

export function GoldLine({ maxWidth = 80, opacity = 0.25, className = 'my-9' }: GoldLineProps) {
  const reducedMotion = usePrefersReducedMotion();
  const style = { height: 1, background: `rgba(196,164,104,${opacity})`, maxWidth };

  if (reducedMotion) {
    return <div className={`mx-auto w-full ${className}`} style={style} />;
  }

  return (
    <motion.div
      className={`mx-auto ${className}`}
      style={style}
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    />
  );
}

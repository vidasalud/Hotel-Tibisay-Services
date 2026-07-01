import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  schedule: string[];
  note: string | null;
}

export function ServiceModal({ isOpen, onClose, image, title, description, schedule, note }: ServiceModalProps) {
  const reducedMotion = usePrefersReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const contentDelay = (index: number) => (reducedMotion ? 0 : 0.04 * index);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-end justify-center backdrop-blur-[8px] md:items-center"
          style={{ background: 'rgba(4,4,3,0.7)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="relative w-full max-w-[480px] overflow-y-auto rounded-t-[28px] border border-[rgba(196,164,104,0.08)] shadow-[0_-8px_40px_rgba(0,0,0,0.5)] md:max-w-[440px] md:rounded-[28px]"
            style={{
              background: 'rgba(26,21,17,0.88)',
              backdropFilter: 'blur(32px)',
              maxHeight: '85vh',
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 280, damping: 30 }
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center pt-3 md:hidden">
              <div className="h-1 w-10 rounded-full bg-[rgba(241,238,234,0.2)]" />
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-5 z-10 cursor-pointer border-none bg-transparent p-1 text-[rgba(241,238,234,0.5)] transition-colors hover:text-[#F1EEEA]"
            >
              <X size={22} />
            </button>

            <motion.div
              className="px-4 pt-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: contentDelay(1) }}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="block aspect-video w-full rounded-2xl object-cover shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            <motion.div
              className="font-display px-6 pt-5 text-2xl font-bold text-[#F1EEEA]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: contentDelay(2) }}
            >
              {title}
            </motion.div>

            <motion.div
              className="mt-1.5 px-6 text-sm leading-normal text-[rgba(241,238,234,0.65)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: contentDelay(3) }}
            >
              {description}
            </motion.div>

            <motion.div
              className="mx-4 mt-4 rounded-[14px] p-4"
              style={{ background: 'rgba(4,4,3,0.4)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: contentDelay(4) }}
            >
              {schedule.map((line) => (
                <div key={line} className="text-sm leading-[1.8] font-medium text-[#F1EEEA]">
                  {line}
                </div>
              ))}
            </motion.div>

            {note ? (
              <motion.div
                className="px-6 pt-3 pb-7 text-[13px] leading-normal text-[#C4A468]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: contentDelay(5) }}
              >
                {note}
              </motion.div>
            ) : (
              <div className="pb-7" />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


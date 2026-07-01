import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { copy, localize } from './data/content';
import type { ServiceDef } from './data/services';
import { serviceContent } from './data/services';
import { Hero } from './sections/Hero';
import { IncludedServices } from './sections/IncludedServices';
import { TowelService } from './sections/TowelService';
import { AdditionalServices } from './sections/AdditionalServices';
import { Footer } from './sections/Footer';
import { GoldLine } from './components/GoldLine';
import { FloatingScrollButton } from './components/FloatingScrollButton';
import { ServiceModal } from './components/ServiceModal';

const FLOATING_BUTTON_DELAY_MS = 1500;

function AppContent() {
  const { lang, fading } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { amount: 0.05 });

  const [delayPassed, setDelayPassed] = useState(false);
  const [modalService, setModalService] = useState<ServiceDef | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDelayPassed(true), FLOATING_BUTTON_DELAY_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  const openModal = (service: ServiceDef) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const content = modalService ? serviceContent(modalService, lang) : null;

  return (
    <div className="relative min-h-screen text-[#F1EEEA]">
      <div style={{ opacity: fading ? 0.3 : 1, transition: 'opacity 0.15s ease' }}>
        <Hero ref={heroRef} />
        <IncludedServices onSelect={openModal} />
        <TowelService />
        <GoldLine />
        <AdditionalServices onSelect={openModal} />
        <GoldLine className="my-0" />
        <Footer />
      </div>

      <FloatingScrollButton
        visible={delayPassed && heroInView && !isModalOpen}
        onClick={scrollToServices}
        label={localize(copy.floating.label, lang)}
        ariaLabel={localize(copy.floating.ariaLabel, lang)}
      />

      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalService?.image ?? ''}
        title={content?.title ?? ''}
        description={content?.desc ?? ''}
        schedule={content?.schedule ?? []}
        note={content?.note ?? null}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

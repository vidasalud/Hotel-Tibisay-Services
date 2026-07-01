import { Reveal } from '../components/Reveal';
import { ServiceCard } from '../components/ServiceCard';
import { useLanguage } from '../i18n/LanguageContext';
import { copy, localize } from '../data/content';
import { includedServices, serviceContent, type ServiceDef } from '../data/services';

interface IncludedServicesProps {
  onSelect: (service: ServiceDef) => void;
}

export function IncludedServices({ onSelect }: IncludedServicesProps) {
  const { lang } = useLanguage();

  return (
    <div id="services-section" className="mx-auto max-w-[clamp(340px,85vw,560px)] px-5 py-10">
      <Reveal>
        <div className="font-display mb-1.5 text-center text-xl font-semibold tracking-[0.03em] text-[#C4A468]">
          {localize(copy.included.title, lang)}
        </div>
      </Reveal>
      <Reveal delay={0.05} y={12}>
        <div className="mb-6 text-center text-[13px] text-[rgba(241,238,234,0.35)]">
          {localize(copy.included.hint, lang)}
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-3.5">
        {includedServices.map((service, index) => {
          const content = serviceContent(service, lang);
          return (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              label={content.label}
              delay={index * 0.08}
              onClick={() => onSelect(service)}
            />
          );
        })}
      </div>
    </div>
  );
}

import { Reveal } from '../components/Reveal';
import { ServiceCard } from '../components/ServiceCard';
import { useLanguage } from '../i18n/LanguageContext';
import { copy, localize } from '../data/content';
import { additionalServices, serviceContent, type ServiceDef } from '../data/services';

interface AdditionalServicesProps {
  onSelect: (service: ServiceDef) => void;
}

export function AdditionalServices({ onSelect }: AdditionalServicesProps) {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-[clamp(340px,85vw,560px)] px-5 pb-10">
      <Reveal>
        <div className="font-display mb-1.5 text-center text-xl font-semibold tracking-[0.03em] text-[#C4A468]">
          {localize(copy.additional.title, lang)}
        </div>
      </Reveal>
      <Reveal delay={0.08} y={12}>
        <div className="mb-6 text-center text-[13px] leading-relaxed text-[rgba(241,238,234,0.45)]">
          {localize(copy.additional.subtitle, lang)}
        </div>
      </Reveal>
      <div className="mx-auto grid max-w-[280px] grid-cols-2 gap-3.5">
        {additionalServices.map((service, index) => {
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

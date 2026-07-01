import { Waves } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { copy, localize } from '../data/content';

const CARD_SHADOW = 'shadow-[0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]';

export function TowelService() {
  const { lang } = useLanguage();

  return (
    <div className="mx-auto max-w-[360px] px-5">
      <Reveal scale>
        <div
          className={`card-glow relative overflow-hidden rounded-[20px] border border-[rgba(196,164,104,0.12)] bg-[rgba(26,21,17,0.80)] p-6 backdrop-blur-[24px] ${CARD_SHADOW}`}
        >
          <div className="flex flex-col items-center text-center">
            <Waves size={24} color="#C4A468" />
            <div className="mt-3 text-[15px] font-semibold text-[#F1EEEA]">
              {localize(copy.towel.title, lang)}
            </div>
            <div className="mt-2 text-[13px] leading-relaxed text-[rgba(241,238,234,0.65)]">
              {localize(copy.towel.body, lang)}
            </div>
            <div className="mt-3 text-[13px] leading-normal text-[#C4A468]">
              {localize(copy.towel.note, lang)}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

import { Reveal } from '../components/Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { copy, localize } from '../data/content';

export function Footer() {
  const { lang } = useLanguage();

  return (
    <Reveal>
      <div className="px-6 py-12 text-center">
        <div className="font-display text-base font-semibold text-[#C4A468]">{copy.footer.heading}</div>
        <div className="mt-2 text-[13px] leading-relaxed text-[rgba(241,238,234,0.55)]">
          {localize(copy.footer.contact, lang)}
        </div>
        <div className="mt-1 text-[13px] leading-relaxed text-[rgba(241,238,234,0.35)]">
          {localize(copy.footer.closing, lang)}
        </div>
      </div>
    </Reveal>
  );
}

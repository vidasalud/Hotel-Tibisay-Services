import { useLanguage, type Lang } from '../i18n/LanguageContext';

const BASE_CLASSES =
  'rounded-full px-5 py-2 text-[13px] font-medium transition-colors duration-200 outline-none';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="mt-5 flex justify-center gap-2">
      <ToggleButton value="en" active={lang === 'en'} onSelect={setLang} label="EN" />
      <ToggleButton value="es" active={lang === 'es'} onSelect={setLang} label="ES" />
    </div>
  );
}

function ToggleButton({
  value,
  active,
  onSelect,
  label,
}: {
  value: Lang;
  active: boolean;
  onSelect: (lang: Lang) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={active}
      className={BASE_CLASSES}
      style={
        active
          ? { background: '#F6D99F', color: '#040403', border: '1px solid #F6D99F' }
          : {
              background: 'rgba(26,21,17,0.6)',
              color: '#F1EEEA',
              border: '1px solid rgba(196,164,104,0.2)',
              backdropFilter: 'blur(12px)',
            }
      }
    >
      {label}
    </button>
  );
}

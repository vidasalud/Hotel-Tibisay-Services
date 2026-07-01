import type { Lang } from '../i18n/LanguageContext';

interface Bilingual {
  en: string;
  es: string;
}

function t(text: Bilingual, lang: Lang): string {
  return text[lang];
}

export const copy = {
  hero: {
    title: { en: 'Welcome to Hotel Tibisay Boutique', es: 'Bienvenido a Hotel Tibisay Boutique' },
    subtitle: {
      en: 'Everything you need to make the most of your stay, right here.',
      es: 'Todo lo que necesitas para aprovechar tu estadía, aquí.',
    },
  },
  included: {
    title: { en: 'Included in Your Stay', es: 'Incluido en tu estadía' },
    hint: { en: 'Tap any service to see the schedule', es: 'Toca un servicio para ver el horario' },
  },
  additional: {
    title: { en: 'Additional Services', es: 'Servicios Adicionales' },
    subtitle: {
      en: 'Available at an extra cost. Tap for details.',
      es: 'Con costo adicional. Toca para más detalles.',
    },
  },
  towel: {
    title: { en: 'Towel Service', es: 'Servicio de Toallas' },
    body: {
      en: 'Towels for the gym, pools & beach are available at the front desk. Please return them to reception after use. Lost towels will incur a replacement fee.',
      es: 'Las toallas para gimnasio, piscinas y playa se retiran en recepción. Por favor devuélvelas en recepción al terminar. El extravío de toallas genera un cargo por reposición.',
    },
    note: {
      en: 'Going to an external beach? Towels are available with a refundable deposit at the front desk.',
      es: '¿Vas a una playa externa? Toallas disponibles en recepción con garantía reembolsable.',
    },
  },
  footer: {
    heading: 'Hotel Tibisay Boutique · Isla de Margarita',
    contact: {
      en: 'For any request, dial 0 from your room or visit our front desk.',
      es: 'Para cualquier solicitud, marca 0 desde tu habitación o acude a recepción.',
    },
    closing: {
      en: "We're here to make your stay unforgettable.",
      es: 'Estamos aquí para que tu estadía sea inolvidable.',
    },
  },
  floating: {
    label: { en: 'More services', es: 'Más servicios' },
    ariaLabel: { en: 'Scroll to services', es: 'Ir a servicios' },
  },
};

export function localize(text: Bilingual, lang: Lang): string {
  return t(text, lang);
}

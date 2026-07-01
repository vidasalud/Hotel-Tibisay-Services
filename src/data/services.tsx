import { Dumbbell, UtensilsCrossed, Wine, Umbrella, Flower2, Dice5, type LucideIcon } from 'lucide-react';
import type { Lang } from '../i18n/LanguageContext';

import gymImage from '../assets/images/gym.webp';
import restaurantImage from '../assets/images/restaurant.webp';
import openbarImage from '../assets/images/openbar.webp';
import beachclubImage from '../assets/images/beachclub.webp';
import spaImage from '../assets/images/spa.webp';
import casinoImage from '../assets/images/casino.webp';

export interface ServiceContent {
  label: string;
  title: string;
  desc: string;
  schedule: string[];
  note: string | null;
}

export interface ServiceDef {
  key: string;
  icon: LucideIcon;
  image: string;
  en: ServiceContent;
  es: ServiceContent;
}

export const includedServices: ServiceDef[] = [
  {
    key: 'gym',
    icon: Dumbbell,
    image: gymImage,
    en: {
      label: 'Gym',
      title: 'Gym',
      desc: 'Stay active during your getaway.',
      schedule: ['Monday – Friday: 5:10 AM – 10:30 PM', 'Saturday: 6:00 AM – 8:00 PM', 'Sunday: 8:00 AM – 1:00 PM'],
      note: 'Located on the terrace. No reservation needed.',
    },
    es: {
      label: 'Gimnasio',
      title: 'Gimnasio',
      desc: 'Mantente activo durante tu escapada.',
      schedule: ['Lunes – Viernes: 5:10 AM – 10:30 PM', 'Sábado: 6:00 AM – 8:00 PM', 'Domingo: 8:00 AM – 1:00 PM'],
      note: 'Ubicado en la terraza. Sin reservación.',
    },
  },
  {
    key: 'restaurant',
    icon: UtensilsCrossed,
    image: restaurantImage,
    en: {
      label: 'Restaurant',
      title: 'Main Restaurant',
      desc: 'From breakfast to dinner — every meal is on us.',
      schedule: [
        'Breakfast: 7:00 AM – 10:00 AM',
        'Lunch: 12:00 PM – 2:00 PM',
        'Snacks: 3:00 PM – 6:00 PM',
        'Dinner: 7:00 PM – 10:00 PM',
      ],
      note: 'Snacks available at Mar y Tierra, the Beach Club, or the Main Restaurant.',
    },
    es: {
      label: 'Restaurante',
      title: 'Restaurante Principal',
      desc: 'Del desayuno a la cena — cada comida corre por nuestra cuenta.',
      schedule: [
        'Desayuno: 7:00 AM – 10:00 AM',
        'Almuerzo: 12:00 PM – 2:00 PM',
        'Snacks: 3:00 PM – 6:00 PM',
        'Cena: 7:00 PM – 10:00 PM',
      ],
      note: 'Snacks disponibles en Mar y Tierra, el Beach Club o el Restaurante Principal.',
    },
  },
  {
    key: 'openbar',
    icon: Wine,
    image: openbarImage,
    en: {
      label: 'Open Bar',
      title: 'Open Bar',
      desc: 'Cocktails, wines, spirits & soft drinks — national brands included.',
      schedule: ['Daily: 11:00 AM – 10:00 PM'],
      note: null,
    },
    es: {
      label: 'Barra Libre',
      title: 'Barra Libre',
      desc: 'Cócteles, vinos, licores y bebidas sin alcohol — marcas nacionales incluidas.',
      schedule: ['Todos los días: 11:00 AM – 10:00 PM'],
      note: null,
    },
  },
  {
    key: 'beachclub',
    icon: Umbrella,
    image: beachclubImage,
    en: {
      label: 'Beach Club',
      title: 'Main Beach Club',
      desc: 'Sun, sand & everything you need to unwind.',
      schedule: [
        'Beach Club Pool: 9:00 AM – 6:00 PM',
        'Hotel Pool: 9:00 AM – 6:00 PM',
        'Beach Club Area: 11:00 AM – 10:00 PM',
      ],
      note: 'Lounge chairs, huts & 1 hour of paddle tennis included.',
    },
    es: {
      label: 'Beach Club',
      title: 'Beach Club Principal',
      desc: 'Sol, arena y todo lo que necesitas para relajarte.',
      schedule: [
        'Piscina Beach Club: 9:00 AM – 6:00 PM',
        'Piscina del Hotel: 9:00 AM – 6:00 PM',
        'Área del Beach Club: 11:00 AM – 10:00 PM',
      ],
      note: 'Camastros, palapa y 1 hora de pádel incluida.',
    },
  },
];

export const additionalServices: ServiceDef[] = [
  {
    key: 'spa',
    icon: Flower2,
    image: spaImage,
    en: {
      label: 'Spa',
      title: 'Spa',
      desc: 'Relax with a personalized treatment.',
      schedule: ['By appointment only.'],
      note: 'Book at the front desk.',
    },
    es: {
      label: 'Spa',
      title: 'Spa',
      desc: 'Relájate con un tratamiento personalizado.',
      schedule: ['Solo con cita previa.'],
      note: 'Reserva en recepción.',
    },
  },
  {
    key: 'casino',
    icon: Dice5,
    image: casinoImage,
    en: {
      label: 'Casino',
      title: 'Casino',
      desc: 'Try your luck steps from your room.',
      schedule: ['Daily: 4:00 PM – 3:00 AM'],
      note: 'Must be 18+ to enter.',
    },
    es: {
      label: 'Casino',
      title: 'Casino',
      desc: 'Prueba tu suerte a pasos de tu habitación.',
      schedule: ['Todos los días: 4:00 PM – 3:00 AM'],
      note: 'Entrada solo para mayores de 18 años.',
    },
  },
];

export function serviceContent(service: ServiceDef, lang: Lang): ServiceContent {
  return service[lang];
}

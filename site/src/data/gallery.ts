import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/popup/*.jpg', { eager: true });

export const categories = [
  { id: 'todas', label: 'Todas' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'piscina', label: 'Piscina' },
  { id: 'quartos', label: 'Quartos' },
  { id: 'cozinha', label: 'Cozinha' },
  { id: 'salas', label: 'Salas' },
  { id: 'adega', label: 'Adega' },
  { id: 'banhos', label: 'Casas de banho' },
] as const;

type Category = Exclude<(typeof categories)[number]['id'], 'todas'>;
type Photo = { id: number; alt: string; categories: Category[]; image: ImageMetadata };

const descriptions: [string, Category[]][] = [
  ['A fachada de granito da casa junto à piscina', ['exterior', 'piscina']],
  ['Piscina com vista para a paisagem de Pinheiros', ['exterior', 'piscina']],
  ['Escadaria de pedra e jardim junto à piscina', ['exterior', 'piscina']],
  ['Cozinha equipada com armários brancos e fogão', ['cozinha']],
  ['Espreguiçadeiras e zona de estar no terraço', ['exterior']],
  ['Quarto com duas camas e mobiliário de madeira', ['quartos']],
  ['Quarto de casal com cabeceira de madeira trabalhada', ['quartos']],
  ['Adega com paredes de pedra e mesas de convívio', ['adega']],
  ['Lavatório e espelho na casa de banho', ['banhos']],
  ['Bancada da casa de banho com azulejos amarelos', ['banhos']],
  ['Antigo pipo de vinho recuperado na adega', ['adega']],
  ['Zona de convívio da adega com mesas e pipos', ['adega']],
  ['Móvel de madeira e loiça antiga recuperados', ['adega']],
  ['Sala de estar com sofá e mobiliário de família', ['salas']],
  ['Sala de estar com paredes de pedra e mesa de centro', ['salas']],
  ['Mesa de refeições e louceiro de madeira', ['cozinha']],
  ['Quarto de casal com colcha azul', ['quartos']],
  ['Mesa no terraço com vista para as encostas', ['exterior']],
  ['Quarto de casal com janela e paredes de granito', ['quartos']],
  ['Quarto com cama de casal e colcha branca', ['quartos']],
];

export const gallery: Photo[] = descriptions.map(([alt, categories], index) => {
  const id = index + 1;
  return { id, alt, categories, image: images[`../assets/gallery/popup/img-${id}.jpg`].default };
});

export const site = {
  name: 'Casa da Bivó Mafalda',
  url: 'https://bivomafalda.pt',
  email: 'casadabivomafalda@gmail.com',
  address: 'Av. António Silva, 2',
  locality: '5120-284 Pinheiros, Tabuaço',
  coordinates: { latitude: 41.1024187, longitude: -7.6116245 },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=41.1024187%2C-7.6116245',
  phones: [
    { label: '933 530 715', href: 'tel:+351933530715' },
    { label: '916 565 232', href: 'tel:+351916565232' },
    { label: '925 099 827', href: 'tel:+351925099827' },
  ],
} as const;

export const discoverPages = [
  { title: 'História da Casa', href: '/descobrir/historia-da-casa.html' },
  { title: 'Pontos Turísticos', href: '/descobrir/pontos-turisticos.html' },
  { title: 'Percursos Pedestres', href: '/descobrir/percursos-pedestres.html' },
] as const;

export const pages = [
  { title: 'Início', href: '/' },
  ...discoverPages,
  { title: 'Galeria', href: '/galeria.html' },
  { title: 'Preços', href: '/precos.html' },
  { title: 'Contactos', href: '/contactos.html' },
] as const;

export const houseIntro = 'A bisavó Mafalda Margarida legou na actual proprietária não só o nome mas também a casa que perpetua a sua memória.';

export const amenities = [
  { icon: 'pool', title: 'Piscina' },
  { icon: 'wifi', title: 'Internet Wi-Fi' },
  { icon: 'heat', title: 'Aquecimento central' },
  { icon: 'car', title: 'Garagem para 4 carros' },
  { icon: 'bath', title: 'WC privativo' },
  { icon: 'paw', title: 'Animais domésticos', note: 'Sob consulta' },
] as const;

export default {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_CANONICAL,
    images: [
      {
        url: process.env.NEXT_PUBLIC_PREVIEW,
        width: 1200,
        height: 800,
        alt: process.env.NEXT_PUBLIC_ALT,
        type: 'image/png'
      }
    ],
    siteName: 'Excursionista'
  },
  twitter: {
    handle: '@manucout',
    site: '@site',
    cardType: 'summary_large_image'
  },
  title: 'Excursionista',
  description: 'Fotos incriveis das 100 cidades mais prucuradas como destinos turístico no mundo.',
  canonical: process.env.NEXT_PUBLIC_CANONICAL,
  keywords:
    'trip excursionista manucoutinho manu coutinho trips continentes viagem turísmo destinos avião praia beach férias vacation holiday feriado lazer free time melhores viagens beautiful place paisagem'
} as const

export const metadata = {
  title: 'CECAM - Centro Cultural de las Artes del Movimiento',
  description: 'CECAM es un espacio dedicado a la promoción y desarrollo de las artes del movimiento, ofreciendo clases, talleres y eventos para todas las edades y niveles.',
  keywords: 'CECAM, Centro Cultural, artes del movimiento, danza, parkour, acrobacia, clases, talleres, eventos',
  openGraph: {
    title: 'CECAM - Centro Cultural de las Artes del Movimiento',
    description: 'CECAM es un espacio dedicado a la promoción y desarrollo de las artes del movimiento, ofreciendo clases, talleres y eventos para todas las edades y niveles.',
    images: [
      {
        url: '/pb.webp',
        width: 1200,
        height: 630,
        alt: 'CECAM - Centro Cultural de las Artes del Movimiento',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CECAM - Centro Cultural de las Artes del Movimiento',
    description: 'CECAM es un espacio dedicado a la promoción y desarrollo de las artes del movimiento, ofreciendo clases, talleres y eventos para todas las edades y niveles.',
    images: ['/pb.webp'],
  },
  alternates: {
    canonical: 'https://cecam.com.ar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
}; 
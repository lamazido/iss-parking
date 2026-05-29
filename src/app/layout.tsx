// import Image from 'next/image'
// import logo from '@/assets/images/logo.png'
// import AppProviders from '../components/wrappers/AppProviders'
// import { Metadata } from 'next'
// import '@/assets/scss/style.scss'

// export const metadata: Metadata = {
//   title: {
//     default: 'ISS Parking - Sistem Parkir Otomatis & Smart Parking Indonesia',
//     template: '%s | ISS Parking',
//   },

//   description:
//     'ISS Parking adalah sistem parkir otomatis modern dengan teknologi smart parking, integrasi gate barrier, monitoring real-time, dan manajemen kendaraan berbasis digital untuk bisnis dan area komersial di Indonesia.',

//   keywords: [
//     'sistem parkir',
//     'smart parking',
//     'palang parkir otomatis',
//     'aplikasi parkir indonesia',
//     'parking system',
//     'gate barrier system',
//     'manajemen parkir modern',
//     'parking management system',
//   ],

//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon.ico',
//     apple: '/favicon.ico',
//   },

//   openGraph: {
//     title: 'ISS Parking - Smart Parking System Indonesia',
//     description:
//       'Sistem parkir otomatis terintegrasi dengan gate barrier dan monitoring real-time.',
//     url: 'https://issparking.com',
//     siteName: 'ISS Parking',
//     type: 'website',
//   },

//   metadataBase: new URL('https://issparking.com'),
// }

// const splashScreenStyles = `
// #splash-screen {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   background: white;
//   display: flex;
//   height: 100%;
//   width: 100%;
//   transform: translate(-50%, -50%);
//   align-items: center;
//   justify-content: center;
//   z-index: 9999;
//   opacity: 1;
//   transition: all 15s linear;
//   overflow: hidden;
// }

// #splash-screen.remove {
//   animation: fadeout 0.7s forwards;
//   z-index: 0;
// }

// @keyframes fadeout {
//   to {
//     opacity: 0;
//     visibility: hidden;
//   }
// }
// `

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="id">
//       <head>
//         <style suppressHydrationWarning>{splashScreenStyles}</style>
//       </head>

//       <body className="antialiased">
//         {/* Splash Screen */}
//         <div id="splash-screen">
//           <Image
//             alt="ISS Parking Logo"
//             width={112}
//             height={24}
//             src={logo}
//             style={{ height: '6%', width: 'auto' }}
//             priority
//           />
//         </div>

//         {/* App */}
//         <div id="__next_splash">
//           <AppProviders>{children}</AppProviders>
//         </div>
//       </body>
//     </html>
//   )
// }

import Image from 'next/image'
import type { Metadata } from 'next'

import logo from '@/assets/images/logo.png'
import AppProviders from '../components/wrappers/AppProviders'

import '@/assets/scss/style.scss'

export const metadata: Metadata = {
  title: {
    default:
      'Infra Security System - Sistem Parkir Otomatis Bandung',
    template: '%s | Infra Security System',
  },

  description:
    'Infra Security System menyediakan sistem parkir otomatis, smart parking, gate barrier, parking management system, dan manajemen parkir modern di Bandung dan seluruh Indonesia.',

  keywords: [
    'sistem parkir bandung',
    'smart parking bandung',
    'gate barrier bandung',
    'palang parkir otomatis bandung',
    'software parkir bandung',
    'aplikasi parkir bandung',
    'parking management system',
    'sistem parkir otomatis',
    'smart parking indonesia',
    'manajemen parkir modern',
    'infra security system',
    'parking system indonesia',
  ],

  authors: [
    {
      name: 'Infra Security System',
    },
  ],

  creator: 'Infra Security System',
  publisher: 'Infra Security System',

  metadataBase: new URL('https://issparking.com'),

  alternates: {
    canonical: '/',
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

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    title:
      'Infra Security System - Smart Parking System Bandung',

    description:
      'Solusi sistem parkir otomatis, smart parking, gate barrier, dan parking management system terpercaya di Bandung.',

    url: 'https://issparking.com',

    siteName: 'Infra Security System',

    locale: 'id_ID',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Infra Security System',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Infra Security System - Sistem Parkir Otomatis Bandung',

    description:
      'Smart parking dan gate barrier system modern untuk area komersial dan bisnis.',

    images: ['/og-image.jpg'],
  },
}

const splashScreenStyles = `
  #splash-screen {
    position: fixed;
    top: 50%;
    left: 50%;
    background: white;
    display: flex;
    height: 100%;
    width: 100%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 1;
    transition: all 0.7s ease;
    overflow: hidden;
  }

  #splash-screen.remove {
    animation: fadeout 0.7s forwards;
    z-index: 0;
  }

  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Infra Security System',
              alternateName: 'ISS Parking',
              url: 'https://issparking.com',
              logo: 'https://issparking.com/logo.png',
              description:
                'Sistem parkir otomatis dan smart parking Bandung.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bandung',
                addressRegion: 'Jawa Barat',
                addressCountry: 'ID',
              },
              areaServed: [
                'Bandung',
                'Jakarta',
                'Indonesia',
              ],
            }),
          }}
        />

        <style suppressHydrationWarning>
          {splashScreenStyles}
        </style>
      </head>

      <body className="antialiased">
        {/* Splash Screen */}
        <div id="splash-screen">
          <Image
            alt="Infra Security System Logo"
            width={112}
            height={24}
            src={logo}
            style={{
              height: '6%',
              width: 'auto',
            }}
            priority
          />
        </div>

        {/* Main App */}
        <div id="__next_splash">
          <AppProviders>
            {children}
          </AppProviders>
        </div>
      </body>
    </html>
  )
}
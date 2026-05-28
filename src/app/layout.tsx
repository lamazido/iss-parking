import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import AppProviders from '../components/wrappers/AppProviders'
import { Metadata } from 'next'
import '@/assets/scss/style.scss'

export const metadata: Metadata = {
  title: {
    default: 'ISS Parking - Sistem Parkir Otomatis & Smart Parking Indonesia',
    template: '%s | ISS Parking',
  },

  description:
    'ISS Parking adalah sistem parkir otomatis modern dengan teknologi smart parking, integrasi gate barrier, monitoring real-time, dan manajemen kendaraan berbasis digital untuk bisnis dan area komersial di Indonesia.',

  keywords: [
    'sistem parkir',
    'smart parking',
    'palang parkir otomatis',
    'aplikasi parkir indonesia',
    'parking system',
    'gate barrier system',
    'manajemen parkir modern',
    'parking management system',
  ],

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    title: 'ISS Parking - Smart Parking System Indonesia',
    description:
      'Sistem parkir otomatis terintegrasi dengan gate barrier dan monitoring real-time.',
    url: 'https://issparking.com',
    siteName: 'ISS Parking',
    type: 'website',
  },

  metadataBase: new URL('https://issparking.com'),
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
  transition: all 15s linear;
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
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>

      <body className="antialiased">
        {/* Splash Screen */}
        <div id="splash-screen">
          <Image
            alt="ISS Parking Logo"
            width={112}
            height={24}
            src={logo}
            style={{ height: '6%', width: 'auto' }}
            priority
          />
        </div>

        {/* App */}
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  )
}
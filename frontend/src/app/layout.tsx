import type { Metadata } from 'next'
import { Providers } from '@/providers'
import './globals.css'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ['latin']
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["700"]
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}`,
    default: process.env.NEXT_PUBLIC_APP_NAME ?? 'App',
  },
  description: 'Built on garage-boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

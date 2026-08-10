'use client'

import type { ReactNode } from 'react'
import { AuthProvider } from './AuthProvider'
import { Toaster } from 'sonner'
import { Navbar } from '@/components/layout/Navbar'
import { IBM_Plex_Sans} from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ['latin']
});


/**
 * Compose all client-side providers here.
 * Import this in the root layout only.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <div className={`${ibmPlexSans.className}`}>
        <Navbar/>
        {children}
        <Toaster richColors position="top-right" />
      </div>
    </AuthProvider>
  )
}

'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { secondaryAccent } from '@/types/colorPallete'
import { HamburgerButton } from './HamburgerButton'

export function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="flex h-14 items-center justify-between dark:bg-zinc-900 bg-[${bgColor}]" style={{backgroundColor: secondaryAccent}}>
      <HamburgerButton/>
      <div className="text-3xl font-bold ml-5">
        <Link href={`${user ? "/dashboard" : "/"}`}>Garage Boilerplate</Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        {user ? 
          <>
          <span className="hidden text-sm font-semibold text-black sm:block">{user.email}</span>
          <Link
            href="/profile"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-black transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            aria-label="Profile"
          >
          <User className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex h-8 w-8 mr-4 items-center justify-center rounded-full text-black transition-colors hover:bg-blue-300 hover:text-bg-black dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
          </>
          :
          <></>
        }
      </div>
    </header>
  )
}

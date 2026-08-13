import { LayoutDashboard, StickyNote, User, Settings, Users } from 'lucide-react'
import { useSidebar } from '@/providers/SidebarProvider'
import { useRouter } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/team-page', label: 'Team Info', icon: Users },
  { href: '/notes', label: 'Notes', icon: StickyNote },
  { href: '/profile', label: 'Profile', icon: User },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const router = useRouter();
  const {setIsOpen} = useSidebar();

  return (
    <aside className="flex flex-col lg:flex sm:flex-row md:w-60 w-full border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <button
            key={href}
            onClick={() => {
              router.replace(href);
              router.refresh();
              setIsOpen(false);
            }}
            className="flex items-center gap-3 rounded-md px-3 py-2 md:text-sm text-3xl font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

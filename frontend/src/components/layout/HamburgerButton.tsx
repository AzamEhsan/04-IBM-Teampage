'use client'

import { Menu } from "lucide-react";
import { useSidebar } from "@/providers/SidebarProvider";

export function HamburgerButton(){
    const {open, setIsOpen} = useSidebar();

    return(
        <button
            type="button"
            onClick={() => setIsOpen(!open)}
            className="ml-5 flex h-8 w-8 items-center justify-center rounded-lg text-black transition-colors hover:bg-blue-300 hover:text-bg-black dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
            aria-label="Toggle Sidebar"
        >
            <Menu className="h-6 w-6" />
        </button>
    )
}
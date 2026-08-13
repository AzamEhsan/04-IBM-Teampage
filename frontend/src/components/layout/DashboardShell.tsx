'use client'

import { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useSidebar } from "@/providers/SidebarProvider";

export function DashboardShell({ children }: { children: ReactNode }) {
  const {open} = useSidebar();
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        {open && <Sidebar/>}
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}

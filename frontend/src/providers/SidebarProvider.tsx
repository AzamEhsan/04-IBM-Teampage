'use client'

import React, { createContext, useContext, useState } from "react"
import { sidebarContextValue } from "@/app/context/SidebarContext"

const SidebarContext = createContext<sidebarContextValue | null>(null);

// SidebarProvider is to pass data primarily from HamburgerButton to DashboardShell to toggle Sidebar
export function SidebarProvider({children} : {children: React.ReactNode}){
    
    const [open, setOpen] = useState(false);
    const setIsOpen = (isOpen : boolean) => {
        setOpen(isOpen);
    }
    return(
        <SidebarContext.Provider value={{open, setIsOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar(){
    const context = useContext(SidebarContext);
    if (context === null){
        throw new Error("useSidebar must be used within a Sidebar Provider");
    }
    return context;
}
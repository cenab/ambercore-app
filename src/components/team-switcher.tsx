"use client"

import * as React from "react"
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"

const Logo = () => (
  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-800" />
)

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center">
            <Logo />
          </div>
          <span className="text-lg font-normal text-white font-['Menlo'] lowercase group-data-[collapsible=icon]:hidden">
            ambercore
          </span>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

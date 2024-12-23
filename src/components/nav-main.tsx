"use client"

import { useNavigate } from "react-router-dom"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "./ui/sidebar"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavMainProps {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
  }[]
}

export function NavMain({ items }: NavMainProps) {
  const navigate = useNavigate()

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            onClick={() => navigate(item.url)}
            className={cn(
              "h-12 flex items-center transition-colors",
              "group-data-[collapsed=true]:justify-center group-data-[collapsed=false]:px-4",
              "hover:bg-zinc-800/50",
              item.isActive && "bg-zinc-800/50 text-white"
            )}
          >
            <item.icon className="h-6 w-6 text-white shrink-0" />
            <span className="ml-3 text-sm text-white truncate group-data-[collapsed=true]:hidden">
              {item.title}
            </span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

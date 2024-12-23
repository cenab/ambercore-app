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
              "hover:bg-zinc-800/50 h-14 flex items-center",
              "group-data-[collapsed=true]:justify-center group-data-[collapsed=false]:pl-4",
              item.isActive && "bg-zinc-800/50 text-white"
            )}
          >
            <item.icon className="h-8 w-8 text-white" />
            <span className="ml-3 group-data-[collapsed=true]:hidden text-white">{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

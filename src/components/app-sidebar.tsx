"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Settings2,
  Terminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { Logo } from "./logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "/playground",
      icon: Terminal,
      isActive: true
    },
    {
      title: "Models",
      url: "/models",
      icon: Bot
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const sidebarRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const sidebar = sidebarRef.current
    if (!sidebar) return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
          setIsCollapsed(sidebar.getAttribute('data-state') === 'collapsed')
        }
      })
    })

    observer.observe(sidebar, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <div className="absolute top-4 left-2 z-50">
        <Logo collapsed={isCollapsed} />
      </div>
      <Sidebar ref={sidebarRef} collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="h-14" /> {/* Spacer for logo */}
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}

"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  Terminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { Logo } from "./logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
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
      isActive: true,
      items: [
        {
          title: "History",
          url: "/playground/history",
        },
        {
          title: "Starred",
          url: "/playground/starred",
        },
        {
          title: "Settings",
          url: "/playground/settings",
        },
      ],
    },
    {
      title: "Models",
      url: "/models",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/models/genesis",
        },
        {
          title: "Explorer",
          url: "/models/explorer",
        },
        {
          title: "Quantum",
          url: "/models/quantum",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction",
        },
        {
          title: "Get Started",
          url: "/docs/getting-started",
        },
        {
          title: "Tutorials",
          url: "/docs/tutorials",
        },
        {
          title: "Changelog",
          url: "/docs/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Team",
          url: "/settings/team",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
        {
          title: "Limits",
          url: "/settings/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/projects/design",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/projects/sales",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/projects/travel",
      icon: Map,
    },
  ],
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
          <NavProjects projects={data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </div>
  )
}

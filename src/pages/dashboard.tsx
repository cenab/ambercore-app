"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface DashboardPageProps {
  children?: React.ReactNode
}

export default function DashboardPage({ children }: DashboardPageProps) {
  return (
    <div className="dark">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 bg-zinc-900 border-b border-zinc-800 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Overview</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-zinc-900">
            {children || (
              <>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white">Projects</h3>
                    <p className="mt-2 text-zinc-400">View and manage your projects</p>
                  </div>
                  <div className="aspect-video rounded-xl bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white">Teams</h3>
                    <p className="mt-2 text-zinc-400">Collaborate with your team members</p>
                  </div>
                  <div className="aspect-video rounded-xl bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white">Settings</h3>
                    <p className="mt-2 text-zinc-400">Configure your preferences</p>
                  </div>
                </div>
                <div className="min-h-[50vh] flex-1 rounded-xl bg-black/40 p-6 md:min-h-min">
                  <h2 className="text-2xl font-semibold text-white">Activity</h2>
                  <p className="mt-2 text-zinc-400">Your recent activity will appear here</p>
                </div>
              </>
            )}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
} 
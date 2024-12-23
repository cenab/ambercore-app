"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, Search, X } from "lucide-react"
import { useState } from "react"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TradingViewCharts } from "@/components/charts/trading-view"

interface DashboardPageProps {
  children?: React.ReactNode
}

export default function DashboardPage({ children }: DashboardPageProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<string[]>([])
  const [selectedVariables, setSelectedVariables] = useState<string[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    
    // Example variables to search through - we can replace this with actual data
    const variables = [
      "$OPENAI_API_KEY",
      "$GITHUB_TOKEN",
      "$AWS_ACCESS_KEY",
      "$DATABASE_URL",
      "$STRIPE_SECRET_KEY"
    ]
    
    if (query.trim()) {
      const results = variables.filter(variable => 
        variable.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const toggleVariable = (variable: string) => {
    setSelectedVariables(prev => 
      prev.includes(variable)
        ? prev.filter(v => v !== variable)
        : [...prev, variable]
    )
  }

  return (
    <div className="dark">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 bg-zinc-900 border-b border-zinc-800 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 flex-1">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center w-full pr-4 relative">
                <Search className="h-4 w-4 text-zinc-400 absolute ml-3" />
                <Input 
                  type="search" 
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search variables... (e.g. $OPENAI_API_KEY, $GITHUB_TOKEN)" 
                  className="pl-9 bg-black/40 border-none h-9 text-sm text-zinc-400 placeholder:text-zinc-500 focus-visible:ring-zinc-700 w-full"
                />
                {searchQuery && (
                  <div className="absolute left-0 right-0 top-full mt-2">
                    <div className="rounded-xl bg-black/80 border border-zinc-800 shadow-lg backdrop-blur-sm">
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-zinc-400 mb-2">Search Results</h3>
                        {searchResults.length > 0 ? (
                          <ul className="space-y-2">
                            {searchResults.map((result, index) => (
                              <li 
                                key={index} 
                                className="text-sm text-white hover:bg-zinc-800/50 rounded-md p-2 cursor-pointer transition-colors flex items-center justify-between group"
                                onClick={() => toggleVariable(result)}
                              >
                                <span>{result}</span>
                                {selectedVariables.includes(result) ? (
                                  <X className="h-4 w-4 text-zinc-500 group-hover:text-red-400 transition-colors" />
                                ) : (
                                  <Plus className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-zinc-500 p-2">No variables found matching your search.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col bg-zinc-900">
            <TradingViewCharts />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
} 
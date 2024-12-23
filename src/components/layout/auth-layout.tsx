import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="dark">
      <div className="flex min-h-screen items-center justify-center bg-zinc-900">
        {children}
      </div>
    </div>
  )
} 
import { Navigate } from "react-router-dom"
import { useAuth } from "@/lib/auth-context"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-400 border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/" />
  }

  return <>{children}</>
} 
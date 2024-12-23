import * as React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"

export function RegisterForm({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [isLoading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="flex flex-col gap-4">
        <Button 
          variant="outline" 
          className="border-zinc-800 bg-black/40 text-white hover:bg-zinc-900 hover:text-white" 
          disabled={isLoading}
        >
          <Icons.apple className="mr-2 h-4 w-4" />
          Sign up with Apple
        </Button>
        <Button 
          variant="outline" 
          className="border-zinc-800 bg-black/40 text-white hover:bg-zinc-900 hover:text-white" 
          disabled={isLoading}
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </div>
      <div className="relative text-center text-sm">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-800" />
        </div>
        <span className="relative z-10 bg-black px-2 text-zinc-500">
          Or continue with email
        </span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-zinc-300">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border-zinc-800 bg-black/40 text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email" className="text-zinc-300">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="border-zinc-800 bg-black/40 text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="password" className="text-zinc-300">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              disabled={isLoading}
              required
              className="border-zinc-800 bg-black/40 text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="confirm-password" className="text-zinc-300">Confirm Password</Label>
            <Input
              id="confirm-password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              disabled={isLoading}
              required
              className="border-zinc-800 bg-black/40 text-white placeholder:text-zinc-500"
            />
          </div>
          <Button 
            type="submit" 
            className="bg-white text-black hover:bg-zinc-200" 
            disabled={isLoading}
          >
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Create Account
          </Button>
        </div>
      </form>
      <div className="text-center text-sm text-zinc-400">
        Already have an account?{" "}
        <Button
          variant="link"
          className="px-1 text-white hover:text-zinc-200"
          onClick={() => navigate("/")}
          disabled={isLoading}
        >
          Log in
        </Button>
      </div>
    </div>
  )
} 
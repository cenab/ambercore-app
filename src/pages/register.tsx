import { RegisterForm } from "@/components/auth/register-form"
import { AuthLayout } from "@/components/layout/auth-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <Card className="w-[400px] border-zinc-800 bg-black/95 text-zinc-200 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-white">Create an Account</CardTitle>
          <CardDescription className="text-zinc-400">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </AuthLayout>
  )
} 
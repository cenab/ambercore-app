import * as React from "react"

interface LogoProps {
  collapsed?: boolean
}

export const Logo = React.memo(function Logo({ collapsed }: LogoProps) {
  return (
    <div className="flex items-center pl-2 gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-800" />
      {!collapsed && (
        <span className="text-xl font-['Menlo'] text-white">
          ambercore
        </span>
      )}
    </div>
  )
}) 
import React from "react"

export type ButtonCoreProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const ButtonCore: React.FC<ButtonCoreProps> = ({children, onClick, className}) => {
    return <button onClick={onClick} className={className}>{children}</button>
}

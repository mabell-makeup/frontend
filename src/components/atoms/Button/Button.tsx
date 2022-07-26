import React from "react"

type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={className}>{children}</button>
    )
}

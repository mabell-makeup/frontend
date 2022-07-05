import React from "react"

type ButtonProps = {
  label: string
  onClick?: () => void
}

export const TextButton: React.FC<ButtonProps> = ({label, onClick}) => {
    return (
        <p onClick={onClick}>{label}</p>
    )
}

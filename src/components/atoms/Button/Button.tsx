import React from "react"
import { ButtonCoreProps } from "./ButtonCore"
import { PrimaryButton } from "./PrimaryButton"

export type ButtonProps = ButtonCoreProps & {
  variant?: "primary" | "secondary" | "text"
}

export const Button: React.FC<ButtonProps> = (props) => {
    switch (props.variant) {
        case "primary":
            return <PrimaryButton {...props} />
        default:
            return <PrimaryButton {...props} />
    }
}

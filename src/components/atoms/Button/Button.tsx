import React from "react"
import { ButtonCoreProps } from "./ButtonCore"
import { PrimaryButton } from "./PrimaryButton"
import { TextButton } from "./TextButton"

export type ButtonProps = ButtonCoreProps & {
  variant?: "primary" | "secondary" | "text"
}

export const Button: React.FC<ButtonProps> = (props) => {
    switch (props.variant) {
    case "text":
        return <TextButton {...props} />
    default:
        return <PrimaryButton {...props} />
    }
}

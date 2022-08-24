import { css } from "@emotion/css"
import React from "react"
import { IconBaseProps } from "react-icons"
import { classNames } from "../../../helper/style"
import { Icon, icon } from "../Icon/Icon"

export type ButtonCoreProps = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
  startIcon?: icon
  endIcon?: icon
  iconProps?: IconBaseProps
  disabled?: boolean
}

export const ButtonCore: React.FC<ButtonCoreProps> = ({children, onClick, className, startIcon, endIcon, iconProps, disabled=false}) => {
    const styles = createStyles(disabled)
    return (
        <button onClick={onClick} className={classNames([styles.button, className])} disabled={disabled}>
            {startIcon && <Icon {...iconProps} name={startIcon} />}
            {children}
            {endIcon && <Icon {...iconProps} name={endIcon} />}
        </button>
    )
}

const createStyles = (disabled: boolean) => ({
    button: css({
        display: "flex",
        alignItems: "center",
        gap: 4,
        cursor: disabled ? "inherit" : "pointer",
        ":hover": {
            opacity: disabled ? undefined : "0.7",
        }
    })
})

import { css } from "@emotion/css"
import React from "react"

type TextButtonProps = {
    label: string
    onClick?: () => void
}

export const TextButton: React.FC<TextButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className={styles.container} >{label}</button>
    )
}

const styles = {
    container: css({
        background: "transparent",
        border: "none"
    })
} 
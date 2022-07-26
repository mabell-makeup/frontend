import { css } from "@emotion/css"

type TextButtonProps = {
    children?: React.ReactNode
    onClick?: () => void
}

export const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.container} >{children}</button>
    )
}

const styles = {
    container: css({
        background: "transparent",
        border: "none",
        boxSizing: "border-box",
        borderBottom: "1px solid transparent",
        ":hover": {
            borderBottom: "1px solid #000000"
        }
    }),
} 
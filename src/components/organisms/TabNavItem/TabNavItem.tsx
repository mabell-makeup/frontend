import { css } from "@emotion/css"
import { useMemo } from "react"
import { classNames } from "../../../helper/style"

export type TabNavItemProps = {
    id: string,
    children: React.ReactNode
    onClick?: () => void
    isActive?: boolean
    className?: string
}

export const TabNavItem: React.FC<TabNavItemProps> = ({children, id, isActive, onClick, className}) => {
    const styles = useMemo(() => createStyles(isActive), [isActive])

    return (
        <div
            id={id}
            onClick={onClick}
            className={classNames([styles.container, className])}
        >
            {children}
        </div>
    )
}

const createStyles = (isActive?: boolean) => ({
    container: css({
        padding: "4px",
        fontSize: 24,
        borderBottom: isActive ? "3px solid #C4C4C4" : undefined,
        color: isActive ? "#000000" : "#444444",
        cursor: "pointer",
        ":hover": {
            color: "#000000"
        }
    })
})
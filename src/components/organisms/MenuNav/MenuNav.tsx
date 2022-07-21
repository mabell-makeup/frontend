import { css } from "@emotion/css"
import React from "react"
import { classNames } from "../../../helper/style"

export type MenuNavProps = {
    title?: string,
    menus: Array<{
        title: string
        onClick?: () => void
    }>,
    className?: string
}

export const MenuNav: React.FC<MenuNavProps> = ({ title, menus, className }) => {
    return (
        <div className={classNames([className, styles.container])}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.itemContainer}>
                {menus.map(({ title, onClick }) => <p className={styles.item} key={title} onClick={onClick}>{title}</p>)}
            </div>
        </div>
    )
}

const styles = {
    container: css({
        padding: 20,
    }),
    title: css({
        fontSize: 20,
        marginBottom: 10,
    }),
    itemContainer: css({
        display: "flex",
        flexFlow: "column",
        gap: 10,
    }),
    item: css({
        cursor: "pointer",
        ":hover": {
            opacity: 0.7
        }
    })
}
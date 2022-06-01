import { css } from "@emotion/css"
import React from "react"

export type MenuNavProps = {
  title?: string,
  menus: Array<{
    title: string
    onClick?: () => void
  }>
}

export const MenuNav: React.FC<MenuNavProps> = ({title, menus}) => {
    return (
      <div>
        <h2>{title}</h2>
        {menus.map(({title, onClick}) => <p className={styles.item} key={title} onClick={onClick}>{title}</p>)}
      </div>
    )
}

const styles = {
  item: css({
    cursor: "pointer",
    ":hover": {
      opacity: 0.7
    }
  })
}
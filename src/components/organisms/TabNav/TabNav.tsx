import { css } from "@emotion/css"
import React, { useState } from "react"
import { TabNavItem, TabNavItemProps } from "../TabNavItem/TabNavItem"

export type TabNavProps = {
    children?: React.ReactNode,
    defaultActiveTab?: string,
}

export const TabNav: React.FC<TabNavProps> = ({children, defaultActiveTab}) => {
    const [activeTab, setActiveTab] = useState<string | undefined>(defaultActiveTab)

    return (
        <div className={styles.container}>
          {React.Children.map(children, (child) => {
            const item = child as React.ReactElement<React.PropsWithChildren<TabNavItemProps>>

            if (item.type === TabNavItem) {
                const isActive = item.props.id === activeTab
                const onClick = () => {
                    setActiveTab(item.props.id)
                    item.props.onClick?.()
                }
                return React.cloneElement(item, { isActive, onClick })
            }

            return child
          })}
      </div>
    )
}

const styles = {
    container: css({
        display: "flex",
        gap: 30,
        justifyContent: "center",
        padding: "10px 0"
    }),
}
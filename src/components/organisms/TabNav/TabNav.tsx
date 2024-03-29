import { css } from "@emotion/css"
import React, { useState } from "react"
import { classNames } from "../../../helper/style"
import { TabNavItem, TabNavItemProps } from "../TabNavItem/TabNavItem"

export type TabNavProps = {
    children?: React.ReactNode,
    defaultActiveTab?: string,
    className?: string,
    onChange?: (activeTab: string) => void
}

export const TabNav: React.FC<TabNavProps> = ({children, defaultActiveTab, className, onChange}) => {
    const [activeTab, setActiveTab] = useState<string | undefined>(defaultActiveTab)

    return (
        <div className={classNames([styles.container, className])}>
            {React.Children.map(children, (child) => {
                const item = child as React.ReactElement<React.PropsWithChildren<TabNavItemProps>>
                if (item.type === TabNavItem) {
                    const isActive = item.props.id === activeTab
                    const onClick = () => {
                        setActiveTab(item.props.id)
                        item.props.onClick?.()
                        onChange && onChange(item.props.id)
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
        gap: 50,
        justifyContent: "center",
        padding: "10px 0"
    }),
}
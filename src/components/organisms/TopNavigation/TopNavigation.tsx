import { TabNav } from "../TabNav/TabNav"
import { TabNavItem } from "../TabNavItem/TabNavItem"

type TopNavigationProps = {
    className?: string
}

export const TopNavigation: React.FC<TopNavigationProps> = ({className}) => {
    return (
        <TabNav defaultActiveTab="top" className={className}>
            <TabNavItem id="top">TOP</TabNavItem>
            <TabNavItem id="time-line">タイムライン</TabNavItem>
            <TabNavItem id="search">さがす</TabNavItem>
            <TabNavItem id="my-clip">マイクリップ</TabNavItem>
        </TabNav>
    )
}
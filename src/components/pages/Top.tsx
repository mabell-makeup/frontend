import { css } from "@emotion/css"
import { useQueryWrapper } from "../../helper/reactQueryWrapper"
import { ImageList } from "../organisms/ImageList/ImageList"
import { MenuNav } from "../organisms/MenuNav/MenuNav"
import { TabNav } from "../organisms/TabNav/TabNav"
import { TabNavItem } from "../organisms/TabNavItem/TabNavItem"

// MEMO: サイドナビゲーションを含むことを考慮すると、Templatesに移行したほうがいいかもしれない。

export const Top = () => {
    const res = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/15', {
            requestOptions: { method: "GET" },
            queryKey: 'getImages',
            queryOptions: {staleTime: Infinity}
    });

    return (
        <div className={styles.container}>
            <MenuNav title="探す" menus={[{title: "色から探す"}, {title: "アイテムから探す"}, {title: "ジャンルから探す"}, {title: "ユーザーを探す"}]} className={styles.left} />
            <div className={styles.main}>
                <TabNav defaultActiveTab="top">
                    <TabNavItem id="top">TOP</TabNavItem>
                    <TabNavItem id="time-line">タイムライン</TabNavItem>
                    <TabNavItem id="search">さがす</TabNavItem>
                    <TabNavItem id="my-clip">マイクリップ</TabNavItem>
                </TabNav>
                {res.data?.message && <ImageList images={res.data.message} />}
            </div>
        </div>
    )
}

const styles = {
    container: css({
        display: "grid",
        gridTemplateAreas: `"left main right"`,
        gridTemplateColumns: "236px 1fr 236px"
    }),
    left: css({
        gridArea: "left",
    }),
    main: css({
        gridArea: "main",
    }),
    right: css({
        gridArea: "right",
    })
}
import { css } from "@emotion/css"
import { useQueryWrapper } from "../../helper/reactQueryWrapper"
import { Headline } from "../atoms/Headline/Headline"
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
            <TabNav defaultActiveTab="top" className={styles.header}>
                <TabNavItem id="top">TOP</TabNavItem>
                <TabNavItem id="time-line">タイムライン</TabNavItem>
                <TabNavItem id="search">さがす</TabNavItem>
                <TabNavItem id="my-clip">マイクリップ</TabNavItem>
            </TabNav>
            <MenuNav title="探す" menus={[{title: "色から探す"}, {title: "アイテムから探す"}, {title: "ジャンルから探す"}, {title: "ユーザーを探す"}]} className={styles.left} />
            <div className={styles.main}>
                <Headline>トレンド</Headline>
                {res.data?.message && <ImageList images={res.data.message} />}
            </div>
        </div>
    )
}

const styles = {
    container: css({
        display: "grid",
        gridTemplateAreas: `
            "content-header content-header content-header"
            "left           main           right"
        `,
        gridTemplateColumns: "236px 1fr 236px"
    }),
    header: css({
        gridArea: "content-header",
    }),
    left: css({
        gridArea: "left",
    }),
    main: css({
        gridArea: "main",
        marginTop: 40,
    }),
    right: css({
        gridArea: "right",
    })
}
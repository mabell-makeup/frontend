import { css } from "@emotion/css"
import { useQueryWrapper } from "../../helper/reactQueryWrapper"
import { Headline } from "../atoms/Headline/Headline"
import { ImageList } from "../organisms/ImageList/ImageList"
import { MenuNav } from "../organisms/MenuNav/MenuNav"
import { TopNavigation } from "../organisms/TopNavigation/TopNavigation"

// MEMO: サイドナビゲーションを含むことを考慮すると、Templatesに移行したほうがいいかもしれない。

export const Top = () => {
    const purple = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/3', {
            requestOptions: { method: "GET" },
            queryKey: 'trend',
            queryOptions: {staleTime: Infinity}
    });
    const sea = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/3', {
            requestOptions: { method: "GET" },
            queryKey: 'sea',
            queryOptions: {staleTime: Infinity}
    });
    

    return (
        <div className={styles.container}>
            <TopNavigation className={styles.header} />
            <MenuNav title="探す" menus={[{title: "色から探す"}, {title: "アイテムから探す"}, {title: "ジャンルから探す"}, {title: "ユーザーを探す"}]} className={styles.left} />
            <div className={styles.main}>
                <Headline>トレンド</Headline>
                <div className={styles.trendContainer}>
                    <h3># パープルメイク</h3>
                    {purple.data?.message && <ImageList images={purple.data.message} />}
                </div>
                <div className={styles.trendContainer}>
                    <h3># 海</h3>
                    {sea.data?.message && <ImageList images={sea.data.message} />}
                </div>
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
        gridTemplateColumns: "236px 1fr 236px",
        padding: "20px 0 120px 0"
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
        display: "flex",
        flexFlow: "column",
        gap: 30,
    }),
    right: css({
        gridArea: "right",
    }),
    trendContainer: css({
        display: "flex",
        flexFlow: "column",
        gap: 16,
    })
}
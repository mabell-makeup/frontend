import { css } from "@emotion/css"
import { useQueryWrapper } from "../../../helper/reactQueryWrapper";
import { Divider } from "../../atoms/Divider/Divider";
import { ImageList } from "../../organisms/ImageList/ImageList";
import { TabNav } from "../../organisms/TabNav/TabNav";
import { TabNavItem } from "../../organisms/TabNavItem/TabNavItem";
import { TopNavigation } from "../../organisms/TopNavigation/TopNavigation";
import { UserHeader } from "../../organisms/UserHeader/UserHeader";

const sampleUser = {
    name: "あり。",
    id: "@ariari",
    personalColor: "イエベ春",
    genre: "ナチュラル",
}

type MyPageProps = {
    children?: React.ReactNode
}

export const MyPage: React.FC<MyPageProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <TopNavigation />
                <UserHeader user={sampleUser} />
                <Divider />
            </div>
            <Content />
        </div>
    );
}

const Content = () => {
    const {data, refetch, isFetching} = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/10', {
        requestOptions: { method: "GET" },
        queryKey: 'sea',
    });

    return (
        <div className={styles.main}>
            <div className={styles.tabNav}>
                <TabNav defaultActiveTab="posts" onChange={() => refetch()}>
                    <TabNavItem id="posts">投稿</TabNavItem>
                    <TabNavItem id="clips">クリップ</TabNavItem>
                </TabNav>
            </div>
            {data?.message && !isFetching && <ImageList images={data?.message} />}
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
        gridTemplateColumns: "200px 1fr 200px",
        padding: "20px 0 120px 0"
    }),
    header: css({
        gridArea: "content-header",
    }),
    main: css({
        gridArea: "main",
        marginTop: 40,
        display: "flex",
        flexFlow: "column",
        gap: 30,
    }),
    tabNav: css({
        display: "flex",
    }),
    trendContainer: css({
        display: "flex",
        flexFlow: "column",
        gap: 16,
    })
}
import { css } from "@emotion/css"
import { useState } from "react";
import { useQueryWrapper } from "../../../helper/reactQueryWrapper";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import { CreatePostModal } from "../../organisms/CreatePostModal/CreatePostModal";
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
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <TopNavigation />
                <UserHeader user={sampleUser} />
                <Divider />
            </div>
            <Content onCreatePost={setModalVisible} />
            {modalVisible && (
                <CreatePostModal
                    title="画像を選択"
                    handleClose={() => setModalVisible(false)}
                />
            )}
        </div>
    );
}

const Content = ({onCreatePost}: {onCreatePost: (visible: boolean) => void}) => {
    const {data, refetch, isFetching} = useQueryWrapper<any>('https://dog.ceo/api/breeds/image/random/10', {
        requestOptions: { method: "GET" },
        queryKey: 'sea',
    });

    return (
        <div className={styles.main}>
            <div className={styles.contentHeader}>
                <TabNav defaultActiveTab="posts" onChange={() => refetch()}>
                    <TabNavItem id="posts">投稿</TabNavItem>
                    <TabNavItem id="clips">クリップ</TabNavItem>
                </TabNav>
                <Button className={styles.createPostButton} onClick={() => onCreatePost(true)}>メイクを登録</Button>
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
    contentHeader: css({
        display: "flex",
    }),
    createPostButton : css({
        marginLeft: "auto",
    })
}
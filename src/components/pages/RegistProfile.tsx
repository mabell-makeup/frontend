import { css } from "@emotion/css"
import { Avatar } from "../atoms/Avatar/Avatar"
import { TextInput } from "../molecules/TextInput/TextInput"

export const RegistProfile = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>アカウント情報</h1>
            <div>
                <Avatar />
                <a href="#profile">プロフィール写真を変更</a>
            </div>
            <TextInput label="ニックネーム" />
        </div>
    )
}

const styles = {
    container: css({
        minWidth: 300,
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: "60px 0 120px 0"
    }),
    title: css({
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    }),
}
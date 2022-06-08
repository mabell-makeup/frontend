import { css } from "@emotion/css"

export const SiteMap = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <a href="/">はじめての方へ</a>
                <a href="/">インスタ</a>
            </div>
            <div className={styles.column}>
                <a href="/">すべてのタイトル</a>
                <a href="/">ユーザー一覧</a>
                <a href="/">アイテム一覧</a>
                <a href="/">ブランド一覧</a>
            </div>
            <div className={styles.column}>
                <a href="/">プライバシーポリシー</a>
                <a href="/">利用規約</a>
            </div>
        </div>
    )
}

const styles = {
    container: css({
        display: "grid",
        gridTemplateColumns: "200px 200px 200px",
        height: "fit-content",
    }),
    column: css({
        display: "flex",
        flexFlow: "column",
        gap: 10,
        "> a": {
            color: "#FFF",
            textDecoration: "none",
            ":hover": {
                opacity: 0.7,
            }
        }
    })
}

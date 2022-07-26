import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { TextButton } from "../../atoms/TextButton/TextButton"
import { TextInputCore } from "../../atoms/TextInputCore/TextInputCore"

type HeaderProps = {
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={classNames([styles.container, className])}>
            <div className={styles.left}>
                <TextInputCore />
            </div>
            <div className={styles.center}>
                <h1 className={styles.title}>mabell</h1>
            </div>
            <div className={styles.right}>
                <TextButton>ログイン</TextButton>
                <TextButton>新規会員登録</TextButton>
            </div>
        </header>
    )
}

const styles = {
    container: css({
        gridArea: "header",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #000"
    }),
    left: css({
        flex: 1
    }),
    center: css({
        flex: 1,
    }),
    right: css({
        flex: 1,
        display: "flex",
        justifyContent: "end",
    }),
    title: css({
        textAlign: "center",
        fontSize: 26,
    })
}
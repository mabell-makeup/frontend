import { css } from "@emotion/css"
import { useNavigate } from "react-router-dom"
import { classNames } from "../../../helper/style"
import { Button } from "../../atoms/Button/Button"
import { TextInputCore } from "../../atoms/TextInputCore/TextInputCore"

type HeaderProps = {
    loggedIn?: boolean
    className?: string
}

export const Header: React.FC<HeaderProps> = ({ loggedIn=false, className }) => {
    const navigate = useNavigate()
    return (
        <header className={classNames([styles.container, className])}>
            <div className={styles.left}>
                <TextInputCore />
            </div>
            <div className={styles.center}>
                <h1 className={styles.title}>mabell</h1>
            </div>
            <div className={styles.right}>
                {loggedIn ? <Button variant="text" onClick={() => navigate("/mypage")}>マイページ</Button> : <Button variant="text">ログイン</Button>}
                {loggedIn ? <Button variant="text" onClick={() => navigate("/login")}>ログアウト</Button> : <Button variant="text">新規会員登録</Button>}
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
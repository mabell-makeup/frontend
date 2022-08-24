import { css } from "@emotion/css"
import { login } from "../../slices/auth"
import { Button } from "../atoms/Button/Button"
import { TextInputCore } from "../atoms/TextInputCore/TextInputCore"
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux"

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(login())
        navigate("/")
    }
    return (
        <div className={styles.container}>
            <h1>ログイン画面</h1>
            <div className={styles.mailLoginForm}>
                <TextInputCore placeholder="メールアドレス" />
                <TextInputCore placeholder="パスワード" />
                <Button variant="text">忘れた方はこちら</Button>
            </div>
            <div className={styles.socialLoginForm}>
                <Button>Googleでログイン</Button>
                <Button>Facebookでログイン</Button>
            </div>
            <Button onClick={onLogin}>ログイン</Button>
            <h2>アカウントを持っていない方</h2>
            <Link to="/signup"><Button>新規登録</Button></Link>
        </div>
    )
}

const styles = {
    container: css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        alignItems: "center",
        padding: "60px 0 120px 0"
    }),
    mailLoginForm: css({
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center"
    }),
    socialLoginForm: css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    })
}
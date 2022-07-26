import { css } from "@emotion/css"
import { Button } from "../atoms/Button/Button"
import { TextInputCore } from "../atoms/TextInputCore/TextInputCore"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate = useNavigate()
    const onSignup = () => {
        navigate("/login")
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>新規登録</h1>
            <div className={styles.socialSignupForm}>
                <h2 className={css({fontWeight: "bold"})}>外部アカウントで登録</h2>
                <div className={css({display: "grid"})}>
                    <Button>Googleで続ける</Button>
                    <Button>Facebookで続ける</Button>
                </div>
            </div>
            <div className={styles.mailSignupForm}>
                <h2 className={css({fontWeight: "bold"})}>メールアドレスで登録</h2>
                <TextInputCore className={styles.input} placeholder="例) 芽井 鐘" />
                <TextInputCore className={styles.input} placeholder="メールアドレスを入力" />
                <TextInputCore className={styles.input} placeholder="パスワードを入力" />
            </div>
            {/* TODO: Checkboxコンポーネントに変更すること */}
            <p className={styles.agreement}>
                <input type="checkbox" />
                <a href="#terms_of_use">利用規約</a>、<a href="#privacy_policy">プライバシーポリシー</a>に同意する
            </p>
            <Button onClick={onSignup} className={styles.submit}>登録する</Button>
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
    input: css({
        maxWidth: "none",
    }),
    mailSignupForm: css({
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: "100%"
    }),
    socialSignupForm: css({
        display: "flex",
        flexDirection: "column",
        gap: 20,
    }),
    agreement: css({
        textAlign: "center",
        fontSize: 12,
    }),
    submit: css({
        width: "100%",
        maxWidth: 200,
        alignSelf: "center",
    })
}
import { css } from "@emotion/css"
import { TextInputCore } from "../../atoms/TextInputCore/TextInputCore"


export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.left}>
                <TextInputCore />
            </div>
            <div className={styles.center}>
                <h1 className={styles.title}>mabell</h1>
            </div>
            <div className={styles.right}></div>
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
        flex: 1
    }),
    title: css({
        textAlign: "center"
    })
}
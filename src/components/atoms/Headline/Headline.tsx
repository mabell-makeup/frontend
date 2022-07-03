import { css } from "@emotion/css"

export function Headline(props: { children: string }) {
    return (
        <h2 className={styles.container}>{props.children}</h2>
    )
}

const styles = {
    container: css({
        borderBottom: "100% solid #C8C8C8"
    })
} 
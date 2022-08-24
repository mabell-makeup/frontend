import { css } from "@emotion/css"

export const Divider = () => {
    return (
        <div className={styles.divider} />
    )
}

const styles = {
    divider: css({
        background: "#999999",
        height: 4,
        width: "100%",
    }),
}
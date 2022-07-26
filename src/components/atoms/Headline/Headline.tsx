import { css } from "@emotion/css"

type HeadlineProps = {
    children?: React.ReactNode
}
export const Headline: React.FC<HeadlineProps> = ({ children }) => {
    return (
        <h2 className={styles.container}>{children}</h2>
    )
}

const styles = {
    container: css({
        borderBottom: "2px solid #C8C8C8",
        paddingBottom: 6,
        width: "100%",
        fontSize: 22,
    })
} 
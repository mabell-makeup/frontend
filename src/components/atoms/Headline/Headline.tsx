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
        borderBottom: "1px solid #C8C8C8",
        width: "100%"
    })
} 
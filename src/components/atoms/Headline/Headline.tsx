import { css } from "@emotion/css"

type HeadlineProps = {
    headlineText: string
}

export const Headline: React.FC<HeadlineProps> = ({headlineText}) => {
    return (
        <h2 className={styles.container}> {headlineText} </h2>
    )
}

const styles = {
    container: css({
        borderBottom: "100% solid #C8C8C8"
    })
  } 
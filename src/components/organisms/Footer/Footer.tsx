import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { SiteMap } from "../SiteMap/SiteMap"

type FooterProps = {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({className}) => {
    return (
        <footer className={classNames([styles.container, className])}>
            <div className={styles.content}>
                <SiteMap />
            </div>
            <div className={styles.copyright}>
                <p className={css({ marginBottom: 10 })}>©mabell 2022</p>
                <p>サイト内の文章、画像などの著作物はmabellに属します。複製、無断転載を禁止します。</p>
            </div>
        </footer>
    )
}

const styles = {
    container: css({
        gridArea: "footer",
        background: "#C4C4C4",
        display: "flex",
        flexFlow: "column",
        padding: 20,
    }),
    content: css({
        height: "100%",
        display: "grid",
        justifyItems: "center",
        alignContent: "center",
    }),
    copyright: css({
        textAlign: "center",
        "> p": {
            color: "#FFF",
        }
    })
}

import { css } from "@emotion/css"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../constants/style"
import { Header } from "../../organisms/Header/Header"
import { Footer } from "../../organisms/Footer/Footer"

type PublicRoutesLayoutProps = {
    children?: React.ReactNode
}

export const PublicRoutesLayout: React.FC<PublicRoutesLayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header className={styles.header} />
            <div className={styles.content}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    )
}

const styles = {
    container: css({
        display: "grid",
        gridTemplateAreas: `
        "header"
        "content"
        "footer"
    `,
        gridTemplateRows: `${HEADER_HEIGHT} minmax(calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT}), auto) ${FOOTER_HEIGHT}`,
    }),
    header: css({
        gridArea: "header",
    }),
    content: css({
        gridArea: "content",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
    footer: css({
        gridArea: "footer",
    })
}

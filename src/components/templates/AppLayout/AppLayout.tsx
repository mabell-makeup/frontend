import { css } from "@emotion/css"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../../constants/style"
import { Header } from "../../organisms/Header/Header"
import { Footer } from "../../organisms/Footer/Footer"
import { useAppSelector } from "../../../helper/store"

type AppLayoutProps = {
    children?: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const {loggedIn} = useAppSelector(({auth: {loggedIn}}) => ({loggedIn}))
    return (
        <div className={styles.container}>
            <Header className={styles.header} loggedIn={loggedIn} />
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
    }),
    footer: css({
        gridArea: "footer",
    })
}

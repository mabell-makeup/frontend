import { css } from "@emotion/css"
import { useEffect } from "react"
import { zIndex } from "../../../constants/style"
import { disableScroll } from "../../../helper/scrollControl"

type OverlayProps = {
    children?: React.ReactNode
}

export const Overlay: React.FC<OverlayProps> = ({children}) => {
    useEffect(() => {
        disableScroll()
    })

    return (
        <div className={styles.overlay}>
            <div>
                {children}
            </div>
        </div>
    )
}

const styles = {
    overlay: css({
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: zIndex.overlay,
        width: "100vw",
        height: "100vh",
        background: "#00000088",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }),
}
import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { Overlay } from "../../atoms/Overlay/Overlay"

type ModalProps = {
    children?: React.ReactNode
    className?: string
}

export const Modal: React.FC<ModalProps> = ({children, className}) => {
    return (
        <Overlay>
            <div className={classNames([styles.container, className])}>
                {children}
            </div>
        </Overlay>
    )
}

const styles = {
    container: css({
        minHeight: 100,
        minWidth: 200,
        borderRadius: "4px",
        background: "#FFFFFF",
        padding: "40px 20px",
    })
}

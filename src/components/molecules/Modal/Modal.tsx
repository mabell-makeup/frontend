import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { Icon } from "../../atoms/Icon/Icon"
import { Overlay } from "../../atoms/Overlay/Overlay"

export type ModalProps = {
    children?: React.ReactNode
    className?: string
    handleClose?: () => void
}

export const Modal: React.FC<ModalProps> = ({children, className, handleClose}) => {
    return (
        <Overlay>
            <div className={classNames([styles.container, className])}>
                <div className={styles.modalHeader}>
                    <Icon
                        className={styles.close}
                        name="MdClose"
                        size={30}
                        color="#D9D9D9"
                        onClick={handleClose}
                    />
                </div>
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
        padding: "10px 20px 40px 20px",
    }),
    modalHeader: css({
        display: "flex",
        marginBottom: 20,
    }),
    close: css({
        marginLeft: "auto",
        cursor: "pointer",
        ":hover": {
            color: "#C4C4C4 !important"
        }
    })
}

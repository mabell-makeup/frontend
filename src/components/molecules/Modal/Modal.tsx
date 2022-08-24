import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { Button } from "../../atoms/Button/Button"
import { Icon } from "../../atoms/Icon/Icon"
import { Overlay } from "../../atoms/Overlay/Overlay"

export type ModalProps = ModalHeaderProps & {
    children?: React.ReactNode
    className?: string
}

export const Modal: React.FC<ModalProps> = ({children, className, ...headerProps}) => {
    return (
        <Overlay>
            <div className={classNames([styles.container, className])}>
                <ModalHeader {...headerProps} />
                {children}
            </div>
        </Overlay>
    )
}

type ModalHeaderProps = {
    title?: string
    description?: string
    handleClose?: () => void
}

const ModalHeader: React.FC<ModalHeaderProps> = ({title, description, handleClose}) => {
    return (
        <div className={styles.modalHeader}>
            <div>
                <Button
                    variant="text"
                    startIcon="FiChevronLeft"
                    iconProps={{size: 30, color: "6F6F6F"}}
                    className={styles.back}
                >
                    {title}
                </Button>
                <p className={styles.description}>{description}</p>
            </div>
            <Icon
                className={styles.close}
                name="MdClose"
                size={30}
                color="6F6F6F"
                onClick={handleClose}
            />
    </div>
    )
}

const styles = {
    container: css({
        minHeight: 100,
        minWidth: 200,
        borderRadius: "4px",
        background: "#FFFFFF",
        paddingTop: 10,
        paddingBottom: 40,
    }),
    modalHeader: css({
        display: "flex",
        alignItems: "center",
        margin: "0 10px 10px 10px",
    }),
    back: css({
        fontSize: 18,
        borderBottom: "none !important",
    }),
    description: css({
        marginTop: 4,
        paddingLeft: 40,
        fontSize: 14,
    }),
    close: css({
        marginLeft: "auto",
        cursor: "pointer",
        ":hover": {
            opacity: "0.7",
        }
    }),
}

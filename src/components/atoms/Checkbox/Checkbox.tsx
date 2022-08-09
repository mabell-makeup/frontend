import { css } from "@emotion/css"
import { useState } from "react"
import { classNames } from "../../../helper/style"
import { Icon } from "../Icon/Icon"

type CheckboxProps = {
    children?: React.ReactNode
    className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({children, className}) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className={classNames([styles.container, className])} onClick={() => setIsChecked(!isChecked)}>
            <input type="checkbox" value={isChecked.toString()} className={styles.hidden} />
            {isChecked
                ? <Icon name="MdCheckCircle" color="#A154F2" size={18} />
                : <Icon name="MdCheckCircle" color="#D9D9D9" size={18} />
            }
            {children}
        </div>
    )
}

const styles = {
    container: css({
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: 4,
    }),
    hidden: css({
        display: "none"
    })
}
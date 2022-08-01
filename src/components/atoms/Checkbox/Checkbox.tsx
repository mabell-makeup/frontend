import { css } from "@emotion/css"
import { useState } from "react"
import { Icon } from "../Icon/Icon"

type CheckboxProps = {
    children?: React.ReactNode
}

export const Checkbox: React.FC<CheckboxProps> = ({children}) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className={styles.container} onClick={() => setIsChecked(!isChecked)}>
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
import { css } from "@emotion/css"

type LabelProps = {
    children?: React.ReactNode
}

export const Label: React.FC<LabelProps> = ({children}) => {
    return <label className={styles.label}>{children}</label>
}

const styles = {
    label: css({
        fontSize: 14,
    })
}
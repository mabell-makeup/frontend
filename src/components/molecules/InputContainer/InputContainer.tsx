import { css } from "@emotion/css"
import { Label } from "../../atoms/Label/Label"

export type InputContainerProps = {
    label?: string
    children?: React.ReactNode,
}

export const InputContainer: React.FC<InputContainerProps> = ({children, label}) => {
    return (
        <div className={styles.container}>
            <Label>{label}</Label>
            {children}
        </div>
    )
}
const styles = {
    container: css({
        display: "flex",
        flexFlow: "column",
        gap: 4,
    })
}

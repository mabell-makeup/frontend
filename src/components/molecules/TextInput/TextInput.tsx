import { css } from "@emotion/css"
import { Label } from "../../atoms/Label/Label"
import { TextInputCore } from "../../atoms/TextInputCore/TextInputCore"

type TextInputProps = {
    label?: string
}

export const TextInput: React.FC<TextInputProps> = ({label}) => {
    return (
        <div className={styles.container}>
            <Label>{label}</Label>
            <TextInputCore />
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
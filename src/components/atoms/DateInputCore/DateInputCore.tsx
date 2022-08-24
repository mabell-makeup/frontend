import { css } from "@emotion/css"
import DatePicker, { ReactDatePickerProps } from "react-datepicker"

// TODO: 独自スタイルを追加
import "react-datepicker/dist/react-datepicker.css"

export type DateInputCoreProps = ReactDatePickerProps

export const DateInputCore: React.FC<ReactDatePickerProps> = (props) => {
    return (
        <DatePicker {...props} className={styles.input} />
    )
}

const styles = {
    input: css({
        height: 40,
        padding: 10,
        width: "100%",
        maxWidth: 200,
        boxSizing: "border-box",
    })
}

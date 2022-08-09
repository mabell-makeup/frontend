import { useState } from "react"
import DatePicker from "react-datepicker"

// TODO: 独自スタイルを追加
import "react-datepicker/dist/react-datepicker.css"

export const DateInput = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date())
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    )
}

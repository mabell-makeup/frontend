import { InputContainer, InputContainerProps } from "../InputContainer/InputContainer"
import { DateInputCore, DateInputCoreProps } from "../../atoms/DateInputCore/DateInputCore"

type DateInputProps = InputContainerProps & DateInputCoreProps

export const DateInput: React.FC<DateInputProps> = ({label, ...props}) => {
    return (
        <InputContainer label={label}>
            <DateInputCore {...props} />
        </InputContainer>
    )
}
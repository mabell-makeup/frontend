import { TextInputCore } from "../../atoms/TextInputCore/TextInputCore"
import { InputContainer, InputContainerProps } from "../InputContainer/InputContainer"

type TextInputProps = InputContainerProps

export const TextInput: React.FC<TextInputProps> = ({label}) => {
    return (
            <InputContainer label={label}>
                <TextInputCore />
            </InputContainer>
    )
}

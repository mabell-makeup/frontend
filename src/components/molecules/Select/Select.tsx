import { InputContainer, InputContainerProps } from "../InputContainer/InputContainer"
import { SelectCore, SelectCoreProps } from "../../atoms/SelectCore/SelectCore"

type SelectProps = InputContainerProps & SelectCoreProps

export const Select: React.FC<SelectProps> = ({label, ...props}) => {
    return (
        <InputContainer label={label}>
            <SelectCore {...props} />
        </InputContainer>
    )
}
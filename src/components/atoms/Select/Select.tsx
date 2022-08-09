import { InputContainer, InputContainerProps } from "../../molecules/InputContainer/InputContainer"
import { SelectCore, SelectCoreProps } from "../SelectCore/SelectCore"

type SelectProps = InputContainerProps & SelectCoreProps

export const Select: React.FC<SelectProps> = ({label, ...props}) => {
    return (
        <InputContainer label={label}>
            <SelectCore {...props} />
        </InputContainer>
    )
}
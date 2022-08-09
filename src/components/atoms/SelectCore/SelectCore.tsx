import ReactSelect from "react-select"
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager"

export type SelectCoreProps = StateManagerProps

// TODO: Selectコンポーネントに独自スタイルを当てる場合はここで当てる
export const SelectCore: React.FC<SelectCoreProps> = (props) => {
    return (
        <ReactSelect {...props} />
    )
}

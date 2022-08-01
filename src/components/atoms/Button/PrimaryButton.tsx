import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { ButtonCore, ButtonCoreProps } from "./ButtonCore"

/**
 * このコンポーネントを使用する場合、
 * `Button`コンポーネントの`type="primary"`を利用してください
 */
export const PrimaryButton: React.FC<ButtonCoreProps> = ({className, ...props}) => {
    return (
        <ButtonCore {...props} className={classNames([styles.primary, className])} />
    )
}

const styles = {
    primary: css({
        border: "1px solid #000000",
        padding: "10px 20px",
        boxSizing: "border-box",
        background: "transparent",
    })
}
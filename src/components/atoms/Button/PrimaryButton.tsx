import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { ButtonProps } from "./Button"
import { ButtonCore } from "./ButtonCore"

/**
 * このコンポーネントを使用する場合、
 * `Button`コンポーネントの`type="primary"`を利用してください
 */
export const PrimaryButton: React.FC<ButtonProps> = ({className, ...props}) => {
    return (
        <ButtonCore {...props} className={classNames([styles.primary, className])} />
    )
}

const styles = {
    primary: css({
        
    })
}
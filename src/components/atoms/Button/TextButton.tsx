import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { ButtonCore, ButtonCoreProps } from "./ButtonCore"

/**
 * このコンポーネントを使用する場合、
 * `Button`コンポーネントの`type="text"`を利用してください
 */
export const TextButton: React.FC<ButtonCoreProps> = ({className, ...props}) => {
    return (
        <ButtonCore {...props} className={classNames([styles.container, className])} />
    )
}

const styles = {
    container: css({
        background: "transparent",
        border: "none",
        boxSizing: "border-box",
        borderBottom: "1px solid transparent",
        ":hover": {
            borderBottom: "1px solid #000000"
        }
    }),
} 
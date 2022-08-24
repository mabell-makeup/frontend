import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"

type TextINputCoreProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const TextInputCore = ({className, ...props}: TextINputCoreProps) => {
    return <input type="text" placeholder="検索" className={classNames([styles.container, className])} {...props} />
}

const styles = {
    container: css({
        height: 40,
        padding: 10,
        width: "100%",
        maxWidth: 200,
        boxSizing: "border-box",
    })
}
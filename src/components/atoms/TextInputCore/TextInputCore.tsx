import { css } from "@emotion/css"
import { classNmaes } from "../../../helper/style"

type TextINputCoreProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const TextInputCore = ({className, ...props}: TextINputCoreProps) => {
  return <input type="text" className={classNmaes([styles.container, className])} {...props} />
}

const styles = {
  container: css({
    height: 40,
  })
}
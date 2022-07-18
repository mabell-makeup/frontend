import * as icons from "react-icons/bs"
import {IconBaseProps} from "react-icons"

type IconProps = IconBaseProps & {
  name: keyof typeof icons
}

/**
 * アイコンはここから探すことができます。
 * https://react-icons.github.io/react-icons/icons?name=bs
 */
export const Icon: React.FC<IconProps> = ({name, ...props}) => {
  const IconCore = icons[name]
  return <IconCore {...props} />
}

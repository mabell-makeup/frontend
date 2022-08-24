import * as iconsMd from "react-icons/md"
import * as iconsFi from "react-icons/fi"
import {IconBaseProps} from "react-icons"

type IconProps = IconBaseProps & {
  name: keyof typeof iconsFi | keyof typeof iconsMd
}

const icons = {...iconsMd, ...iconsFi}

/**
 * 使用できるアイコンは以下です。
 * - [Feather](https://react-icons.github.io/react-icons/icons?name=fi)
 * - [Material Design icons](https://react-icons.github.io/react-icons/icons?name=md)
 */
export const Icon: React.FC<IconProps> = ({name, ...props}) => {
    const IconCore = icons[name]
    return <IconCore {...props} />
}

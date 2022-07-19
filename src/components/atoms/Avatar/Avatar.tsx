import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"

type AvatarProps = {
  src?: string
  alt?: string
}

export const Avatar = ({src, alt}: AvatarProps) => {
    if (src) {
        return <img src={src} alt={alt} className={styles.container} />
    }
    return (
        <div className={classNames([styles.container, styles.noImage])} />
    )
}

const styles = {
    container: css({
        height: 30,
        width: 30,
        borderRadius: "50%",
        objectFit: "cover",
    }),
    noImage: css({
        background: "#C4C4C4",
    })
}

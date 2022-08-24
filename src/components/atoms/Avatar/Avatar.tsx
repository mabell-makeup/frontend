import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { Icon } from "../Icon/Icon"

type AvatarProps = {
  src?: string
  alt?: string
}

export const Avatar = ({src, alt}: AvatarProps) => {
    if (src) {
        return <img src={src} alt={alt} className={styles.container} />
    }
    return (
        <div className={classNames([styles.container, styles.noImage])}>
            <Icon name="FiUser" color="#FFFFFF" size={30} />
        </div>
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
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    })
}

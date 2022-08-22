import { css } from "@emotion/css"
import { Avatar } from "../../atoms/Avatar/Avatar"

type UserHeaderProps = {
    user: {
        name: string
        id: string
        personalColor: string
        genre: string
    },
}

export const UserHeader: React.FC<UserHeaderProps> = ({user}) => {
    const {name, id, personalColor, genre} = user
    return (
        <div className={styles.container}>
            <Avatar />
            <div className={styles.userInfo}>
                <p>{name}</p>
                <p className={css({marginTop: 10})}>{[id, personalColor, genre].join(" | ")}</p>
            </div>
        </div>
    )
}

const styles = {
    container: css({
        display: "flex",
        alignItems: "center",
        margin: "60px 200px 30px",
    }),
    userInfo: css({
        paddingLeft: 20
    })
}

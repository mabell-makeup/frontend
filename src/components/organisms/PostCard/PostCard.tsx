import { css } from "@emotion/css";
import { Icon } from "../../atoms/Icon/Icon";
import { Card, CardProps } from "../../molecules/Card/Card"

type PostCardProps = CardProps & {
    onLike?: () => void
    onBookmark?: () => void
    postUserId?: string
};

export const PostCard: React.FC<PostCardProps> = (props) => {
    return (
        <Card {...props}>
            <div className={styles.cardFooter}>
                <div className={styles.left}>
                    <Icon name="BsCircleFill" color="#C4C4C4" />
                    <span>user_name</span>
                    <span>イエベ春</span>
                </div>
                <div className={styles.right}>
                    <Icon name="BsHeart" color="#C4C4C4" />
                    <Icon name="BsBookmarkFill" color="#C4C4C4" />
                </div>
            </div>
        </Card>
    )
}

const styles = {
    cardFooter: css({
        display: "flex",
        height: 40,
        alignItems: "center",
        padding: "0 10px"
    }),
    left: css({
        display: "flex",
        alignItems: "center",
        gap: 4,
        "> span": {
            fontSize: 10
        },
    }),
    right: css({
        display: "flex",
        marginLeft: "auto",
        gap: 10,
    })
}
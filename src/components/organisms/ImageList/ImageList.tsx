import { css } from "@emotion/css"
import { classNames } from "../../../helper/style"
import { PostCard } from "../PostCard/PostCard"

type ImageListProps = {
    images: Array<string>,
    className?: string,
}

export const ImageList = ({ images, className }: ImageListProps) => {
    return (
        <div className={classNames([styles.container, className])}>
            {images.map((image, index) => <PostCard key={index} src={image} />)}
        </div>
    )
}

const styles = {
    container: css({
        display: "grid",
        gridAutoRows: "250px",
        gridTemplateColumns: "repeat(auto-fill, 300px)",
        columnGap: 20,
        rowGap: 30,
    })
}
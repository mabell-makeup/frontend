import { css } from "@emotion/css"
import { PostCard } from "../PostCard/PostCard"

type ImageListProps = {
  images: Array<string>
}

export const ImageList = ({images}: ImageListProps) => {
  return (
    <div className={styles.container}>
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
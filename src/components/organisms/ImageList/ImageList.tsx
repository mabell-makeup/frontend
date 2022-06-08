import { css } from "@emotion/css"
import { Card } from "../../molecules/Card/Card"

type ImageListProps = {
  images: Array<string>
}

export const ImageList = ({images}: ImageListProps) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => <Card key={index} src={image} />)}
    </div>
  )
}

const styles = {
  container: css({
    display: "grid",
    gridAutoRows: "200px",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gap: 10,
  })
}
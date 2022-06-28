import { css } from "@emotion/css"

type CardProps = {
  src?: string
  alt?: string
}

export const Card = ({src, alt}: CardProps) => {
  return (
    <img src={src} alt={alt} className={styles.container} />
  )
}

const styles = {
  container: css({
    height: 200,
    width: 200,
    objectFit: "cover"
  })
}
import { css } from "@emotion/css"

export type CardProps = {
    src?: string
    alt?: string
    children?: React.ReactNode
}


const Image: React.FC<Pick<CardProps, "src" | "alt">> = ({src="", alt=""}) => {
    if (src) {
        return <img src={src} alt={alt} className={styles.image} />
    }
    return <div className={styles.image}>no image</div>
}

export const Card = ({src, alt, children}: CardProps) => {
    return (
        <div className={styles.container}>
            <Image src={src} alt={alt} />
            {children}
        </div>
    )
}

const styles = {
    container: css({
        borderRadius: 10,
        height: 250,
        backgroundColor: "#FFF",
    }),
    image: css({
        height: 210,
        width: 300,
        objectFit: "cover",
        borderRadius: "10px 10px 0 0",
    }),
}

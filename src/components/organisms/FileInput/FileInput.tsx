import { css } from "@emotion/css"
import { Button } from "../../atoms/Button/Button"

type FileInputProps = {
    onDrop?: (preview: preview) => void
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export const FileInput: React.FC<FileInputProps> = ({onDrop, onClick}) => {
    const handleDrop = createDropHandler(onDrop)

    return (
        <div id="drop_zone" onDrop={handleDrop} onDragOver={onDragOver} className={styles.container}>
            <p>画像をドラック＆ドロップしてください</p>
            <Button className={styles.fileSelectButton}>写真を選択</Button>
        </div>
    )
}

export type preview = string | ArrayBuffer | null | undefined

const createDropHandler = (
    onDrop: FileInputProps["onDrop"]
) => (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files) {
        const file = files[0]
        const reader = new FileReader()
        reader.onload = (e: ProgressEvent<FileReader>) => {
            onDrop && onDrop(e?.target?.result)
        }
        reader.readAsDataURL(file)
    }
}

const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
}

const styles = {
    container: css({
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 600,
        height: 300,
        padding: "0 20px",
        background: "#D9D9D9",
    }),
    fileSelectButton: css({
        display: "initial",
        marginTop: 10,
    })
}

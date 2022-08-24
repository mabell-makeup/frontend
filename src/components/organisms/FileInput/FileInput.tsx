import { css } from "@emotion/css"
import { useState } from "react"
import { Button } from "../../atoms/Button/Button"

type FileInputProps = {
    onSetPreview?: () => void
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export const FileInput: React.FC<FileInputProps> = ({onSetPreview, onClick}) => {
    const [preview, setPreview] = useState<preview>()
    const onDrop = createDropHandler(setPreview, onSetPreview)
    
    return (
        <div id="drop_zone" onDrop={onDrop} onDragOver={onDragOver} className={styles.container}>
            {preview ? <Preview src={preview} onClick={onClick} /> : <Ready />}
        </div>
    )
}

type preview = string | ArrayBuffer | null | undefined

const Preview = ({
    src, onClick
}: {
    src: string | ArrayBuffer,
    onClick?: FileInputProps["onClick"]
}) => {
    return (
        <img src={String(src)} alt="preview" className={styles.preview} onClick={onClick} />
    )
}

const Ready = () => {
    return (
        <div className={styles.ready}>
            <p>画像をドラック＆ドロップしてください</p>
            <Button className={styles.fileSelectButton}>写真を選択</Button>
        </div>
    )
}

const createDropHandler = (
    setPreview: React.Dispatch<React.SetStateAction<preview>>,
    onSetPreview: FileInputProps["onSetPreview"]
) => (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files) {
        const file = files[0]
        const reader = new FileReader()
        reader.onload = (e: ProgressEvent<FileReader>) => {
            setPreview(e?.target?.result)
            onSetPreview && onSetPreview()
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
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 600,
        height: 300,
    }),
    ready: css({
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#D9D9D9",
        width: "100%",
        height: "100%",
        padding: "0 10px"
    }),
    preview: css({
        width: 200,
    }),
    fileSelectButton: css({
        display: "initial",
        marginTop: 10,
    })
}

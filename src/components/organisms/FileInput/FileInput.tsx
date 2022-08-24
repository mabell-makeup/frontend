import { css } from "@emotion/css"
import { useState } from "react"
import { Button } from "../../atoms/Button/Button"


export const FileInput = () => {
    const [preview, setPreview] = useState<preview>()
    const onDrop = createDropHandler(setPreview)
    
    return (
        <div id="drop_zone" onDrop={onDrop} onDragOver={onDragOver} className={styles.container}>
            {preview ? <Preview src={preview} /> : <Ready />}
        </div>
    )
}

type preview = string | ArrayBuffer | null | undefined

const Preview = ({src}: {src: string | ArrayBuffer}) => {
    return (
        <img src={String(src)} alt="preview" className={styles.preview} />
    )
}

const Ready = () => {
    return (
        <>
            <p>画像をドラック＆ドロップしてください</p>
            <Button className={styles.fileSelectButton}>写真を選択</Button>
        </>
    )
}

const createDropHandler = (setPreview: React.Dispatch<React.SetStateAction<preview>>) => (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    if (files) {
        const file = files[0]
        const reader = new FileReader()
        reader.onload = (e: ProgressEvent<FileReader>) => {
            setPreview(e?.target?.result)
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
        background: "#D9D9D9",
    }),
    preview: css({
        width: 200,
    }),
    fileSelectButton: css({
        display: "initial",
    })
}

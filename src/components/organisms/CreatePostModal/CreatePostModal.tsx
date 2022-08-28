import { css } from "@emotion/css"
import { forwardRef, useRef, useState } from "react"
import { Button } from "../../atoms/Button/Button"
import { Modal, ModalProps } from "../../molecules/Modal/Modal"
import { Select } from "../../molecules/Select/Select"
import { FileInput, preview } from "../FileInput/FileInput"

type CreatePostModalProps = ModalProps

/**
 * x: 投稿画像内でのX座標  
 * y: 投稿画像内でのY座標  
 * offsetX: 画面描画時のX軸方向オフセット  
 * offsetY: 画面描画時のY軸方向オフセット  
 */
type coordinate = [
    x: number,
    y: number,
    offsetX: number,
    offsetY: number
]


export const CreatePostModal: React.FC<CreatePostModalProps> = ({ handleClose }) => {
    const [stepNum, setStepNum] = useState(0)
    const [coordinate, setCoordinate] = useState<coordinate | null>(null)
    const [preview, setPreview] = useState<preview>()
    const handleClick = createHandleClick(setCoordinate)
    // TODO: Contextに書き換える
    const steps = useCreateSteps(setStepNum, handleClick, preview, setPreview, coordinate)
    const {title, description, content} = steps[stepNum]

    return (
        <Modal
            title={title}
            description={description}
            handleClose={handleClose}
        >
            <div className={styles.contentContainer}>
                {content}
            </div>
            {coordinate && <Point coordinate={coordinate} />}
        </Modal>
    )
}

const Point: React.FC<{coordinate: coordinate}> = ({coordinate}) => {
    const pointStyle = createPointStyle(coordinate)

    return (
        coordinate && <div className={pointStyle} />
    )
}

const createHandleClick = (
    setCoordinate: React.Dispatch<React.SetStateAction<coordinate | null>>
) => (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
) => {
    const clientX = e.clientX
    const clientY = e.clientY
    const coordinate = getCoordinate(clientX, clientY, e.currentTarget)
    setCoordinate(coordinate)
}

const getCoordinate = (clientX: number, clientY: number, element: HTMLElement): coordinate | null => {
    const rectTop = element.getBoundingClientRect().top
    const rectLeft = element.getBoundingClientRect().left
    const x = clientX - rectTop
    const y = clientY - rectLeft
    if (x > 0 || y > 0) {
        return [x, y, rectTop, rectLeft]
    }
    return null
}

const useCreateSteps = (
    setStepNum: (stepNum: number) => void,
    handleClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
    preview: preview,
    setPreview: (preview: preview) => void,
    coordinate: coordinate | null,
) => {
    const ref = useRef(null)
    return [
        {
            title: "画像を選択",
            content: (
                <FileInput onDrop={(preview) => {
                    setPreview(preview)
                    setStepNum(1)
                }} />
            ),
        },
        {
            title: "使用したコスメを選択",
            description: "コスメを使用した部分をクリックしてください",
            content: (
                <div>
                    <Preview src={preview ? String(preview) : undefined} onClick={handleClick} ref={ref} />
                    <Button disabled={!coordinate} onClick={() => setStepNum(2)}>次へ</Button>
                </div>
            )
        },
        {
            title: "使用したコスメを選択",
            description: "写真をクリックして使用したコスメを教えて下さい",
            content: (
                <div className={styles.selectCosme}>
                    <Preview src={preview ? String(preview) : undefined} onClick={handleClick} ref={ref} />
                    <Select label="カテゴリー" options={[{label: "アイシャドウ", value: "0"}, {label: "アイライン", value: "1"}]} />
                    <Select label="ブランド" />
                    <Select label="アイテム" />
                    <Select label="色" />
                    <Button disabled={!coordinate} onClick={() => setStepNum(3)}>次へ</Button>
                </div>
            )
        },
        {
            title: "投稿内容",

        }
    ]
}

type PreviewProps = {
    src?: string
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const Preview: React.FC<PreviewProps> = forwardRef(({src, onClick}, ref) => {
    return (
        <div ref={ref}>
            <img src={src} alt="preview" onClick={onClick} className={styles.preview} />
        </div>
    )
})

const createPointStyle = ([x=0, y=0, offsetX=0, offsetY=0]: coordinate) => {
    const pointSize = 10
    return css({
        position: "absolute",
        left: x + offsetX - (pointSize / 2),
        top: y + offsetY - (pointSize / 2),
        width: pointSize,
        height: pointSize,
        background: "#A154F2",
        borderRadius: "50%",
        zIndex: 1000,
    })
}

const styles = {
    contentContainer: css({
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 60px",
    }),
    preview: css({
        width: 200,
    }),
    selectCosme: css({
        display: "flex",
        flexFlow: "column",
        gap: 20,
    })
}

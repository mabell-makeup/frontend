import { css } from "@emotion/css"
import { useState } from "react"
import { Modal, ModalProps } from "../../molecules/Modal/Modal"
import { FileInput } from "../FileInput/FileInput"

type CreatePostModalProps = ModalProps

/**
 * x: 投稿画像内でのX座標  
 * y: 投稿画像内でのY座標  
 * offsetX: 画面描画時のX軸方向オフセット  
 * offsetY: 画面描画時のY軸方向オフセット  
 */
type point = [
    x: number,
    y: number,
    offsetX: number,
    offsetY: number
]


export const CreatePostModal: React.FC<CreatePostModalProps> = ({ handleClose }) => {
    const [stepNum, setStepNum] = useState(0)
    const [point, setPoint] = useState<point | null>(null)
    const handleClick = createHandleClick(setPoint)
    const steps = createSteps(setStepNum, handleClick)
    const {title, description, content} = steps[stepNum]
    const pointStyle = point ? createPointStyle(point) : undefined

    return (
        <Modal
            title={title}
            description={description}
            handleClose={handleClose}
        >
            <div className={styles.contentContainer}>
                {content}
            </div>
            {point && <div className={pointStyle} />}
        </Modal>
    )
}

const createHandleClick = (
    setPoint: React.Dispatch<React.SetStateAction<point | null>>
) => (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
) => {
    const clientX = e.clientX
    const clientY = e.clientY
    const rectTop = e.currentTarget.getBoundingClientRect().top
    const rectLeft = e.currentTarget.getBoundingClientRect().left
    const x = clientX - rectTop
    const y = clientY - rectLeft
    console.log("set: ", [x, y, rectTop, rectLeft])
    if (x > 0 || y > 0) {
        setPoint([x, y, rectTop, rectLeft])
    } else {
        setPoint(null)
    }
}

const createSteps = (
    setStepNum: (stepNum: number) => void,
    handleClick: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
) => [
    {
        title: "画像を選択",
        content: <FileInput onSetPreview={() => setStepNum(1)} />,
    },
    {
        title: "使用したコスメを選択",
        description: "コスメを使用した部分をクリックしてください",
        content: <FileInput onClick={handleClick} />,
    },
    {
        title: "使用したコスメを選択",
        description: "写真をクリックして使用したコスメを教えて下さい",
    },
    {
        title: "投稿内容",

    }
]

const createPointStyle = ([x=0, y=0, offsetX=0, offsetY=0]: point) => {
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
        margin: "0 60px"
    })
}

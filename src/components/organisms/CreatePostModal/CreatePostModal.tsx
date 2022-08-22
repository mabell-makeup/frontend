import { Modal, ModalProps } from "../../molecules/Modal/Modal"
import { FileInput } from "../FileInput/FileInput"

type CreatePostModalProps = ModalProps

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ ...modalProps }) => {
    return (
        <Modal {...modalProps}>
            <FileInput />
        </Modal>
    )
}
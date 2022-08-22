import { Modal, ModalProps } from "../../molecules/Modal/Modal"
import { FileInput } from "../FileInput/FileInput"

type CreatePostModalProps = ModalProps

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ handleClose }) => {
    return (
        <Modal handleClose={handleClose}>
            <FileInput />
        </Modal>
    )
}
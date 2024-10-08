import { useState } from "react"
import Modal from "./Modal"

const CustomModal = () => {
    const [openModal, setOpenModal] = useState(false)
    const modalHeader = "This is Modal header"
    const modalContent =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus maxime commodi dolorum. Quibusdam consectetur illum, tenetur dicta culpa cum consequatur!"

    return (
        <div>
            <button
                className="bg-slate-200 px-4 py-2 rounded-md"
                onClick={() => setOpenModal(!openModal)}
            >
                Open Modal
            </button>
            <Modal
                content={modalContent}
                headerMessage={modalHeader}
                open={openModal}
                setOpen={setOpenModal}
            />
        </div>
    )
}

export default CustomModal

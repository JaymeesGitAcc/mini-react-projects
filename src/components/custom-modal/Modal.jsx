import { useEffect } from "react"

const Modal = ({
    headerMessage = "Modal Header",
    content = " Lorem, ipsum dolor.",
    open = false,
    setOpen,
}) => {
    const handleKeyPress = ({ key }) => {
        if (key == "Escape") setOpen(false)
    }
    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)

        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [])

    if (!open) return null

    return (
        <div
            className={`absolute inset-0 z-100 bg-black/[0.7] flex justify-center items-center p-4`}
        >
            <div className="bg-white w-[300px] p-4 rounded-md relative">
                <button
                    onClick={() => setOpen((p) => !p)}
                    className="absolute right-3 top-1"
                >
                    X
                </button>
                <header className="my-2">
                    <h1 className="font-bold">{headerMessage}</h1>
                </header>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Modal

import { useEffect, useRef } from "react"
import { useState } from "react"

const Box = ({ children, value, setBoxes, boxes }) => {
    const isInBoxes = boxes.includes(value)

    const handleClick = () => {
        if (!isInBoxes) {
            setBoxes((prev) => [value, ...prev])
        }
    }

    return (
        <div
            className={`h-[70px] w-[70px] duration-500 flex bg-green-700 justify-center items-center text-lg cursor-pointer rounded ${
                isInBoxes ? "rotate-45" : ""
            }`}
            onClick={handleClick}
        >
            {children}
        </div>
    )
}

export default function Boxes({ length = 5 }) {
    const [boxes, setBoxes] = useState([])
    const intervalRef = useRef(null)

    useEffect(() => {
        if (boxes.length === length) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            intervalRef.current = setInterval(() => {
                setBoxes((prev) => prev.slice(0, -1))
            }, 500)
        }
        if (!boxes.length) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }, [boxes, length])

    return (
        <div className="bg-slate-400 h-screen flex justify-center items-center gap-8">
            {Array.from({ length })
                .fill("")
                .map((item, index) => (
                    <Box
                        key={index + 1}
                        value={index + 1}
                        setBoxes={setBoxes}
                        boxes={boxes}
                    >
                        {index + 1}
                    </Box>
                ))}
        </div>
    )
}

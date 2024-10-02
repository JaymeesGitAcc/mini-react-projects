import { useState } from "react"

const Circle = ({ value }) => {
    const size = value * 30
    if (value) {
        return (
            <div
                className={`flex justify-center items-center border-2 border-purple-500 rounded-full`}
                style={{ height: `${size}px`, width: `${size}px` }}
            >
                <Circle value={value - 1} />
            </div>
        )
    }
    return null
}

const NestedCircles = () => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        const val = Number(e.target.value)
        if (val >= 0) {
            setInput(val)
        }
    }

    return (
        <div className="border w-full border border-red-500 min-h-screen">
            <div className="m-2">
                <input
                    type="number"
                    className="border p-2"
                    value={input}
                    onChange={handleChange}
                    placeholder="enter a value"
                />
            </div>

            <div>
                <Circle value={input} />
            </div>
        </div>
    )
}

export default NestedCircles

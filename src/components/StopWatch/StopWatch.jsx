import { useRef, useState } from "react"

const StopWatch = () => {
    const [start, setStart] = useState(0)
    const [now, setNow] = useState(0)
    const intervalRef = useRef()

    const handleStart = () => {
        setNow(Date.now())
        setStart(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    const handleReset = () => {
        clearInterval(intervalRef.current)
        setStart(0)
        setNow(0)
    }

    let secondsPassed = 0
    if (start != null && now != null) {
        secondsPassed = (now - start) / 1000
    }
    return (
        <div className="flex items-center gap-4">
            <h1 className="text-2xl">Timer: {secondsPassed.toFixed(3)}</h1>

            <div className="space-x-4 p-1">
                <button
                    onClick={handleStart}
                    className="p-2 rounded-md bg-green-500 text-white duration-150 hover:bg-green-600 active:bg-green-500"
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className="p-2 rounded-md bg-red-400 text-white duration-150 hover:bg-red-500 active:bg-red-400"
                >
                    Stop
                </button>
                <button
                    onClick={handleReset}
                    className="p-2 rounded-md bg-blue-300 text-white duration-150 hover:bg-blue-400 active:bg-blue-300"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StopWatch

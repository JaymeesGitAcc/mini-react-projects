import { useEffect, useState } from "react"

const TrafficLightSystem = () => {
    const [state, setState] = useState("green")

    useEffect(() => {
        let timeout

        if (state === "green")
            timeout = setTimeout(() => setState("yellow"), 3000)
        if (state === "yellow")
            timeout = setTimeout(() => setState("red"), 1000)
        if (state === "red") timeout = setTimeout(() => setState("green"), 2000)

        return () => clearTimeout(timeout)
    }, [state])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white space-y-2 p-6">
                <div
                    className="h-[100px] w-[100px] rounded-full"
                    style={{
                        backgroundColor: state === "green" ? "green" : "gray",
                    }}
                ></div>
                <div
                    className="h-[100px] w-[100px] rounded-full"
                    style={{
                        backgroundColor: state === "yellow" ? "yellow" : "gray",
                    }}
                ></div>
                <div
                    className="h-[100px] w-[100px] rounded-full"
                    style={{
                        backgroundColor: state === "red" ? "red" : "gray",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default TrafficLightSystem

import { useEffect, useState } from "react"
import { mockApi1, mockApi2 } from "./mock-apis/apis"

const Box = ({ boxNumber, data = [], setData }) => {
    const handleIsChecked = (id = null) => {
        setData((data) =>
            data.map((item) =>
                item.registrationId === id
                    ? { ...item, isSelected: !item.isSelected }
                    : item
            )
        )
    }

    return (
        <div className="min-w-[150px] min-h-[100px] border border-2 border-blue-500 p-4 bg-white rounded-md">
            {boxNumber && (
                <p className="text-blue-500 text-xl text-center">
                    Box {boxNumber}
                </p>
            )}
            <ul>
                {data?.map((item) => (
                    <li key={item.registrationId}>
                        <div className="flex items-center gap-2 my-4 duration-150 hover:bg-blue-50 p-2">
                            <input
                                type="checkbox"
                                id={item.registrationId}
                                checked={item.isSelected}
                                onChange={() =>
                                    handleIsChecked(item.registrationId)
                                }
                            />
                            <label htmlFor={item.registrationId}>
                                {item.name} - {item.marks}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const DataTransferBox = () => {
    const [box1, setBox1] = useState([])
    const [box2, setBox2] = useState([])

    const moveToBox2 = () => {
        const selected = box1
            .filter((stud) => stud.isSelected)
            .map((stud) => ({ ...stud, isSelected: false }))

        const unselected = box1.filter((stud) => !stud.isSelected)

        setBox1(unselected)

        if (selected.length) {
            const merged = [...box2, ...selected].map((stud) => ({
                ...stud,
                isSelected: false,
            }))
            setBox2(merged)
        }
    }

    const moveToBox1 = () => {
        const selected = box2
            .filter((stud) => stud.isSelected)
            .map((stud) => ({ ...stud, isSelected: false }))

        const unselected = box2.filter((stud) => !stud.isSelected)

        setBox2(unselected)

        if (selected.length) {
            const merged = [...box1, ...selected].map((stud) => ({
                ...stud,
                isSelected: false,
            }))
            setBox1(merged)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [api1, api2] = await Promise.all([mockApi1(), mockApi2()])

                const mergedArray = [...api1, ...api2]
                const finalData = mergedArray
                    .filter(
                        (value, index, self) =>
                            index ===
                            self.findIndex(
                                (obj) =>
                                    obj.registrationId === value.registrationId
                            )
                    )
                    .map((value) => ({ ...value, isSelected: false }))

                setBox1(finalData)
                setBox2([])
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex gap-4 items-center">
                <Box boxNumber={1} data={box1} setData={setBox1} />
                <div className="flex flex-col justify-center gap-2">
                    <button
                        onClick={moveToBox2}
                        className="bg-blue-500 text-white p-2 rounded duration-150 hover:bg-blue-600"
                    >
                        &#8594; Move to Box 2
                    </button>
                    <button
                        onClick={moveToBox1}
                        className="bg-blue-500 text-white p-2 rounded duration-150 hover:bg-blue-600"
                    >
                        &#8592; Move to Box 1
                    </button>
                </div>
                <Box boxNumber={2} data={box2} setData={setBox2} />
            </div>
        </div>
    )
}

export default DataTransferBox

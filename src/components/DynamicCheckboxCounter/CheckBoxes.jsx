import React, { useState } from "react"

const CheckBoxes = () => {
    const [checkBoxes, setCheckBoxes] = useState([
        { id: 1, label: "Checkbox 1", checked: false },
        { id: 2, label: "Checkbox 2", checked: false },
        { id: 3, label: "Checkbox 3", checked: false },
        { id: 4, label: "Checkbox 4", checked: false },
    ])

    const handleChange = (checkBoxId) => {
        setCheckBoxes((prev) =>
            prev.map((item) =>
                item.id === checkBoxId
                    ? { ...item, checked: !item.checked }
                    : item
            )
        )
    }

    const selectAll = () => {
        setCheckBoxes((prev) =>
            prev.map((item) => ({ ...item, checked: true }))
        )
    }

    const unSelectAll = () => {
        setCheckBoxes((prev) =>
            prev.map((item) => ({ ...item, checked: false }))
        )
    }

    const selected = checkBoxes.filter((box) => box.checked)

    return (
        <div className="flex flex-col justify-center bg-white p-4 rounded-lg w-[400px] shadow-md">
            {checkBoxes.map((checkbox) => (
                <div key={checkbox.id}>
                    <input
                        type="checkbox"
                        name={checkbox.label}
                        id={checkbox.id}
                        checked={checkbox.checked}
                        onChange={() => handleChange(checkbox.id)}
                        className="mx-2"
                    />
                    <label htmlFor={checkbox.id} className="text-lg">
                        {checkbox.label}
                    </label>
                </div>
            ))}

            <div className="p-2 space-y-4">
                <div className="space-x-4">
                    {selected.length !== checkBoxes.length ? (
                        <button
                            className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            onClick={selectAll}
                        >
                            Select All
                        </button>
                    ) : (
                        <button
                            className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            onClick={unSelectAll}
                        >
                            Deselect All
                        </button>
                    )}
                </div>
                <div>Selected: {selected.length}</div>
                <div>
                    {selected.map((item) => (
                        <p key={item.id} className="text-sm text-slate-600">
                            {item.label}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CheckBoxes

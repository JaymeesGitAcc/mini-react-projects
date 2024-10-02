import React from "react"

const CheckBoxInput = ({
    checked,
    onChange,
    labelText = "checkbox",
    name = "checkbox-input",
}) => {
    return (
        <label htmlFor={name} className="space-x-1">
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={checked}
                onChange={() => onChange(!checked)}
            />
            <span>{labelText}</span>
        </label>
    )
}

export default CheckBoxInput

import { useEffect, useRef, useState } from "react"
import CheckBoxInput from "./CheckBoxInput"

const MIN_LENGTH = 4
const MAX_LENGTH = 50

const PasswordGenerator = () => {
    const [password, setPassword] = useState("")
    const [allowNums, setAllowNums] = useState(true)
    const [allowSymbols, setAllowSymbols] = useState(false)
    const [passwordLength, setPasswordLength] = useState(8)
    const inputRef = useRef(null)
    let passwordStrength,
        strengthColorStyle = ""

    const copyToClipboard = () => {
        const inputText = inputRef.current
        inputText.select()
        inputText.setSelectionRange(0, 99999)
        navigator.clipboard.writeText(inputText.value)
    }

    if (passwordLength < 8) {
        passwordStrength = "Weak"
        strengthColorStyle = "text-red-500"
    } else if (passwordLength >= 8 && passwordLength < 12) {
        passwordStrength = "Good"
        strengthColorStyle = "text-yellow-500"
    } else if (passwordLength >= 12 && passwordLength < 20) {
        passwordStrength = "Strong"
        strengthColorStyle = "text-green-500"
    } else if (passwordLength >= 20) {
        passwordStrength = "very Strong"
        strengthColorStyle = "text-green-500"
    }

    useEffect(() => {
        let passwordString =
            "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
        const numbers = "0123456789"
        const symbols = "!@#$%^&*()-_=+[]{}|;:"
        let finalString = ""

        if (allowNums) {
            passwordString = numbers + passwordString
        }

        if (allowSymbols) {
            passwordString = symbols + passwordString
        }

        for (let i = 1; i <= passwordLength; i++) {
            const randomIndex = Math.floor(
                Math.random() * passwordString.length
            )
            finalString += passwordString[randomIndex]
        }

        setPassword(finalString)
    }, [allowSymbols, allowNums, passwordLength])

    return (
        <div className="min-w-[500px] border border-slate-100 rounded-lg p-4 bg-slate-200">
            <div className="flex">
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="p-2 outline-none rounded-l-md grow"
                    ref={inputRef}
                />
                <button
                    onClick={copyToClipboard}
                    className="bg-zinc-500 text-white py-2 px-6 rounded-r-md duration-150 hover:bg-zinc-600"
                >
                    Copy
                </button>
            </div>

            <div className="space-x-6 my-4">
                <CheckBoxInput
                    checked={allowNums}
                    onChange={setAllowNums}
                    labelText="Allow Numbers"
                    name="allow-numbers"
                />
                <CheckBoxInput
                    checked={allowSymbols}
                    onChange={setAllowSymbols}
                    labelText="Allow symbols"
                    name="allow-symbols"
                />
            </div>

            <div>
                <input
                    type="range"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    min={MIN_LENGTH}
                    max={MAX_LENGTH}
                />
                <div className="text-sm text-slate-600">
                    Password Length: {passwordLength}
                    <span className="ml-4">
                        Strength:{" "}
                        <span className={strengthColorStyle}>
                            {passwordStrength}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator

import React, { useState } from "react"

const countriesData = [
    { countryId: 1, name: "India" },
    { countryId: 2, name: "USA" },
    { countryId: 3, name: "Canada" },
]

const statesData = [
    { stateId: 1, name: "Telangana", countryId: 1 },
    { stateId: 2, name: "Maharashtra", countryId: 1 },
    { stateId: 3, name: "California", countryId: 2 },
    { stateId: 4, name: "Texas", countryId: 2 },
    { stateId: 5, name: "Ontario", countryId: 3 },
    { stateId: 6, name: "Quebec", countryId: 3 },
]

const capitalsData = [
    { capitalId: 1, name: "Hyderabad", stateId: 1 },
    { capitalId: 2, name: "Mumbai", stateId: 2 },
    { capitalId: 3, name: "Sacramento", stateId: 3 },
    { capitalId: 4, name: "Austin", stateId: 4 },
    { capitalId: 5, name: "Toronto", stateId: 5 },
    { capitalId: 6, name: "Quebec City", stateId: 6 },
]

const FilterList = () => {
    const [country, setCountry] = useState("select")
    const [state, setState] = useState("select")
    const [capital, setCapital] = useState("select")

    const states =
        country !== "select"
            ? statesData.filter((state) => state.countryId === Number(country))
            : statesData

    const capitals =
        state !== "select"
            ? capitalsData.filter(
                  (capital) => capital.stateId === Number(state)
              )
            : capitalsData

    const handleCountryChange = (e) => {
        if (e.target.value === "select") {
            setState("select")
            setCapital("select")
        }
        setCountry(e.target.value)
    }

    const handleStateChange = (e) => {
        if (e.target.value === "select") {
            setCapital("select")
        }
        setState(e.target.value)
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="space-x-2">
                <select
                    value={country}
                    onChange={handleCountryChange}
                    className="border p-2 my-2"
                >
                    <option value="select">Select Country</option>
                    {countriesData.map((option) => (
                        <option key={option.countryId} value={option.countryId}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <select
                    value={state}
                    onChange={handleStateChange}
                    className="border p-2 my-2"
                >
                    <option value="select">Select State</option>
                    {states.map((option) => (
                        <option key={option.stateId} value={option.stateId}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <select
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    className="border p-2 my-2"
                    disabled={state === "select"}
                >
                    <option value="select">Select Capital</option>
                    {capitals.map((option) => (
                        <option key={option.capitalId} value={option.capitalId}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default FilterList

export const mockApi1 = () => {
    return new Promise((res, rej) => {
        const data = [
            { name: "ABC", marks: "98%", registrationId: "1234" },
            { name: "DEF", marks: "87%", registrationId: "5678" },
            { name: "GHI", marks: "91%", registrationId: "9101" },
        ]

        setTimeout(() => {
            res(data)
        }, 500)
    })
}

export const mockApi2 = () => {
    return new Promise((res, rej) => {
        const data = [
            { name: "ABC", marks: "98%", registrationId: "1234" },
            { name: "JKL", marks: "85%", registrationId: "1122" },
            { name: "MNO", marks: "92%", registrationId: "1314" },
        ]

        setTimeout(() => {
            res(data)
        }, 500)
    })
}

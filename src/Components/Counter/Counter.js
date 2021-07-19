import { useState, useEffect } from "react"

const Counter = () => {
    const [num, setNum] = useState(0)

    const increment = () => {
        setNum(n => n + 1)
    }

    useEffect(() => {
        document.title = `${num}`
    })

    return (
        <div>
            Let's get counting
            <button onClick={increment}>Count some more</button>
            <p>Counter: {num}</p>
        </div>
    )
}

export default Counter
import { useState, useEffect } from 'react'

// first time using useEffect

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    // Passing in an empty array says 'there are no dependencies to watch
    // after the first render. Don't change if this re-renders!'
    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }, [])
    // setInterval(() => {
    //     setSeconds(seconds => seconds + 1)
    // }, 1000)
    return <h1>{seconds}</h1>
}

export default Timer
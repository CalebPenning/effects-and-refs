import { useRef } from "react"

const Focuser = () => {
    const secondInput = useRef()
    const moveFocus = () => secondInput.current.focus()
    return (
        <div>
            <h3>Focus Starts Here</h3>
            <input type="text" autoFocus />
            <button onClick={moveFocus}>Focus The Text Input</button>
            <h3>Then moves here</h3>
            <input type="text" ref={secondInput} />
        </div>
    )
}

export default Focuser
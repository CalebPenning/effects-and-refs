import { useState, useRef, useEffect } from "react"

const Video = ({
    src="https://media0.giphy.com/media/4HtGvfIsYSWhhHafcQ/giphy720p.mp4?cid=790b7611240170841ed343230eb483039de9fd823e69b585&rid=giphy720p.mp4&ct=v"
    }) => {
    const [speed, setSpeed] = useState(1)
    const videoRef = useRef()
    console.log(videoRef)
    useEffect(() => {
        videoRef.current.playbackRate = speed
    })
    return (
        <div>
            <video muted autoPlay loop ref={videoRef} >
                <source src={src} />
            </video>
            <div>
                <button onClick={() => setSpeed(s => s / 2)}>Slower</button>
                <button onClick={() => setSpeed(s => s * 2)}>Faster</button>
                <p>Current Speed: {speed}x</p>
            </div>
        </div>
    )
}

export default Video
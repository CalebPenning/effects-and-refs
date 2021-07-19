import { useState, useEffect } from "react"
import axios from "axios"


const ProfileViewer = ({ username="calebpenning" }) => {
    const baseURL = `https://api.github.com/users/${username}`
    const [data, setData] = useState(null)
    // example for good practice on making requests in react.
    // Set up a useEffect callback to setData once it recieves it
    // Only firing on the initial render
    useEffect(() => {
        // if you want to use an async function,
        // do it inside your callback

        async function loadProfile() {
            const res = await axios.get(baseURL)
            setData(res.data.name)
        }
        // and execute it :) 
        loadProfile()
        }, [])

    // Then, we have a placeholder if data is still null
    // The second that it isn't, it's replaced by the data we actually want
    return (
        <h2>{data ? data : 'Fetching...'}</h2>
    )
}

export default ProfileViewer
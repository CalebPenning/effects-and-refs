import axios from "axios"
import { useEffect, useState } from "react"
import SearchForm from "../../SearchForm/SearchForm"

const ViewerWithSearch = () => {
    // Takes a value with our SearchForm component
    // Calls the github api endpoint
    // returns Hi {username} or crashes (no error handling right now)
    //very serious, complex app g
    const [profile, setProfile] = useState(null)
    const [url, setUrl] = useState(`https://api.github.com/users/calebpenning`)

    const search = term => {
        setUrl(`https://api.github.com/users/${term}`)
    }

    useEffect(() => {
        console.log("IN EFFECT:")
        async function loadProfile() {
            const res = await axios.get(url)
            setProfile(res.data)
        }
        loadProfile()
        return () => console.log("CLEANING UP!")
    }, [url])

    return (
        <div>
            {profile ? <h1>Hi {profile.name}</h1> : <h1>Loading...</h1>}
            <SearchForm search={search} />
        </div>
    )
}

export default ViewerWithSearch
import React, {useEffect,useState} from 'react'
import instance from './axios'
function Row({ title, fetchURL }) {
    const [movies, setmovies] = useState([])

    return (
        <div>
            <h1>{title}</h1>
            {/* <h1>{response}</h1> */}
        </div>
    )

}

export default Row

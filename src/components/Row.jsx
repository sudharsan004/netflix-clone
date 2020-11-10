import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'

// construct a row
function Row({ title, fetchURL }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
  }, [movies])
  return (
    <div>
      <h1>{title}</h1>
      {/* posters */}
    </div>
  )
}


export default Row
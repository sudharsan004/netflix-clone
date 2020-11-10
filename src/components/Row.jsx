import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import './Row.css'

// construct a row
function Row({ title, fetchURL }) {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log(fetchURL);
      const request = await axiosInstance.get(fetchURL)
      // console.log(request.data.results[0].title);
      setmovies(request.data.results)
    }
    fetchData()
  }, [movies])
  // var filteredMovies =movies.filter((movie)=>movie.poster_path)
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {
          movies.map(movie => {
            {/* console.log(`${imageBaseUrl}${movie.poster_path}`) */ }
            return <img className="row__poster" src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.name} />
        } )}
        
      </div>
      <div>

      </div>
      {/* <h1>{title}</h1> */}
      {/* posters */}
    </div>
  )
}


export default Row
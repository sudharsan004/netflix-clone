import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import MovieTrailer from 'movie-trailer'


// construct a row
function Row({ title, fetchURL, showBackDrop }) {
  const [trailerId, settrailerId] = useState('')
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"
  const [movies, setmovies] = useState([]);


  useEffect(() => {
    async function fetchData() {
      // console.log(fetchURL);
      const request = await axiosInstance.get(fetchURL)
      console.log(request.data.results[0]);
      setmovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])

  const [url, seturl] = useState('')
  // get movie trailer youtube url of a movie 
  function handelClick(movie) {
    MovieTrailer(movie.original_title)
      .then(url => { seturl(url); console.log(url) }
      )
      .catch(eror => console.log(eror))
    // seperate the id of the youtube url
    settrailerId(url.slice(url.indexOf('v') + 2, -1))
    console.log(trailerId);
  }

  const [isClicked, setisClicked] = useState(false)

  // options for youtube
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {
          movies.map(movie => {
            /* console.log(`${imageBaseUrl}${movie.poster_path}`) */
            return (
              <img
                onClick={() => { handelClick(movie); setisClicked(prev => !prev) }}
                key={movie.id}
                className={`${showBackDrop ? 'row__backdrop' : 'row__poster'}`}
                src={`${imageBaseUrl}${showBackDrop ? movie.backdrop_path : movie.poster_path}`}
                alt={movie.name} />
            )
          })}

      </div>

      {isClicked ? <Youtube videoId={trailerId} opts={opts} /> : null}
    </div>
  )
}


export default Row
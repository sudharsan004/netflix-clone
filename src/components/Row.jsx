import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


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

  // get movie trailer youtube url of a movie 
  function handleClick(movie) {
    // console.table(movie?.title)
    if (trailerId) {
      settrailerId('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerId(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  // const [isClicked, setisClicked] = useState(false)

  // options for youtube
  const opts = {
    height: '390',
    width: '100%',
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
              (movie.poster_path && movie.backdrop_path) ?
                <img
                  // onClick={() => { handelClick(movie); setisClicked(prev => !prev) }}
                  onClick={() => { handleClick(movie); }}
                  key={movie.id}
                  className={`${showBackDrop ? 'row__backdrop' : 'row__poster'}`}
                  src={`${imageBaseUrl}${showBackDrop ? movie.backdrop_path : movie.poster_path}`}
                  alt={movie.name} />
                : null
            )

          })}


      </div>
      {trailerId ? <Youtube videoId={trailerId} opts={opts} /> : null}

    </div>
  )
}


export default Row
import React, { useState, useEffect } from 'react'
import axiosInstance from '../axios'
import requests from '../requests'
import './Banner.css'
function Banner() {
    const [bannerPoster, setbannerPoster] = useState('')
    const imageBaseUrl = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        async function fetchBanner() {
            const response = await axiosInstance.get(requests.Trending[0])
            // console.log(response.data.results[Math.floor(Math.random() * 10)])
            const randomImage = response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
            const randomImage2 = response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
            setbannerPoster(randomImage)
        }
        fetchBanner()
    }, [])

    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerPoster?.poster_path || bannerPoster?.backdrop_path})`,
            backgroundPosition: "center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{bannerPoster?.title || bannerPoster?.original_title || bannerPoster?.name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">List</button>
                </div>
                <h1 className="banner__discription">{(bannerPoster.overview)?.slice(0, 200) + "..."}</h1>
                {/* <img src={imageBaseUrl + bannerImage.poster_path} />> */}
            </div><div className="banner__bottom">
            </div>
        </header>
    )
}

export default Banner

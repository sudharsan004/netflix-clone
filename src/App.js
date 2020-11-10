import React from 'react'
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <>
    <h1>hello </h1>
    <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals}/>
    <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
    </>
  )
}

export default App;
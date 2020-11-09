import React from 'react'
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <>
    <h1>hello f2498ad04781ea57eef51b9c47ed7871</h1>
    <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    </>
  );
}

export default App;

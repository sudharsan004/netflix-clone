import React from 'react'
import requests from '../requests'
import Row from './Row'

// combine all rows
function Rows() {
    let allRows =[]
    for (const key in requests) {
        // console.log(requests[key]);
        
      allRows.push(<Row title={key} fetchURL={requests[key]} />)
    }
    return allRows
  }
export default Rows;
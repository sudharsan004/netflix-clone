import React from 'react'
import requests from '../requests'
import Row from './Row'

// combine all rows
function Rows() {
  let allRows = []
  let count = 0
  for (const key in requests) {
    // console.log(requests[key]);

    allRows.push(<Row key={count} title={key} fetchURL={requests[key][0]} showBackDrop={requests[key][1]} />)
    count++
  }
  return allRows
}
export default Rows;
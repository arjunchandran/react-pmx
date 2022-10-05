import React,{useContext} from 'react'
import {AppContext} from '../AppContext'

function Two(props) {
    const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow'}}>
        <h1>Layer two {data} </h1>
    </div>
  )
}

export default Two
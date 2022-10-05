import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'blue'}}>
        <h1>Layer one</h1>
        <Two></Two>
    </div>
  )
}

export default One
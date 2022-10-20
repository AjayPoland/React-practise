import React from 'react'

const HelloWorld = props=> {
  return (
    <div>
        <h1>Functional Component</h1>
      <p>HelloWorld, Representing: {props.country}</p>

    </div>
  )
}

export default HelloWorld

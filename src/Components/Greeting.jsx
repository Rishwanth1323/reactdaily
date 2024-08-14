import React from 'react'

export  function Greeting(props) {
    const {content} = props
  return (
    <div>
      <h1>this is {props.content}</h1>
    </div>
  )
}

import React from 'react'

export  function Button(props) {
    const {content,role} = props;
    const clickHandle = (content,role)=>{
        alert(`this is ${props.content} ${props.role}`);
    }
  return (
    <button onClick={clickHandle}>{props.children}</button>
  )
}

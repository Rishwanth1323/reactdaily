import React, { useEffect, useState } from 'react'

const Examle2 = () => {
    const [directions,setDirections]=useState({
        X:0,
        Y:0
    });
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            setDirections({...directions,X:event.clientX,Y:event.clientY})
        })
    },[])
    
  return (
    <div>
      <h1>USE EFFECT EXAMPLE 2</h1>
      <h3>X DIRECTION : {directions.X}</h3>
      <h3>Y DIRECTION : {directions.Y}</h3>

    </div>
  )
}

export default Examle2

import React from 'react'
import { Buttons } from './Butoons'
import { useState } from 'react';
import style from './Style.module.css'
 

export default function EvenOrOdd() {
 const [count,setCount]=useState(Buttons);
 const [ans,setAns] = useState(0);
 const [index,setIndex]=useState(0);
 const handler = (index) =>  {
      const result =  ((index+1) % 2 == 0) ? "Even" : "Odd"
      setAns(result);
      setIndex(index+1);
 }
  return (
    <div>
        {ans!==0 && <h1>CLICKED value IS : {index} Which is : {ans}</h1>}
        {
            count.map((each,index)=>(
                <button className={style.btn} key={index} onClick={()=>handler(index)}> Button {each}</button>
            ))
        }
      
    </div>
  )
}

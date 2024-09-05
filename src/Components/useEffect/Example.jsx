import React, { useEffect, useRef, useState } from 'react'

const Example = () => {
    const previous = useRef("");
    const [salary,setSalary]=useState(10000);
    useEffect(()=>{
        previous.current=salary
    },[salary])
    const handler = () => {
        // previous.current=salary;
        setSalary(salary+1000);
    }
  return (
    <div>
      <h1> USE EFFECT HOOK COMBINE WITH USE REF </h1>
      <h1>INITIAL SALARY : {salary}</h1>
      <h1>useRef value : {previous.current}</h1>
      <button onClick={handler}>SALARY INCREMENT</button>
    </div>
  )
}

export default Example

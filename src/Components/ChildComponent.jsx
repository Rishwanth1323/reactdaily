import React from 'react'

export default function ChildComponent({pass}) {
    const perform = () =>{
        const data1 ="sfvsfv"
        const data2 ="sfvsxcvzvfv"
        pass(data1,data2);
    }
  return (
    <div>
      <button onClick={perform}>hello</button>
    </div>
  )
}

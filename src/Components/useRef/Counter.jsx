import React, { useRef } from 'react'

export default function Counter() {
    const reference = useRef(0);
    const [count, setCount] = React.useState(0);
    const handler = () =>{
        reference.current++;
        console.log(reference.current);
        setCount(reference.current);
    }
  return (
    <div>
        <h1>USE REF VALUE {reference.current}</h1>
        <h1>USE STATE VALUE {count}</h1>
      <button type="button" onClick={handler} >CLICK ME</button>
    </div>
  )
}

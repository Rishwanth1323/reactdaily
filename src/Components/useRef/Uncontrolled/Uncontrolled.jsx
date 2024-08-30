import React, { useState } from 'react'

export default function Uncontrolled() {
  const [name,setName]=useState("");
  const changeHandler = (e) =>{
    setName(e.target.value);
    console.log(e.target.value)
  }
  const handler = () =>{

  }
  return (
    <div>
        <h1>this is uncontrolled component</h1>
      <form onSubmit={handler}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input type="text" className="form-control" id="username" value={name} onChange={changeHandler} />
        </div>
       
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  )
}

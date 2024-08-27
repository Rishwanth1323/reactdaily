import React from 'react';
import ChildComponent from './Components/ChildComponent';
import { useState } from 'react';
const App = () =>{
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const handler = (data1,data2) =>{
    setMessage(data1);
    setMessage1(data2)
  }
  return(
    <>
    <h1>Parent Component : {message}</h1>
    <h1>Parent Component : {message1}</h1>
    
    <ChildComponent pass={handler} > hello </ChildComponent>

    </>
  )
}
export default App;
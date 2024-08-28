import { useState } from "react";


const App = () =>{
  const [age,setAge]=useState(10);
  const handler=(type)=>{
    switch(type){
      case 'INCREMENT': 
      setAge(age+1);
      break;
      case 'DECREMENT': 
      if(age>0)
      setAge(age-1);
      break;
      case 'RESET'    : setAge(0);
      break;
      default: alert("INVALID TYPE"); 
      break; 
    }
  }
  return (
    <>
    <h1>hello increment decrement using useState</h1>
    <h1>AGE : {age}</h1>
    <button type="button" onClick={()=>handler("INCREMENT")} >INCREMENT</button>
    <button type="button" onClick={()=>handler("DECREMENT")}>DECREMENT</button>
    <button type="button" onClick={()=>handler("RESET")}>RESET</button>
    </>
  )
}


export default App;
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Example1 = () => {
    const [type,setType] = useState("products");
    const [data,setData] = useState([]);
    useEffect(()=>{
        // console.log("HELLO WORLD");
        fetchData();
    },[type])
    const fetchData = async () =>{
        try{
        const response = await axios.get(`https://fakestoreapi.com/${type}`);
        setData(response.data);
        }catch(err){
            console.log(err);
        }
    }
    const handler = (each) => {
        setType(each);
    }
  return (
    <div>
      <h1>This is useEFFECT example</h1>
      {
        type
      }
      <br />
      {
        ["products","carts","users"].map((each,index)=> <button onClick={()=>handler(each)} key={index} type="button">{each}</button> )
      }
      <br />
      {
        data && 
        <>
        {
        
        data && data.length > 0 ? (
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{JSON.stringify(item)}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No data available.</p>
                )
        }
        </>
      }
    </div>
  )
}

export default Example1

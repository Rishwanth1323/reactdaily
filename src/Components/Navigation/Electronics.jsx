import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Electronics() {
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        try{
             const response = await axios.get("https://fakestoreapi.com/products/category/electronics");
             if(response.status===200){
                setData(response.data);
             }
        }
        catch(err){
            console.log(err);
        }
    }
  return (
    <div>
      <h3>THIS IS ELECTRONICS SCREEN</h3>
      {
        data.map((each,index)=><React.Fragment key={index}>
        <li>{JSON.stringify(each)}</li>
        </React.Fragment>)
      }
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Jewelery() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        try{
             const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
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
      <h1>this is JEWEERY SCREEN</h1>
      {
        data.map((each,index)=><React.Fragment key={index}>
        <li>{JSON.stringify(each)}</li>
        </React.Fragment>)
      }
    </div>
  )
}

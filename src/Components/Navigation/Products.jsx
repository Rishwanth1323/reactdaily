import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
export default function Products() {
   const [data,setData] = useState([]);
   useEffect(()=>{
    fetchData();
   },[])
const fetchData = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        if(response.status===200)
        setData(response.data);
    }
    catch(err){
        console.log(err);
    }
}
const handler = () =>{
    console.log("clicked");
}
  return (
    <div>
      <h1>this is products screen</h1>
      <h3>LIST OF PRODUCTS</h3>
      {
        data.map((each,index)=>{
            return(<React.Fragment key={index}>
            <h2 >{each.title}</h2>
            <button type="button" onClick={handler} >
                <NavLink to={`${each.id}`} >Click to view more</NavLink>
            </button>
            </React.Fragment>)
        })
      }

    </div>
  )
}

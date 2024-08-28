import { useState } from "react";
import {Items} from "./Items"
import React from 'react';

const Addanddelete = () =>{ 
    const [item,addItem]=useState(Items);
    const [update,setUpdate]=useState("");
    const handler = () =>{
        let length = item.length;
        addItem([...item,{
            id:length+1,
            name: "item"+(length+1)
        }])
    }
    const handleDelete = (index) =>{
      let newone=item.filter((each, i) => i !== index)
      addItem(newone);
    }
    const handleUpdate = (index) =>{
        setUpdate(index);
    }
    return(
        <>
        <h1>this is card add and delete using useState</h1>
        <button onClick={()=>handler("ADD")} >Add Item</button>
        {update === "" ? <h1>NO ONE UPDATE</h1> : <h1>RECENT UPDATED ONE {update}</h1>}

        
        <ol>

        {
            item.map((each, index) => (
             <React.Fragment key={index}>
                
             <li>ITEM {each.id}</li>
             <button onClick={()=>handleDelete(index)}>Delete</button>
             <button onClick={()=>handleUpdate(each.id)}>Update</button>
             </React.Fragment>

            ))
        }

        </ol>
        
        </>
    )
}
export default Addanddelete;
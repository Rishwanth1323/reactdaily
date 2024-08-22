import React from 'react'
import style from './Props.module.css'
export default function Objects(props) {
    // console.log(props);
    // const {r} = props
  return (
 <h1 className={style.color}>{props.obj.name},{props.obj.age}</h1>
  )
}

import React from 'react'
// import './Props.css'
import style from './Props.module.css'
export function Props(props) {
    const {content} = props;
  return (
    <h1 className={style.color} >{content}</h1>
  )
}



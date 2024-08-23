import React from 'react'
import {DNA} from 'react-loader-spinner'
const ClassLoader = (props) => {
  return (
    <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  {...props}
  />
  )
}

export default ClassLoader

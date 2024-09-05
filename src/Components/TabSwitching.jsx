import React, { useState } from 'react'

export default function TabSwitching() {
    const [active,setActive] = useState();
    const handler = () => {

    }
  return (
    <div>
      <h1>TAB SWITCHING</h1>
      <button onClick={handler}>TAB1</button>
      <button onClick={handler} >TAB2</button>
                    
      </div>
  )
}

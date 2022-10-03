import React, { memo } from 'react'

const Child2 = ({input1 , child2_function}) => {
    console.log("child2")

  return (
    <div style={{border:"1px solid black"}} className="demo">
        <p>{"Value of Input1 is " + input1 }</p>
        <input type="text" onChange={(e)=>child2_function(e)}/>
    </div>
  )
}

export default Child2
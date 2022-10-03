import React, { memo } from 'react'

const Child1 = ({child1_function}) => {
    console.log("child1")
  return (
    <div style={{border:"1px solid black"}} className="demo">
        <input type="text" onChange={(e)=>child1_function(e)}/>
    </div>
  )
}

export default memo(Child1)
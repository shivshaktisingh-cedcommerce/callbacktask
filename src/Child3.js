import React, { memo } from 'react'

const Child3 = ({input2}) => {
    console.log("child3")
  return (
    <div style={{border:"1px solid black"}} className="demo">
        <p>{"Value of Input2 is " + input2 }</p>
    </div>
  )
}

export default memo(Child3)
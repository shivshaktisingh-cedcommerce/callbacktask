import React, { useCallback, useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

const Parent = () => {
    const[input1 , setInput1]=useState('')
    const[input2 , setInput2]=useState('')

    const child1_function=useCallback((e)=>{
        setInput1(e.target.value)    
    },[input1])

    const child2_function=(e)=>{
        setInput2(e.target.value)
    }
  return (
        <>
        <Child1 child1_function={child1_function}/>
        <Child2 input1={input1} child2_function={child2_function}/>
        <Child3 input2={input2}/>
        </>
   )
}

export default Parent
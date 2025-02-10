import React, { useState } from 'react'

export const UseStateDemo = () => {

    const[count,setCount]=useState(0)

    function increseCount (){

      
        setCount(count+1)
        console.log("count = ",count)

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO</h1>
        <h2>Count = {count}</h2>
        <button onClick={()=>{increseCount()}}>increse</button>
    </div>
  )
}
import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const[isLoading, setisLoading]=useState(true)
    const[users, setusers] = useState([])
    const[user, setuser] = useState({})
    const[name, setname] = useState("")

    const stoploader = () =>{
        setisLoading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            isLoading == true ? "Loading...":""
        }      
        <button onClick={()=>{stoploader()}}>Stop</button>
    </div>
  )
}

// export default UseStateDemo2

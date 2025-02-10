import React, { useState } from 'react'

export const InputDemo = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const nameHandler = (event) => {
        console.log(event.target.value)
        setname(event.target.value)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>INPUT DEMO 1</h1>
            <br />
            <div>
                <label>Name</label>
                <input type="text" placeholder='Enter Name'
                    onChange={(event) => { nameHandler(event) }} />
                {name}
            </div>
            <br />
            <div>
                <label>Email</label>
                <input type="Email" placeholder='Enter Email'
                    onChange={(event) => { setemail(event.target.value) }} />
                {email}
            </div>
        </div>

    )
}

export default InputDemo

import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [password, setpassword] = useState("")


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
            <br />
            <div>
                <label>contact</label>
                <input type="number" placeholder='Enter Contact No.'
                    onChange={(event) => { setcontact(event.target.value) }} />
                {contact}
            </div>
            <br />
            <div>
                <label>Password</label>
                <input type="password" placeholder='Enter password'
                    onChange={(event) => { setpassword(event.target.value) }} />
                {password}
            </div>
        </div>

    )
}

export default InputDemo1

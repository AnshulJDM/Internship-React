import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const { register, handleSubmit } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login Form</h1>
            <br />
            <div>
                <form onChange={handleSubmit(submitHandler)}>
                    <div>
                        <label>First Name</label>
                        <input type="text" placeholder='Enter your Firstname' required {...register}/>
                    </div>
                    <br />
                    <div>
                        <label>Last Name</label>
                        <input type="text" placeholder='Enter your lastname' required {...register}/>
                    </div>
                    <br />
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your Email' required {...register}/>
                    </div>
                    <br />
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='Enter Password' required {...register}/>
                    </div>
                    <br />
                    <div>
                        <label>Contact  No.</label>
                        <input type="tel" placeholder='Enter you Mobile No.' required {...register}/>
                    </div>
                    <br />
                        <button>Submit</button>
                        <button>Reset</button>

                </form>
            </div>
        </div>
    )
}



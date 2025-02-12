import React from 'react'
import { useForm } from 'react-hook-form'


const FormDemo1 = () => {
    const { register, handleSubmit } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME :</label>
                    <input type="text" placeholder='Enter Name' {...register("firstname")} />
                </div>
                <br />
                <div>
                    <label>Age :</label>
                    <input type="number" placeholder='Enter Age' {...register("age")} />
                </div>
                <br />
                <div>
                    <label>City :</label>
                    <input type="text" placeholder='Enter city' {...register("City")} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormDemo1

import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormDemo3() {
    const {register,handleSubmit} =useForm()

    const submitHandler =(data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name : </label>
                <input type="text"  placeholder='Enter Name'/>
            </div>
        </form>
      
    </div>
  )
}

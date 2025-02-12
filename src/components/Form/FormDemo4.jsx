import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormDemo4() {
    const {register,handleSubmit}=useForm()

    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name</label>
                <input type="text" />
            </div>

        </form>
      
    </div>
  )
}

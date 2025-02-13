import React from 'react'
import { useForm } from 'react-hook-form'

 export const FormDemo5 = () => {
    const {register,handleSubmit} = useForm()

    const submitHandler =(data)=>{
        console.log(data)
    }
  return (
    <div>
        <div>
            <form onChange={handleSubmit(submitHandler)}> 
                    <div>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
            </form>
        </div>
    </div>
  )
}



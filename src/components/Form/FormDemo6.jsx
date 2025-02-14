import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo6 = () => {
    const {register,handleSubmit} = useForm()

    const submitHandler =(data)=>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name</label>
                <input type="text"  placeholder='Enter Your First Name' {...register}/>
            </div>
            <br />
            <div>
            <label>Last Name</label>
            <input type="text" placeholder='Enter your last Name ' {...register}/>
            </div>
            <br />
            <div>
                <label>Age</label>
                <input type="number" placeholder='Enter your Age' {...register}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' {...register} />
            </div>
        </form>
      
    </div>
  )
}

export default FormDemo6

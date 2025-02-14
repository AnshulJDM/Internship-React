import React from 'react'
import { useForm } from 'react-hook-form'


const FormDemo7 = () => {
    const {register,handleSubmit} = useForm()

    const submitHandler =(data)=>{
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
             <label>Name</label>
            <input type="text" placeholder='Enrer Name ' {...register}/>
            </div>
            <br />
            <div>
            <label>Age</label>
            <input type="number" placeholder='Enter  Age' {...register}/>
            </div>
            <br />
            <div>
            <label>Birth Date</label>
            <input type="date" />
            </div>
            <br />
            <button>submit</button>
        </form>
    </div>
  )
}

export default FormDemo7

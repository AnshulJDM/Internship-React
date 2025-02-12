import React from 'react'

export default function FormDemo2() {

    const { register, handleSubmit } = useForm()
    
        const submitHandler = (data) => {
            console.log(data)
        }
  return (
    
       <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>First Name :</label>
                    <input type="text" placeholder='Enter First Name' {...register("firstname")} />
                </div>
                <br />
                <div>
                    <label>Last Name :</label>
                    <input type="text" placeholder='Enter Last Name' {...register("lastname")} />
                </div>
                <br />
                <div>
                    <label>Gender :</label>
                    <input type="radio" name='Gender' value={Male} />
                    <input type="radio" name='Gender' value={Female} />
                </div>
            </form>
        </div>
    
  )
}

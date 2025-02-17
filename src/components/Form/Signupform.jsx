import React from 'react'
import { useForm } from 'react-hook-form'

export const Signupform = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }


    const validationSchema = {

        usernameValidator: {
            required: {
                value: true,
                message: "Name is required"
            }
        },

        ageValidator: {
            required: {
                value: true,
                message: "Age  is Requierd"
            }
        },

        emailValidator: {
            required: {
                value: true,
                message: "email is required"
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: "password is required*"
            }
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                    <label>UserName</label>
                    <input type='text' {...register("Username", validationSchema.usernameValidator)}></input>
                    <span style={{ color: "red" }}>
                        {errors.Username?.message}
                    </span>
                </div>
                <br />
                <div>
                    <label>Age</label>
                    <input type='text' {...register("Age", validationSchema.ageValidator)}></input>
                    <span style={{ color: "red" }}>
                        {errors.Age?.message}
                    </span>
                </div>
                <br />

                <div>
                    <label>EMAIL</label>
                    <input type='text' {...register("email", validationSchema.emailValidator)}></input>
                    <span style={{ color: "red" }}>
                        {errors.email?.message}
                    </span>
                </div>
                <br />
                <div>
                    <label>PASSWORD</label>
                    <input type='password' {...register("password", validationSchema.passwordValidator)}></input>
                    <span style={{ color: "red" }}>
                        {errors.password?.message}
                    </span>
                </div>
                <br />
                <div>
                    <input type='submit' value="login"></input>
                </div>
            </form>
        </div>
    )
}
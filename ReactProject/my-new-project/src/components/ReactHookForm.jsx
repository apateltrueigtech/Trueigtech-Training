import React from 'react'
import { useForm } from "react-hook-form";

function ReactHookForm  ()  {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
     
   async function onSubmit(data){
        await new Promise((resolve)=>setTimeout(resolve,5000))
        console.log("Submitting the form",data)
    }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>First Name:</label>
        <input className={` border p-2 rounded ${errors.firstName ? 'border-red-500':'border-gray-300'}`}
         {...register('firstName', { required: true,
             minLength:{value:3, message:"Min length atleast 3"}, 
             maxLength: {value:6, message: "Max length atleast 6"} })}/>
             {errors.firstName && <p className="text-red-500 text-sm mt-1"
             >{errors.firstName.message}</p>}
    </div>
    <br/>
    <div>
        <label>Last Name:</label>
        <input className=' border p-2 rounded'
        {...register('LastName')}/>
    </div>
    <br/>
    <div>
        <label>Password:</label>
        <input className={` border p-2 rounded ${errors.password ? 'border-red-500':'border-gray-300'}`}
         {...register('password',{
            pattern :{
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i,
                message:"Password as per the rules"
            }
        })}/>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>
    <br/>
    <input className='border p-2 rounded' type ='submit' disabled={isSubmitting} 
    value={isSubmitting? "Submitting":"Submit"}/>
   </form>
  )
}

export default ReactHookForm
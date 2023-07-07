import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com';
export const FeedbackForm = () => {
  const [Submit,setSubmit]=useState(false)
  const navigate=useNavigate()
  const onSubmit=(data)=>{

    setSubmit(true);
    emailjs.send('service_mcnxzhe', 'template_onciros',{
        from_name: data.name,
        message: data.message,
        }, 'JNPp3hnmLUJ8SEULM')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }
   const handleClick=()=>{
   navigate('/')
   }
  const { handleSubmit, register, formState: { errors } } = useForm();
const msg=()=>{
return(
    <div className="w-2/3 md:w-1/3 bg-white rounded-lg items-center">
<h2 className="text-3xl text-center text-gray-700 mb-4 mt-4">
Thanks for your feedback!
    </h2>
    <p  className="text-xl underline text-center text-gray-700 mb-4 mt-4
    hover:text-black hover:cursor-pointer "
    onClick={handleClick}>Navigate back to home</p>
    </div>
)
}
  return (
    <div className='mt-16'>
        <div className="h-screen flex items-center justify-center">
        {Submit ? msg() :
  <form onSubmit={handleSubmit(onSubmit)}
 className="w-2/3 md:w-1/3 bg-white rounded-lg items-center">
    <div className="  justify-center mt-6">
    <h2 className="text-3xl text-center text-gray-700 mb-4">
      Feedback Form
    </h2>
    <p className="text-xl text-center text-gray-700 m-2"
     >Help us improve this app by sending feedback and request new features</p>
    </div>
    
    <div className="px-12 pb-10">
  <div className="w-full mb-2">
    <div className="flex flex-col justify-center">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        {...register("name", {
            required: "Required",
           
          })}
        className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
      />
       <p className="text-sm text-center text-red-700 m-1"> {errors.name && errors.name.message}</p>
    </div>
  </div>
  <div className="w-full mb-2">
    <div className="flex flex-col justify-center">
      <input
        type="email"
        placeholder="Email Address"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
        className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
      />
       <p className="text-sm text-center text-red-700 m-1"> {errors.email && errors.email.message}</p>
    </div>
  
    
  </div>
  <div className="w-full mb-2">
  < div className="flex flex-col justify-center">
     <textarea 
     placeholder='Write Feedback'
     name="message"
     {...register("message", {
        required: "Required",
       
      })}
      className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none">

     </textarea>
     <p className="text-sm text-center text-red-700 m-1"> {errors.message && errors.message.message}</p>
    </div>
    </div>
    <button type='submit' 
 
className="w-full mt-6 py-2 rounded bg-green-bg hover:bg-slate-950 text-gray-100 focus:outline-none">
  Submit
</button>
</div>
    
  </form>
}
</div>
    </div>
  )
}

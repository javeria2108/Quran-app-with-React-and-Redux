import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
const navigate=useNavigate();
const [loginError, setLoginError]=useState("")
const onSubmit=(data)=>{
    const email=data.email
    const password=data.password

    signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate("/")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(error.message);
        // ..
      });
    
} 


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 md:w-1/3 bg-white rounded-lg items-center p-5 m-auto my-10">
      <div className="px-12 pb-10">
      <div className="w-full mb-2">
          <div className="flex flex-col justify-center">
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
            />
            <p className="text-sm text-center text-red-700 m-1">
              {" "}
              {errors.email && errors.email.message}
            </p>
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="flex flex-col justify-center">
          <input
           className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}/>
            <p className="text-sm text-center text-red-700 m-1">
              {" "}
              {errors.password && errors.password.message}
            </p>
          </div>
        </div>
       

        <button
          type="submit"
          className="w-full mt-6 py-2 rounded bg-green-bg hover:bg-slate-950 text-gray-100 focus:outline-none"
        >
          Login
        </button>
      </div>
      {loginError && <span className="text-sm text-center text-red-700 m-1">{loginError}</span>}
    </form>
  );
};

export default Login;

import Headers from "./Headers";
import { LOGO } from "../Utils/constant.js";
import { BACKGROUND_IMG } from "../Utils/constant.js";
import { useState } from "react";
export function Login() {
  const [togglebtn,setTogglebtn]=useState(true)
  const handleSignIn=()=>{
    return setTogglebtn(!togglebtn)
  }
  return (
    <div>

      <Headers />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="BIM" />
      </div>
      <form className=" absolute  bg-black  p-12  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className=" text-3xl font-bold mb-5">{togglebtn?"Sign in" :"Sign Up"}</h1>
        {
          togglebtn?"":   <input type="text" className=" p-2 my-2  w-full bg-gray-700 " placeholder="full Name" />
        }
        <input type="email" className=" p-2 my-2  w-full bg-gray-700 " placeholder="email" />
        <input type="password" className=" p-2 my-1 w-full bg-gray-700" placeholder="Password" />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">{togglebtn?"Sign in" :"Sign Up"}</button>
        <p className=" my-4 cursor-pointer" onClick={handleSignIn}>{togglebtn?"Are you New in Netflix ? Sign up now":"Already user Sign in Now"}</p>
      </form>
    </div>

 
   
  );
}

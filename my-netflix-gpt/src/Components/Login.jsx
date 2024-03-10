import Headers from "./Headers";
import { LOGO } from "../Utils/constant.js";
import { BACKGROUND_IMG } from "../Utils/constant.js";
import { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate.js";
import {auth} from "../Utils/firebase.js"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
export function Login() {
  const [togglebtn,setTogglebtn]=useState(true);
  const [errorMsg,setErrorMsg]=useState(null);
  const handleSignIn=()=>{
    return setTogglebtn(!togglebtn)
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handleclickedBtn=()=>{
  const message=checkValidData(email.current.value,password.current.value);
  setErrorMsg(message)
  if(message) return;
  if(!togglebtn){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    // ..
  });

  }
  else{

signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+errorMessage)
  });
  }
  }
  return (
    <div>

      <Headers />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="BIM" />
      </div>
      <form className=" absolute  bg-black  p-12  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75" onSubmit={(e)=>e.preventDefault()}>
        <h1 className=" text-3xl font-bold mb-5">{togglebtn?"Sign in" :"Sign Up"}</h1>
        {
          togglebtn?"":   <input type="text" className=" p-2 my-2  w-full bg-gray-700 " placeholder="full Name"  ref={name}/>
        }
        <input type="email" className=" p-2 my-2  w-full bg-gray-700 " placeholder="email"  ref={email}/>
        <input type="password" className=" p-2 my-1 w-full bg-gray-700" placeholder="Password"  ref={password}/>
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleclickedBtn}>{togglebtn?"Sign in" :"Sign Up"}</button>
        <p className="py-4 text-bold text-red-500">{errorMsg}</p>
        <p className=" my-4 cursor-pointer" onClick={handleSignIn}>{togglebtn?"Are you New in Netflix ? Sign up now":"Already user Sign in Now"}</p>
      </form>
    </div>

 
   
  );
}

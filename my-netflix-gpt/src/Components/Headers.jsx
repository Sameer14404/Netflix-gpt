import  {LOGO} from "../Utils/constant.js";

import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase.js";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/Redux-tool-kit/userSlice.js";


 export default   function Headers (){
    const navigate=useNavigate()
    const user = useSelector((store) => store.user);
    const dispatch=useDispatch();
    const handleSignOut=()=>{
        
        signOut(auth).then(() => {
        
      
          console.log("signout sucessfully")
       
          dispatch(removeUser())

        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
    }
  

    useEffect(() => {
     const unsubscribe=   onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse")
          } else {
            dispatch(removeUser);
        navigate("/")
          }
        });

        return ()=>unsubscribe()
      }, []);

    
    return (
        <div className="absolute px-5 py-2 bg-gradient-to-b from-black  z-30 w-screen flex justify-between">

            <img src={LOGO} alt="LOGO" className="w-44 " />
          {user &&  <div className="flex p-2 gap-1 w-1/8">
                <img src={user.photoURL} alt="user-avtar" />
                <button className="  font-bold text-red-600  rounded-md bg-slate-500" onClick={handleSignOut}>Sign out</button>
            </div>
            }
        </div>
    )
}
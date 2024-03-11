import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Login} from "./Login"
import {Browse} from "./Browse"
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from "../Utils/Redux-tool-kit/userSlice";

export default function Body(){
  const dispatch=useDispatch()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {

             const {uid,email,displayName,photoURL}=user;
             dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            } else {
             dispatch(removeUser)
            }
          });
    },[])
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ])


    return(
        <div>

         <RouterProvider router={appRouter} />
        </div>
    )
}

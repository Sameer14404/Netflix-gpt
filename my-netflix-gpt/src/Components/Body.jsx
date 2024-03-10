import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {Login} from "./Login"
import {Browse} from "./Browse"



export default function Body(){

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

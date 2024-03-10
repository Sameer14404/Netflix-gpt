import  {LOGO} from "../Utils/constant.js";
import { USER_AVATAR } from "../Utils/constant.js";


 export default   function Headers (){
    return (
        <div className="absolute px-5 py-2 bg-gradient-to-b from-black  z-30">

            <img src={LOGO} alt="LOGO" className="w-44 " />
        </div>
    )
}
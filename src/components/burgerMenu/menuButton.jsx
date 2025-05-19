
import { IoIosCloseCircle, IoMdMenu } from "react-icons/io";

 export default function Button({show, setShow}){
    function clickHandler(event){
        setShow(!show)
    }
   
    return(

        <button onClick={() => setShow(prevState => !prevState)} className="burgermenu__button">
            {show ? <IoIosCloseCircle className="close"/> : <IoMdMenu className="open"/>}
        </button>
    )
} 



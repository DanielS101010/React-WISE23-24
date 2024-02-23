import "./account.css"
import Bestellungen from "../Orders/orders"
import { useDispatch } from "react-redux";
import { logout } from "../reducer/reducer";

const Account = () =>{
    const dispatch = useDispatch();
    
    const handle_click = ()=>{
        dispatch(logout())
    }
    return(
        <div className="Account">
            <div className="Logout"> 
                <button onClick={handle_click}>
                    Log out
                </button>
            </div>
            <div className="Bestellungen">
                <Bestellungen />
            </div>
        </div>
    )
}

export default Account;
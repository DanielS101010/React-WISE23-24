import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../reducer/reducer";

const LogIn = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = () => {
       dispatch(login({email, password}))
    }
    
    return(
        <div className="Login">
            <h1>Login</h1>
            <div>
                <label>email</label>
                <input type="text" value={email} onChange={onEmailChange} />
            </div>
            <div>
                <label>password</label>
                <input type="password" value={password} onChange={onPasswordChange} />
            </div>
            <div>
                <button onClick={onLogin}>Login</button>
            </div>
            <div className="LinkSignUp">
                Noch nicht registriert? Jetzt <Link to={"/SignUp "}>Registrieren</Link>
            </div>
        </div>
    )
}

export default LogIn;

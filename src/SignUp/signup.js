import "./signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../reducer/reducer";

const SignUp = (props) => {
    const dispatch = useDispatch();

    const [firstname, setFirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [postcode, setPostcode] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value);
    }
    const onLastnameChange = (e) => {
        setlastname(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onPostcodeChange = (e) => {
        setPostcode(e.target.value)
    }
    const onCityChange = (e) => {
        setCity(e.target.value)
    }
    const onStreetChange = (e) => {
        setStreet(e.target.value)
    }
    const onCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onSignup = () => {
        dispatch(signUp({firstname, lastname, street, postcode, city, country, phone, email, password}))
    }

return (
    <div className="Signup">
        <h1>Registrieren</h1>
        <div>
            <label>Vorname</label>
            <input type="text" value={firstname} onChange={onFirstnameChange} />
        </div>
        <div>
            <label>Nachname</label>
            <input type="text" value={lastname} onChange={onLastnameChange} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" value={email} onChange={onEmailChange} />
        </div>
        <div>
            <label>Passwort</label>
            <input type="text" value={password} onChange={onPasswordChange} />
        </div>

        <div>
            <label>Postleitzahl</label>
            <input type="text" value = {postcode} onChange={onPostcodeChange} />
        </div>

        <div>
            <label>Stadt</label>
            <input type="text" value = {city} onChange={onCityChange} />
        </div>

        <div>
            <label>Straße</label>
            <input type="text" value = {street} onChange={onStreetChange} />
        </div>
        <div>
            <label>Land</label>
            <input type="text" value = {country} onChange={onCountryChange} />
        </div>
        <div>
            <label>Telefonnummer</label>
            <input type="text" value = {phone} onChange={onPhoneChange  } />
        </div>
        <div>
            <button onClick={onSignup}>Registrieren</button>
        </div>
        <div>
            schon registriert? Hier <Link to={"/Login "}>Anmelden</Link>
        </div>
    </div>

)
}
export default SignUp;
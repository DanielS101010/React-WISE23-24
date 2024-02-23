    import "./navbar.css"
    import { Link } from "react-router-dom";
    import { VscAccount } from "react-icons/vsc";
    import { LuShoppingCart } from "react-icons/lu";
    import { useSelector, useDispatch } from "react-redux";
    import { useEffect } from 'react';

    const NavBar = (props) => {
        const dispatch = useDispatch();
        const shoppingCard = useSelector((state) =>{return state.shoppingCard})
        const loggedIn = useSelector((state) => { return state.loggedIn })

        useEffect(()=>{
            let x = Math.random()
        },[])

        return (
            <div className="NavBar">
                <div className="NavBar__Title">
                    <Link to={"/"}>
                    <img className="Image" src="/DALLE - Create a logo that features a side view of a person reading a book. The logo should be round and the design must be in black.jpg"/> 
                    </Link>
                </div>
                <div className="NavBar__Buttons">
                    <Link to={"/Warenkorb"} className="NavBar__Button"><LuShoppingCart /> ({shoppingCard.length})</Link>
                    {loggedIn ? (
                        <Link to={"/account"} className="NavBar__Button"><VscAccount /></Link>
                    ) : (
                        <Link to={"/login"} className="NavBar__Button"><VscAccount /></Link>
                    )}
                </div>
            </div>
        )
    }

    export default NavBar;
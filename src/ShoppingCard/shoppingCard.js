import "./shoppingCard.css"
import { useEffect, useState } from 'react';
import { order, updateQuantity, deleteFromCard } from "../reducer/reducer";
import { useSelector, useDispatch} from "react-redux";

const ShoppingCard = () => {
    const shoppingCard = useSelector((state) =>{return state.shoppingCard})
    const loggedIn = useSelector((state) =>{return state.loggedIn})

    const dispatch = useDispatch(); 
    const [gesamtpreis, setGesamtpreis] = useState(0);

     useEffect(() => {
        let total = 0;
        shoppingCard.forEach(item => {
            total += item.price * item.quantity_buy_card;
        });
        setGesamtpreis(total);
    }, [shoppingCard]);

    const click_buy = ()=>{
        loggedIn?dispatch(order(shoppingCard)):window.alert("Logge dich zuerst ein")
    }
   const onQuantityChange = (event) =>{ 
        const id = event.target.id;
        const quantity = parseInt(event.target.value);
        dispatch(updateQuantity({id, quantity}));     
    }
    const delete_article = (event) => {
        dispatch(deleteFromCard(event.target.id))
    }

    return(
        <div className="warenkorb">
            <div className="articles">  
                {shoppingCard.map((item) => 
                    <div className='Article' id={item._id}>
                    <div className='Image'>
                        <img src ={item.href}/>
                    </div>
                    <div className='Article__values'>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            <span>Einzelpreis: {item.price}€ </span>
                            <input type="number" id = {item._id} value = {item.quantity_buy_card } onChange={onQuantityChange} min={1} max={item.quantity}></input>
                        </div>
                        <div>
                            Gesamt: {item.price*item.quantity_buy_card}€
                        </div> 
                        <button id={item._id} onClick={delete_article}>Artikel entfernen</button>
                    </div>

                </div>


                )}
            </div>
                {shoppingCard.length >= 1 ? <div className="button_preis"> 
                    <div>
                        Gesamtpreis Warenkorb:{gesamtpreis}€
                    </div>
                    <button onClick={click_buy}>Kaufen</button>
   
                </div>:""}
            </div>
    )
}

export default ShoppingCard;
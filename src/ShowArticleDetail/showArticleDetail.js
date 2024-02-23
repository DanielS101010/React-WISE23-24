import "./showArticleDetail.css"

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadArticle, addToCart } from "../reducer/reducer";

const ShowArticleDetail = (props) => {

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const article = useSelector((state) =>{return state.article})
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(loadArticle(id))
    },[])

    const [quantity_buy, setQuantity_buy] = useState(1);
    
    const handleChange = (event) => {
        setQuantity_buy(event.target.value);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...article, quantity_buy_card: parseInt(quantity_buy)}));
    }

    if (!article) {
        return <div>
            
        </div>; 
    }

    return (                        
        <div className='Article'>
            <div className='Image'>
                <img src ={article.href}/>
                <div>
                    <input type="number" id = "product_quantity" key = {article._id} value = {quantity_buy} onChange={handleChange} min={1} max={article.quantity}></input>
                    <button type="button" onClick={handleAddToCart}>In den Warenkorb</button>
                </div>
                <span>{article.price}€ </span>
                    <span>{article.rating}*</span>
            </div>
            <div className='Article__values'>
                <div>
                    {article.name}
                </div>

                <div>
                    <div className='Description'>{article.description} </div>

                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default ShowArticleDetail;

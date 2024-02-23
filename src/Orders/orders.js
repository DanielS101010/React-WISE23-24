import "./orders.css"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadArticles, loadOrders } from "../reducer/reducer";

    

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) =>{return state.orders})
    const articles = useSelector((state) =>{return state.articles})
    let price = 0

    useEffect(()=>{
        dispatch(loadOrders())
        dispatch(loadArticles())
    },[])
 
    return(
        <div className="Orders">
        {orders.map((order) => (
            <div key={order._id}>
                <h4>Order Date: {order.orderDate}</h4>
                
                {order.articles.map((article) => (
                    <div className="Articles" key={article.articleId}>
                        <div className="Image">
                            {articles.find((item) => item._id === article.articleId) ?
                             (<img src={articles.find((item) => item._id === article.articleId).href} />) : ""}
                        </div>
                        <div className="Article__values">
                            <div>
                                Anzahl: {article.quantity}
                            </div>
                            <div>
                                Einzelpreis: {article.price}€
                            </div>
                            <div>
                                Gesamt: {article.price*article.quantity}€
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))}

    </div>
    );    
}
export default Orders;
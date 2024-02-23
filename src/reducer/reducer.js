import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "../axiosURL";

export const loadArticles = createAsyncThunk("shop/loadArticles", async () =>{
    const res = await axios.get('/shop/articles',{withCredentials:true})
    return res.data;
});

export const loadArticle = createAsyncThunk("shop/loadArticle/", async articleId =>{
    const res = await axios.get('/shop/article/' + articleId, {withCredentials:true})
    return res.data;
});

export const order = createAsyncThunk("shop/order", async (shoppingCard) =>{
    const articles = shoppingCard.map(item => ({
        articleId: item._id,
        quantity: item.quantity_buy_card, 
        price: item.price*item.quantity_buy_card,
    }));
      const res = await axios.post('/shop/order/', articles, { withCredentials: true });  
      return res.data 
});

export const loadOrders = createAsyncThunk("shop/loadOrders", async () =>{
    const res = await axios.get('/shop/orders',{withCredentials:true})
    return res.data;
});

export const getCategories = createAsyncThunk("shop/categories", async () =>{
    const res = await axios.get('/shop/categories');
    return res.data
});
export const getSubCategories = createAsyncThunk("shop/subCategories", async () =>{
    const res = await axios.get('/shop/subCategories');
    return res.data
});

export const logout = createAsyncThunk("shop/logout", async () => {
    const res = axios.post("/logout", {}, { withCredentials: true})
    return res.data
})

export const login = createAsyncThunk("shop/login", async (userdata) =>{
    let email = userdata.email
    let password = userdata.password
    const res = axios.post("/login", { email, password }, { withCredentials: true })
    return res.data
})

export const signUp = createAsyncThunk("shop/signUp", async (userdata) =>{
    let firstname = userdata.firstname
    let lastname = userdata.lastname
    let street = userdata.street
    let postcode = userdata.postcode
    let city = userdata.city
    let country = userdata.country
    let phone = userdata.phone
    let email = userdata.email
    let password = userdata.password

    const res = axios.post("/signup", {firstname, lastname, street, postcode, city, country, phone, email, password})
    return res.data
})

export const setCategoryFilter = createAction("shop/setCategoryFilter");
export const setSubCategoryFilter = createAction("shop/setSubCategoryFilter");

export const addToCart = createAction("shop/shoppingCard");
export const updateQuantity = createAction("shop/updateQuantity");
export const deleteFromCard = createAction("shop/deleteFromShoppingCard");


const initialState = {
    articles:[],
    article:[],
    categories:[],
    subCategories:[],
    shoppingCard:[],
    filter: {category: null,
            subCategory: null},
    orders:[],
    loggedIn: false,
}


const shopReducer = createReducer(initialState,(builder)=>{
    builder.addCase(loadArticles.fulfilled,(state,action)=>{
        return{
            ...state,
            articles:action.payload
        }  
    })
    .addCase(loadArticle.fulfilled,(state,action)=>{
        return{
            ...state,
            article:action.payload

        }  
    })
    .addCase(getCategories.fulfilled,(state,action)=>{
        return{
            ...state,
            categories:action.payload

        }  
    })
    .addCase(getSubCategories.fulfilled,(state,action)=>{
        return{
            ...state,
            subCategories:action.payload

        }  
    })
    .addCase(loadOrders.fulfilled,(state,action)=>{
        return{
            ...state,
            orders:action.payload

        }  
    })
    .addCase(addToCart,(state,action)=>{  
        let existingArticleIndex = state.shoppingCard.findIndex(item => item._id === action.payload._id);
        if (existingArticleIndex !== -1){
        return{
                ...state,
                shoppingCard: state.shoppingCard.map((item) => 
                item._id === action.payload._id ? {...item, quantity_buy_card: item.quantity_buy_card + action.payload.quantity_buy_card} : item
    )}       
        }else{
        return{
            ...state,
            shoppingCard:[...state.shoppingCard,action.payload],
        }
    }
    }) 
    .addCase(setCategoryFilter, (state, action) => {
        state.filter.category = action.payload;
    })
    .addCase(setSubCategoryFilter, (state, action) => {
        state.filter.subCategory = action.payload;
    })
    .addCase(updateQuantity, (state,action) =>{
        return {
        ...state,
        shoppingCard: state.shoppingCard.map((item) =>
          item._id === action.payload.id ? { ...item, quantity_buy_card: action.payload.quantity } : item
    )}
    })
    .addCase(deleteFromCard, (state,action) =>{
        return {
            ...state,
            shoppingCard: state.shoppingCard.filter(item => item._id !== action.payload)
        }
    })
    .addCase(order.fulfilled, (state,action) =>{
        return {
            ...state,
            shoppingCard: []
        }
    })
    .addCase(logout.fulfilled, (state,action) =>{
        return {
            ...state,
            loggedIn: false
        }
    })
    .addCase(login.fulfilled, (state, action) => {
        return {
            ...state,
            loggedIn: true
        }
    })
    .addCase(signUp.fulfilled, (state, action) => {
        return {
            ...state,
        }
    })
})

export default shopReducer;
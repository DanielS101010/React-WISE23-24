import React from "react"
import App from "./app";
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducer/reducer"

import Shop from "./Shop/shop"
import LogIn from "./Login/login"
import SignUp from "./SignUp/signup"
import ShoppingCard from "./ShoppingCard/shoppingCard";
import Orders from "./Orders/orders"
import ShowArticleDetail from "./ShowArticleDetail/showArticleDetail";
import Account from "./Account/account";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Shop />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/warenkorb",
                element: <ShoppingCard />
            },
            {
                path: "/bestellungen",
                element: <Orders />
            },
            {
                path: "/article",
                element: <ShowArticleDetail/>
            },
            {
                path: "/account",
                element: <Account />
            }

        ]
    }
])


const store = configureStore({reducer:rootReducer})


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

'use client'

import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountReducer";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        account: accountReducer
    }
})


export const ReduxProvider = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
)

// store.subscribe(() => console.log(store.getState()))
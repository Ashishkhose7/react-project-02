import { configureStore } from "@reduxjs/toolkit";
import globalstatReducers from "../Reducers/globalstatReducers";
import { cryptoNewsApi } from "../Services/cryptoNewsApi"; 

export const store = configureStore({
    reducer : {
        globalstatReducers,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    }
})
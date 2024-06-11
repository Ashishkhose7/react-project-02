import { configureStore } from "@reduxjs/toolkit";
import globalstatReducers from "../Reducers/globalstatReducers";

export const store = configureStore({
    reducer : {
        globalstatReducers
    }
})
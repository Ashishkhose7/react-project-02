import { createSlice } from "@reduxjs/toolkit";
import { globalstats, coins, news } from "../Services/rawdata";

export const globalstatSlice = createSlice({
    name: 'globalstats',
    initialState:{
        globaldata : globalstats,
        coins : coins,
        news: news
    },
    reducers:{
        loadstats:(state, action)=>{
            state.globaldata = action.payload;
            // console.log(action.payload);
        },
        loadcoins:(state, action)=>{
            state.coins = action.payload.slice(0, 10);
            // console.log(action.payload.slice(0, 10));
        },
        loadnews:(state, action)=>{
            state.news = action.payload.slice(0,10);
            // console.log(action.payload.slice(0, 10));

        }
    }
})

export const { loadstats, loadcoins, loadnews } = globalstatSlice.actions;
export const globaldata = (state) => state.globalstatReducers.globaldata;
export const coinsdata = (state) => state.globalstatReducers.coins;
export const newsdata = (state) => state.globalstatReducers.news;
export default globalstatSlice.reducer;
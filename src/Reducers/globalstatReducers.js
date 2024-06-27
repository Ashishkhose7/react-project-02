import { createSlice } from "@reduxjs/toolkit";
// import { globalstats, coins, news } from "../Services/rawdata";

export const globalstatSlice = createSlice({
    name: 'globalstats',
    initialState:{
        globaldata : '',
        coins : '',
        news: '',
        imgdata: [],
    },
    reducers:{
        loadstats:(state, action)=>{
            state.globaldata = action.payload;
            // console.log(action.payload);
        },
        loadcoins:(state, action)=>{
            state.coins = action.payload;
            // console.log(action.payload.slice(0, 10));
        },
        loadnews:(state, action)=>{
            state.news = action.payload;
        },
        loadimg:(state, action)=>{
            state.imgdata = [];
            for (const key in action.payload) {
                state.imgdata.push(action.payload[key].src.medium);
            }
        }
    }
})

export const { loadstats, loadcoins, loadnews, loadimg } = globalstatSlice.actions;
export const globaldata = (state) => state.globalstatReducers.globaldata;
export const coinsdata = (state) => state.globalstatReducers.coins;
export const newsdata = (state) => state.globalstatReducers.news;
export const imgdata = (state) => state.globalstatReducers.imgdata;
export default globalstatSlice.reducer;
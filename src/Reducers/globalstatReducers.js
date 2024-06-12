import { createSlice } from "@reduxjs/toolkit";


export const globalstatSlice = createSlice({
    name: 'globalstats',
    initialState:{
        globaldata:{},
        coins:[],
    },
    reducers:{
        loadstats:(state, action)=>{
            state.globaldata = action.payload;
            // console.log(action.payload);
        },
        loadcoins:(state, action)=>{
            state.coins = action.payload.slice(0, 10);
            // console.log(action.payload.slice(0, 10));
        }
    }
})

export const { loadstats, loadcoins } = globalstatSlice.actions;
export const globaldata = (state) => state.globalstatReducers.globaldata;
export const coinsdata = (state) => state.globalstatReducers.coins;
export default globalstatSlice.reducer;
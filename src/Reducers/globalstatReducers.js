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
            console.log(action.payload);
        },
        loadcoins:(state, action)=>{
            state.coins = action.payload;
            console.log(action.payload);
        }
    }
})

export const { loadstats, loadcoins } = globalstatSlice.actions;
export const globaldata = (state) => state.globalstatReducers.globaldata;
export const coinsdata = (state) => state.globalstatReducers.coins;
export default globalstatSlice.reducer;
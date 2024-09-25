import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    flag: "off",
};

export const authSlice = createSlice({
    name: "auth", 
    initialState, 
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; 
        },
        setFlag: (state) => {
            state.flag = state.flag === "on" ? "off" : "on";
        },
    }
})

export const { setMode, setFlag } = authSlice.actions; 
export default authSlice.reducer;
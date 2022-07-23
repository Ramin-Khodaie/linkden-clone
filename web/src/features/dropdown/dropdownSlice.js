import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    miniDropdown:false,
    extraMenu:false
}

const dropDownSlice = createSlice({
    name:"dropdown",
    initialState:initialState,
    reducers:{
        toggleDropdown:(state)=>{
            state.miniDropdown = !state.miniDropdown ;
        },
        closeDropdown:(state)=>{
            state.miniDropdown = false;
        },
        toggleExtraMenuDropdown:(state)=>{
            state.extraMenu = !state.extraMenu
        },
        closeExtraMenu:(state)=>{
            state.extraMenu = false
        }
    }
})

export const {toggleDropdown, closeDropdown, closeExtraMenu, toggleExtraMenuDropdown} = dropDownSlice.actions;
export default dropDownSlice.reducer;
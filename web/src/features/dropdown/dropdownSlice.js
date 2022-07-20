import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdown:false
}

const dropDownSlice = createSlice({
    name:"dropdown",
    initialState:initialState,
    reducers:{
        toggleDropdown:(state)=>{
            state.dropdown = !state.dropdown ;
        },
        closeDropdown:(state)=>{
            state.dropdown = false;
        }
    }
})

export const {toggleDropdown, closeDropdown} = dropDownSlice.actions;
export default dropDownSlice.reducer;
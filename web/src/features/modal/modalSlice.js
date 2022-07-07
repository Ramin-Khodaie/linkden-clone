import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showModal: false
}


const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        toggleModal: (state, { payload }) => {
            state.showModal = payload
        }

    }
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
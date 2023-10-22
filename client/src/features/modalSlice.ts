import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/models";

type Modal = {
    isActive: boolean,
    currentUser: IUser | null,

}

const initialState: Modal = {
    isActive: false,
    currentUser: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalActive: (state, action: PayloadAction<boolean>) => {
            state.isActive = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<IUser | null>) => {
            state.currentUser = action.payload
        }
    }
})

export const { setModalActive, setCurrentUser } = modalSlice.actions
export default modalSlice.reducer
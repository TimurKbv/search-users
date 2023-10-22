import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./users/users.api";
import searchSlice from "../features/searchSlice";
import modalSlice from "../features/modalSlice";



const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        search: searchSlice,
        modal: modalSlice
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(usersApi.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
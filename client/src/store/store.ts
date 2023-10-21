import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./users/users.api";
import searchSlice from "../features/searchSlice";



const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        search: searchSlice
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(usersApi.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
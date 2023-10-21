import { PayloadAction, createSlice } from "@reduxjs/toolkit"


type Search = {
    searchValue: string
}

const initialState: Search = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    }
})


export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
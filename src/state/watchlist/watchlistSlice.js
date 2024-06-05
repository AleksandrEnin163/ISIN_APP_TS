import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: [],
    reducers: {
        addToWatchList: (state, action) => [...state, action.payload],
        removeFromWatchList: (state, action) => state.filter(item => item.id !== action.payload.id)
    }
})

export const { addToWatchList, removeFromWatchList } = watchlistSlice.actions;

export default watchlistSlice.reducer
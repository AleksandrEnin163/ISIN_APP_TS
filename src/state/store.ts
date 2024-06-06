import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from './watchlist/watchlistSlice.js'

export const store = configureStore({
    reducer: {
        watchlist: watchlistReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
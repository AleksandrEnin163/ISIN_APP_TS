import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Stock {
    imageUrl: string;
    name: string;
    price: string;
    id: string;
    indexName: string;
    isin: string;
  }

  type WatchlistState = Stock[]

const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState: [] as WatchlistState,
    reducers: {
        addToWatchList: (state, action: PayloadAction<Stock>) => [...state, action.payload],
        removeFromWatchList: (state, action: PayloadAction<Stock>) => state.filter(item => item.id !== action.payload.id)
    }
})

export const { addToWatchList, removeFromWatchList } = watchlistSlice.actions;

export default watchlistSlice.reducer

export type { Stock, WatchlistState }
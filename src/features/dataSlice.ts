import { IExpectedCoin } from "@/helpers/help";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CoinsState {
	coins: IExpectedCoin[];
  }
  
  const initialState: CoinsState = {
	coins: [],
  };
  
  const coinsSlice = createSlice({
	name: 'coins',
	initialState,
	reducers: {
	  appendCoins(state, action: PayloadAction<IExpectedCoin[]>) {
		state.coins = [...state.coins, ...action.payload];
	  },
	},
  });
  
  export const { appendCoins } = coinsSlice.actions;
  export default coinsSlice.reducer;
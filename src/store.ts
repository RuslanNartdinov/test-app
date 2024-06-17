import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './features/dataSlice';
import userReducer from "./features/userSlice"

const store = configureStore({
  reducer: {
    coins: coinsReducer,
	user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { IUserData } from "@/helpers/help";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { clear } from "console";

interface UserState {
	user: IUserData;
  }
  
  export const initialState: UserState = {
	user: {
		authed: false,
		firstName : '',
		lastName: '',
		age: 0,
		email: '',
		image: ''
	},
  };
  
  const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
	  setUser(state, action: PayloadAction<IUserData>) {
		state.user = action.payload;
	  },
	},
  });
  
  export const { setUser } = userSlice.actions;
  export default userSlice.reducer;
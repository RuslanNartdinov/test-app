import { IUserData } from "@/helpers/help";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	user: IUserData;
  }
  
  const initialState: UserState = {
	user: {
		authed: false,
		firstName : 'Ruslan',
		lastName: 'Nartdinov',
		age: 21,
		email: 'nartdinov2020@gmail.com',
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
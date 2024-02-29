import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name:'player',
  initialState: "",
  reducers : {
    setAuth:(state,action)=>{
      return action.payload;
    }
  }
})
export const {setAuth} = AuthSlice.actions;
export default AuthSlice.reducer;

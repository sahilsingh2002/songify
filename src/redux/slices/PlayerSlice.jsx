import { createSlice } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name:'player',
  initialState: {},
  reducers : {
    setData:(state,action)=>{
      return action.payload;
    }
  }
})
export const {setData} = PlayerSlice.actions;
export default PlayerSlice.reducer;

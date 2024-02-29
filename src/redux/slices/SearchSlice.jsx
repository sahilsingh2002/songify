import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name:'search',
  initialState: "",
  reducers : {
    makeData:(state,action)=>{
      return action.payload;
    }
  }
})
export const {makeData} = SearchSlice.actions;
export default SearchSlice.reducer;

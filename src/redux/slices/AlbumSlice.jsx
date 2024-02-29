import { createSlice } from "@reduxjs/toolkit";

const AlbumSlice = createSlice({
  name:'album',
  initialState: [],
  reducers : {
    allAlbum:(state,action)=>{
      state[0]=action.payload;
    }
  }
})
export const {allAlbum} = AlbumSlice.actions;
export default AlbumSlice.reducer;

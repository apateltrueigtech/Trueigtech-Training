import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    albums:[],
    loading:false,
    error:null,
};
const albumSlice = createSlice({
    name:"albums",
    initialState,
    reducers:{
        fetchAlbumRequest:(state)=>{
            state.loading = true;
        },
        fetchAlbumSuccess:(state,action)=>{
            state.loading = false;
            state.albums= action.payload;
            state.error = null;
        },
        fetchAlbumsFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
})
export const {fetchAlbumRequest,fetchAlbumSuccess,fetchAlbumsFailure} =
albumSlice.actions;
export default albumSlice.reducer;
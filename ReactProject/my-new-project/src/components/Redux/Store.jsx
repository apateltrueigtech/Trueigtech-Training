import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Features/Counter/counterSlice'
import postReducer from "./Features/Thunk/postSlice"

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    post:postReducer
    
  },
})
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Features/Counter/counterSlice'
import postReducer from "./Features/Thunk/postSlice"
import createSagaMiddleware from 'redux-saga'
import { watchFetchAlbums } from './Features/Saga/albumSaga'
import albumSlice from './Features/Saga/albumSlice'
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    post:postReducer ,
    albums:albumSlice,  
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({thunk:false}).concat(sagaMiddleware)
});
sagaMiddleware.run(watchFetchAlbums)

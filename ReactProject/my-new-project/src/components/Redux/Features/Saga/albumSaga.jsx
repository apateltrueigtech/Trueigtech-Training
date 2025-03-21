import {call,put,takeLatest} from "redux-saga/effects"
import { fetchAlbumRequest,fetchAlbumSuccess,fetchAlbumsFailure } from "../Saga/albumSlice";

const fetchAlbums = async()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/albums")
  if(!response.ok){
    throw new Error ("failed to fetch albums");
  }
  return await response.json();
};
function * fetchAlbumsSaga(){
  try{
    const albums = yield call(fetchAlbums);
    // console.log("API Response:",albums);
    yield put(fetchAlbumSuccess(albums)); 
  } catch (error) {
    yield put(fetchAlbumsFailure(error.message)); 
  }
}
export function *watchFetchAlbums(){
  yield takeLatest(fetchAlbumRequest.type,fetchAlbumsSaga)
}
  

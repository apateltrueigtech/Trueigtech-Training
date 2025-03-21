import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchAlbumRequest } from "./albumSlice";

const AlbumList =()=>{
    const dispatch = useDispatch();
    const {albums,loading,error} = useSelector((state)=>state.albums);
    
    useEffect(()=>{
        dispatch(fetchAlbumRequest());
    },[dispatch]);
    
    return(
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
            <h1  className="text-3xl font-bold text-center text-blue-800 mb-4">Albums</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error :{error}</p>}
            <ul className="space-y-2">
                {albums.map((album)=>(
                    <li key ={album.id}
                    className="p-3 bg-blue-400 rounded-md shadow-md hover:bg-blue-200 transition duration-300"
                    >
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    )
};
export default AlbumList
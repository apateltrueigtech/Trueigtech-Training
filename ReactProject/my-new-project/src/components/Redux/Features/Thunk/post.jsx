import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from './postSlice'

function Post  ()  {
    const dispatch = useDispatch();
    const state = useSelector((state ) => state);
    console.log("State",state)

    if(state.post.isLoading){
        return <h1>Loading...</h1>;

    }
  return (
    <div>
        <button className='border p-4 rounded' 
        onClick={(e) => dispatch(fetchPosts())}>
            Fetch the Post
        </button>
        <ul>
        {state.post.data && state.post.data.map((item)=>(
                <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                </li>
            ))}
            </ul>
    </div>
  );
}

export default Post;
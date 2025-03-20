import React, { useEffect, useState } from 'react'

function LoggerComponent  () {
    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        console.log('Component rendered or count changed:',count);
    },[count]);                                 //Runs on every render
  
    return (
    <div>
        <h1 >Count:{count}</h1>
        <button className='m-4 p-4 border' onClick={()=>setCount(count+1)}>
            Increment
        </button>
    </div>
  );
}

export default LoggerComponent
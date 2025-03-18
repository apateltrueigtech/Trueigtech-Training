import React,{useEffect} from 'react'
import { useState } from 'react';

function Lifecycle() {
   
    const[count,setCount]=useState(0);
    const [flag,setFlag]=useState(false);
     useEffect(() => {     
            console.log("Component mounted");
        return()=>{
            console.log("Component unmounted");
        }
    }, []);
     useEffect(()=>{
       if(count>0 && flag==true){
        console.log("Component updated");
        const timer = setTimeout(() => {
            setCount((prevCount)=>prevCount+1);   
        }, 1000); 
        return ()=> clearTimeout(timer) ; 
     }
    },[count,flag]
)
    return (<>
    <h1 className="p-4 text-2xl">Stop_Watch :{count}</h1>
    <button onClick={()=> 
     {
        setFlag(true);
        setCount(1)
    }} className='p-4 border' >start & Reset </button>
    <button  className='m-4 p-4 border' onClick={()=>setFlag(false)}>Stop</button>
    </>
  )
}

export default Lifecycle
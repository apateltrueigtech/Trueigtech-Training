import React,{useEffect} from 'react'
import { useState } from 'react';

function Lifecycle() {
   
    const[count,setCount]=useState(0);
    const [flag,setFlag]=useState(false);
    const[flag1,setFlag1]=useState(false);
     useEffect(() => {     
            console.log("Component mounted");

    }, []);
    useEffect(()=>{
        if(flag1==true){
            console.log("component unmounted");
            }
      
            (setFlag==false)
            {console.log("component unmounted") }
        
       if(count>0 && flag==true){
       
        setFlag1(false);

        console.log("Component updated");
        setTimeout(() => {

            
            setCount(count+1);   
        }, 1000);   
     }
    },[count]
)
    return (<>
    <h1 className="p-4 text-2xl">Stop_Watch :{count}</h1>
    <button onClick={()=> 
     {
      
        setFlag(true);
        setFlag1(true);
        setCount(1)

    }} className='p-4 border' >start & Reset </button>
    <button  className='m-4 p-4 border' onClick={()=>setFlag(false)}>Stop</button>
    </>
  )
}

export default Lifecycle
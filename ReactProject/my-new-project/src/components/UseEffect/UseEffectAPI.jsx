import React, { useState } from 'react'
import { useEffect } from 'react'
function useEffectAPI  ()  {
    const[data,setData ] = useState([])
    const[loading,setLoading]= useState(true)

    const fetchData = async()=>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos')
        const result = await response.json()
        // console.log(result)
        setData(result)
        setLoading(false)
    }
    useEffect(()=>{
      
        fetchData()
    },[])       //It will run only on 1st render
    if(loading) return<h3>Loading...</h3>
  return (
    <div>
        <h1>API fetching</h1>
        {
            data.map((data)=> <li key={data.id}>{data.title}</li>)
        }
    </div>
  )
}

export default useEffectAPI
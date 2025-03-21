import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Photo  ()  {
  const[data,setData] = useState([]);
 const API ="https://jsonplaceholder.typicode.com/photos"

 
 const getPhotosData = async()=>{
  try {
     const res = await axios.get(API)
    console.log(res)
     setData(res.data)
  } catch (error) {
    console.error("Error message:",error.message)
  }
 }

 useEffect(()=>{
  getPhotosData();
 },[])

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>Photo Gallery</h1>
   <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {
      data.map((item)=> 
      <li key={item.id} className='border p-4 rounded-lg shadow-lg bg-amber-200'>
         <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
         <p className="text-sm text-gray-500">Album ID: {item.albumId}</p>
        {/* {item.url} */}
        {/* {item.thumbnailUrl} */}
        </li>)
    }
    </ul>
    </div>
 
  )
}

export default Photo
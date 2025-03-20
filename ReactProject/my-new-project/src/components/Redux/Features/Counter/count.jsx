import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './counterSlice';

function Count ()  {
    const [amount,setAmount] = useState(0)

const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch();

function handleIncrementClick(){
    dispatch(increment());

}
function handleDecrementClick(){
    dispatch(decrement())
}
function handleResetClick(){
    dispatch(reset())
}
function handleAmountClick(){
    dispatch((incrementByAmount(amount)))
}

  return (
    <div>
        <button className="px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-green-400 transition" onClick={handleIncrementClick}> + </button>
        <p className='text-xl font-semibold'>Count : {count}</p>
        <button className= "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"onClick={handleDecrementClick}> - </button>
        <br/>
        <br/>
        <button  className="px-3 py-2 text-blue-500 rounded -lg hover:bg-blue transition border" onClick={handleResetClick}> Reset </button>
        <input className=' border p-2 rounded' type='Number' 
        value={amount} 
        placeholder='Enter Amount'
        onChange={(e)=> setAmount(e.target.value)}
        />
        <br/>
        <br/>
        <button  className="px-3 py-2 text-blue-500 rounded -lg hover:bg-blue transition border" onClick={handleAmountClick}>Increment By Amount </button>
       
    </div>
  )
}

export default Count
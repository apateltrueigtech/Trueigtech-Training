import {useState} from 'react'

import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <h1>Counter App</h1>
     <button onClick={()=>setCount(count-1)}>DECREMENT</button>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>INCREMENT</button>
         
    </div>
  );
}

export default App;

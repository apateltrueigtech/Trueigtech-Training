import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Student from './components/Student';

function App() {


  
    
    
      <Header/>
        const [count, setCount] = useState(0)
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-blue-500 text-3xl font-bold mb-4">Counter App</h1>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-lg">
            <button 
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setCount(count - 1)}
            >
              DECREMENT
            </button>
            <h2 className="text-2xl font-semibold">{count}</h2>            
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={() => setCount(count + 1)}
            >
              INCREMENT
            </button>
          </div>
        </div>
        
        
      
      // {/* <Student name="Ram" age={25} isStudent={true}/>
      // <Student name="Shyam" age={22} isStudent={false}/>
      // <Student name="Rahul" age={24} isStudent={true}/>
      // <Student name="Sachin" age={26} isStudent={false}/>
      // <Student name="sandy"/> */}
     
  )
}

export default App

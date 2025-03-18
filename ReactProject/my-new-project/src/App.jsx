
import './App.css'
import Header from './components/Header';
import Lifecycle from './components/Lifecycle';
import Lifecycle2 from './components/Lifecycle2';
import Student from './components/Student';
import Counter from './components/counter';
import UseEffectAPI from './components/UseEffect/UseEffectAPI';

function App() {


  
    return(
    <div>
      <Header/>
      <Counter/>
      <Lifecycle/>
      <Lifecycle2/>
       <UseEffectAPI/> 
    </div>
       
    )
        
        
      
      // {/* <Student name="Ram" age={25} isStudent={true}/>
      // <Student name="Shyam" age={22} isStudent={false}/>
      // <Student name="Rahul" age={24} isStudent={true}/>
      // <Student name="Sachin" age={26} isStudent={false}/>
      // <Student name="sandy"/> */}
     
  
}

export default App

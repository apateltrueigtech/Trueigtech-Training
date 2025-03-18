
import './App.css'
import Header from './components/Header'
import Student from './components/Student'

function App() {


  return (
    <> 
    
      <Header/>
      <Student name="Ram" age={25} isStudent={true}/>
      <Student name="Shyam" age={22} isStudent={false}/>
      <Student name="Rahul" age={24} isStudent={true}/>
      <Student name="Sachin" age={26} isStudent={false}/>
      <Student name="sandy"/>
     </>
  )
}

export default App

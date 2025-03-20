import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
 import Counter from './components/Counter';
import Lifecycle from './components/Lifecycle';
import UseEffectAPI from './components/UseEffect/UseEffectAPI';
import LoggerComponent from './components/UseEffect/LoggerComponent';
import TimerComponent from './components/UseEffect/TimerComponent';
import ReactHookForm from './components/ReactHookForm';
import { GetAPIData } from './components/Loader/GetAPIData';
import {GetData} from './components/Loader/GetData';
import ProtectedRoute from './components/RBAC/ProtectedRoute'; 
import RoleBasedRoute from './components/RBAC/RoleBasedRoute'; 
// import Login from './components/RBAC/Login';
import Dashboard from './components/RBAC/Dashboard';
import AdminDashboard from './components/RBAC/AdminDashboard';
import { AuthProvider } from './components/RBAC/AuthContext';
import { lazy } from 'react';


const Login = lazy(()=>wait(1000).then(()=>import('./components/RBAC/Login')))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Counter /> },
      { path: '/Counter', element: <Counter /> },
      { path: '/Lifecycle', element: <Lifecycle /> },
      { path: '/UseEffectAPI', element: <UseEffectAPI />,
        children: [
          { path: 'TimerComponent', element: <TimerComponent /> },
          { path: 'LoggerComponent', element: <LoggerComponent /> },
        ],
      },
      { path: '/ReactHookForm', element: <ReactHookForm /> },
      { path: '/GetAPIData', element: <GetData />, loader: GetAPIData },

      {
        element: <ProtectedRoute />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
        ],
      },
      {
        element: <RoleBasedRoute allowedRoles={['admin']} />,
        children: [
          { path: '/admin', element: <AdminDashboard /> },
        ],
      },
      { path: '/login', element: <Login /> },
     
    ],
  },
]);
const wait =(time)=>{
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve()
    },time)
    
  })
}
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

     // {/* <Student name="Ram" age={25} isStudent={true}/>
// //       // <Student name="Shyam" age={22} isStudent={false}/>
// //       // <Student name="Rahul" age={24} isStudent={true}/>
// //       // <Student name="Sachin" age={26} isStudent={false}/>
// //       // <Student name="sandy"/> */}
  );
}

export default App;

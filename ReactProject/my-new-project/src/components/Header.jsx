import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./RBAC/AuthContext";
const Header = ()=> {
  const {user,logout} = useAuth();
  const navigate = useNavigate();

  const handleLogout =()=>{
    logout();
    navigate("/login");
  }
  return (
    <>
<h1 className="text-2xl font-bold text-blue-500">Welcome to My App</h1>
<br/>
<ul className="flex-gap-2 text-black font-medium items-center">
      <li><Link to="/Counter">Counter</Link></li> 
      <li><Link to="/Lifecycle">Lifecycle</Link></li>
      <li><Link to="/UseEffectAPI">UseEffectAPI</Link></li>
      <li><Link to ="/ReactHookForm">ReactHookForm</Link></li>
      <li><Link to="GetAPIData">Data Fetch Using Loader</Link></li>
      {/* <li><Link to="GetAPIData?userId=1">View Post for User 1</Link></li>
      <li><Link to="GetAPIData?userId=2">View Post for User 2</Link></li>  */}

</ul>
<br/>
<nav>
{user ? (
        <button  onClick={handleLogout} 
        className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      ) : (
        <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
          Login
        </Link>
      )}
</nav>
    </>
  
)};

export default Header;

import { useAuth } from "../RBAC/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate(); 

  const handleLogin = () => {
    login(username, role);
    navigate("/dashboard"); 
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <br />
      <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded mb-4">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
};

export default Login;

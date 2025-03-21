import { useAuth } from "./AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {user?.username} (Role: {user?.role})</p>
    </div>
  );
};

export default AdminDashboard;

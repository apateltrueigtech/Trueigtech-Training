import { useLoaderData, useSearchParams } from "react-router-dom";
export const GetData = () => {
  const UsersData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("userId") || "";
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {userId ? `User Details for ID: ${userId}` : "All Users"}
      </h1>
      <div className="mb-4 text-center">
        <label className="mr-2">Filter by User ID:</label>
        <select
          value={userId}
          onChange={(e) => setSearchParams({ userId: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="">All Users</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Email</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {UsersData.length > 0 ? (
              UsersData.map((user) => (
                <tr key={user.id} className="hover:bg-gray-200 transition">
                  <td className="py-2 px-4 border text-center">{user.id}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.username}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center">
                  No user found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import './UsersTable.css'

export default function UsersTable({
  users,
  currentPage,
  setCurrentPage,
  totalUsers,
  usersPerPage,
  onDelete,
  onEdit,
}) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  function handleDelete(userId) {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (confirmed) {
      onDelete(userId);
    }
  }

  return (
    <>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>

              <td
                style={{
                  color: user.age < 50 ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                {user.age}
              </td>

              <td>{user.gender}</td>

              <td>
                <Link to={`/users/${user.id}`}>View</Link>{" "}
                <button onClick={() => onEdit(user)}>✏️ Edit</button>{" "}
                <button onClick={() => handleDelete(user.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "12px" }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

import { useState } from "react";

import UsersTable from "../components/UsersTable";
import UsersFilter from "../components/UsersFilter";
import EditUserModal from "../components/EditUserModal"

import { useUsers } from "../context/UsersContext";

export default function Users() {
  const { users,  updateUser, deleteUser } = useUsers();

  const [selectedUser, setSelectedUser] = useState(null);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 5;

  

  function handleUpdateUser(updatedUser) {
    updateUser(updatedUser);
    setSelectedUser(null);
  }

  function handleDeleteUser(userId) {
    deleteUser(userId);
  }

  function handleEditUser(user) {
    setSelectedUser(user);
  }

 
  let filteredUsers = users
  .filter(user =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .filter(user => (gender ? user.gender === gender : true));

if (sortOrder === "asc") {
  filteredUsers = [...filteredUsers].sort((a, b) => a.age - b.age);
}

if (sortOrder === "desc") {
  filteredUsers = [...filteredUsers].sort((a, b) => b.age - a.age);
}

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  return (
    <div>
      <h1>Users</h1>

      

      <UsersFilter
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setCurrentPage={setCurrentPage}
      />

      <UsersTable
        users={paginatedUsers}
        currentPage={currentPage}
        usersPerPage={USERS_PER_PAGE}
        totalUsers={filteredUsers.length}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
        setCurrentPage={setCurrentPage}
      />

      {selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onSave={handleUpdateUser}
        />
      )}

      
    </div>
  );
}

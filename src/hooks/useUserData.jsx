export default function useUsersData({
  users = [],
  search,
  gender,
  sortOrder,
  currentPage,
  usersPerPage,
}) {
  
  const filteredUsers = users.filter((user) => {
    const query = search.toLowerCase();

    const matchesSearch =
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query);

    const matchesGender =
      gender === "all" ? true : user.gender === gender;

    return matchesSearch && matchesGender;
  });

  
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOrder === "asc") return a.age - b.age;
    if (sortOrder === "desc") return b.age - a.age;
    return 0;
  });

 
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const paginatedUsers = sortedUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  return {
    paginatedUsers,
    totalUsers: sortedUsers.length,
    indexOfLastUser,
  };
}
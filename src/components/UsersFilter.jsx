export default function UsersFilters({
  search,
  setSearch,
  gender,
  setGender,
  sortOrder,
  setSortOrder,
  setCurrentPage,
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <input
        type="text"
        placeholder="Search for Name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ padding: "6px", marginRight: "10px" }}
      />

      <select
        value={gender}
        onChange={(evt) => {
          setGender(evt.target.value);
          setCurrentPage(1);
        }}
        style={{ padding: "6px", marginRight: "10px" }}
      >
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => setSortOrder(event.target.value)}
        style={{ padding: "6px" }}
      >
        <option value="none">Sort by Age</option>
        <option value="asc">Age: Low → High</option>
        <option value="desc">Age: High → Low</option>
      </select>
    </div>
  );
}

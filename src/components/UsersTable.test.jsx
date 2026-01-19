import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersTable from "./UsersTable";


jest.mock(
  "react-router-dom",
  () => ({
    __esModule: true,
    Link: ({ children }) => <span>{children}</span>,
  }),
  { virtual: true }
);


const mockUsers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    age: 25,
    gender: "male",
  },
];

test("renders user data in table", () => {
  render(
    <UsersTable
      users={mockUsers}
      currentPage={1}
      setCurrentPage={() => {}}
      totalUsers={1}
      usersPerPage={10}
      onDelete={() => {}}
      onEdit={() => {}}
    />
  );

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
});

test("edit button calls onEdit", () => {
  const onEditMock = jest.fn();

  render(
    <UsersTable
      users={mockUsers}
      currentPage={1}
      setCurrentPage={() => {}}
      totalUsers={1}
      usersPerPage={10}
      onDelete={() => {}}
      onEdit={onEditMock}
    />
  );

fireEvent.click(screen.getByText(/edit/i));
  expect(onEditMock).toHaveBeenCalled();
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersDetail from "./UsersDetail";

jest.mock(
  "react-router-dom",
  () => ({
    __esModule: true,
    useParams: () => ({ id: "1" }),
    Link: ({ children }) => <span>{children}</span>,
  }),
  { virtual: true }
);


jest.mock("../hooks/useFetch", () => ({
  __esModule: true,
  default: () => ({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      age: 25,
      gender: "male",
      phone: "1234567890",
      bloodGroup: "A+",
    },
    loading: false,
    error: null,
  }),
}));



test("renders user details correctly", () => {
  render(<UsersDetail />);

  expect(screen.getByText("User Details")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john@example.com")).toBeInTheDocument();
  expect(screen.getByText("25")).toBeInTheDocument();
  expect(screen.getByText("male")).toBeInTheDocument();
});

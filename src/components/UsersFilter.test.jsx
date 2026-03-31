import { render, screen, fireEvent } from "@testing-library/react";
import UsersFilters from "./UsersFilters";

describe("UsersFilters Component", () => {
  let mockSetSearch;
  let mockSetGender;
  let mockSetSortOrder;
  let mockSetCurrentPage;

  const defaultProps = {
    search: "",
    setSearch: jest.fn(),
    gender: "all",
    setGender: jest.fn(),
    sortOrder: "none",
    setSortOrder: jest.fn(),
    setCurrentPage: jest.fn(),
  };

  beforeEach(() => {
    mockSetSearch = jest.fn();
    mockSetGender = jest.fn();
    mockSetSortOrder = jest.fn();
    mockSetCurrentPage = jest.fn();
  });

  const setup = (props = {}) => {
    return render(
      <UsersFilters
        {...defaultProps}
        {...props}
        setSearch={mockSetSearch}
        setGender={mockSetGender}
        setSortOrder={mockSetSortOrder}
        setCurrentPage={mockSetCurrentPage}
      />
    );
  };

  test("renders input and dropdowns", () => {
    setup();

    expect(screen.getByPlaceholderText("Search for Name")).toBeInTheDocument();
    expect(screen.getByDisplayValue("All")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Sort by Age")).toBeInTheDocument();
  });

  test("updates search input and resets page", () => {
    setup();

    const input = screen.getByPlaceholderText("Search for Name");

    fireEvent.change(input, { target: { value: "John" } });

    expect(mockSetSearch).toHaveBeenCalledWith("John");
    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });

  test("changes gender and resets page", () => {
    setup();

    const select = screen.getByDisplayValue("All");

    fireEvent.change(select, { target: { value: "male" } });

    expect(mockSetGender).toHaveBeenCalledWith("male");
    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
  });

  test("changes sort order", () => {
    setup();

    const sortSelect = screen.getByDisplayValue("Sort by Age");

    fireEvent.change(sortSelect, { target: { value: "asc" } });

    expect(mockSetSortOrder).toHaveBeenCalledWith("asc");
  });
});
// comment in test file
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
describe("Navbar Component" , ()=>{
    test("renders all navigation links", ()=>{
        render(
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        );
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Users")).toBeInTheDocument();
        expect(screen.getByText("Add-Users")).toBeInTheDocument();
        expect(screen.getByText("Charts")).toBeInTheDocument();
        expect(screen.getByText("Settings")).toBeInTheDocument();


    })

    test("Home link should be active when on home route" , ()=>{
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Navbar/>
            </MemoryRouter>
        );
        const homeLink = screen.getByText("Home");

        expect(homeLink).toHaveClass("active")
    })
})
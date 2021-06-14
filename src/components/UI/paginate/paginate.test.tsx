import React from "react";
import { render, screen } from "@testing-library/react";
import Paginate from "./paginate";

describe("Test Paginate component", () => {
  it("Paginate component should render correctly", () => {
    render(<Paginate onPageChange={jest.fn()} pageCount={1} currentPage={1} />);

    expect(screen.getByText(/next/i)).toBeInTheDocument();
    expect(screen.getByText(/prev/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
  it("Paginate component should render correctly", () => {
    render(<Paginate onPageChange={jest.fn()} pageCount={0} currentPage={0} />);

    expect(screen.getByText(/next/i)).toBeInTheDocument();
    expect(screen.getByText(/prev/i)).toBeInTheDocument();
    expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./error-message";

describe("Test ErrorMessage component", () => {
  it("ErrorMessage component should render correctly", () => {
    const message = "Error";
    render(<ErrorMessage message={message} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});

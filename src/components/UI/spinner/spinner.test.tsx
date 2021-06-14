import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./spinner";

describe("Test Spinner component", () => {
  it("Spinner component should render correctly", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});

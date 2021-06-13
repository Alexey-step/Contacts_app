import * as React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./error";

describe(`Test Error component`, () => {
  it(`Error component should render correctly`, () => {
    render(<Error />);
    expect(screen.getByText(/Something went wrong!/!)).toBeInTheDocument();
  });
});

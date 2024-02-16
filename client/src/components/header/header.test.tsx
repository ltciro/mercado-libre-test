import React, { ReactElement } from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "./header";

// Define your tests
describe("Header Component", () => {
  let mockChildren: ReactElement;
  beforeEach(() => {
    mockChildren = <div>Child Component</div>;
  });
  it("should render children correctly", () => {
    const { getByText } = render(<Header>{mockChildren}</Header>);
    expect(getByText("Child Component")).toBeInTheDocument();
  });

  it("should have role banner", () => {
    const { getByRole } = render(<Header>{mockChildren}</Header>);
    expect(getByRole("banner")).toBeInTheDocument();
  });
});

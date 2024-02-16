import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FreeShipping from "./free-shipping";

// Define your tests
describe("FreeShipping Component", () => {
  it("should render the local shipping icon correctly", () => {
    const { getByText } = render(<FreeShipping />);

    expect(getByText("local_shipping")).toBeInTheDocument();
  });
});

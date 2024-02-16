import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "./loading";

describe("Loading Component", () => {
  it("should render the loading indicator correctly", () => {
    const { getByText } = render(<Loading />);

    expect(getByText("loading...")).toBeInTheDocument();
  });
});

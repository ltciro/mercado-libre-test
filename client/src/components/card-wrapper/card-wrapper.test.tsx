import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardWrapper from "./card-wrapper";

describe("CardWrapper Component", () => {
  it("should render children correctly", () => {
    const mockChildren = <div>Child Component</div>;

    const { getByText } = render(<CardWrapper>{mockChildren}</CardWrapper>);

    expect(getByText("Child Component")).toBeInTheDocument();
  });
});

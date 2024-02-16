import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemLayout from "./layout";

describe("ItemLayout Component", () => {
  it("should render the layout correctly", () => {
    const { getByText } = render(
      <ItemLayout>
        <div>Child component</div>
      </ItemLayout>
    );

    expect(getByText("Child component")).toBeInTheDocument();
  });
});

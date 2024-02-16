import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb from "./breadcrumb";

describe("Breadcrumb Component", () => {
  it("should render the breadcrumbs correctly", () => {
    const breadcrumbs = ["Category", "Subcategory"];

    const { getByText } = render(<Breadcrumb breadcrumbs={breadcrumbs} />);

    breadcrumbs.forEach((breadcrumb) => {
      expect(getByText(breadcrumb)).toBeInTheDocument();
    });
  });
});

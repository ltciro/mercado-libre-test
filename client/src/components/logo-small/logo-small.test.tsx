import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LogoSmall from "./logo-small";

describe("LogoSmall Component", () => {
  it("should render a link to home with an img and its alt text", () => {
    const { getByAltText } = render(<LogoSmall />);

    expect(getByAltText("Mercado Libre Logo")).toBeInTheDocument();
    expect(document.querySelector("img")).toBeInTheDocument();
    expect(document.querySelector('a[href="/"]')).toBeInTheDocument();
  });
});

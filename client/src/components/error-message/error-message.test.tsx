import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "./error-message";

// Define your tests
describe("ErrorMessage Component", () => {
  it("should render the message correctly", () => {
    const message = { es: "No encontramos lo que buscas" };
    const { getByText } = render(<ErrorMessage message={message} />);

    expect(getByText("No encontramos lo que buscas")).toBeInTheDocument();
  });

  it("should render default message when message prop is not provided", () => {
    const { getByText } = render(<ErrorMessage />);

    expect(getByText("Por favor intenta de nuevo.")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardBody from "./card-body";

describe("CardBody Componente", () => {
  it("debería renderizar el cuerpo del componente correctamente", () => {
    const { getByText } = render(
      <CardBody>
        <p>Test Body</p>
      </CardBody>
    );

    expect(getByText("Test Body")).toBeInTheDocument();
  });
});

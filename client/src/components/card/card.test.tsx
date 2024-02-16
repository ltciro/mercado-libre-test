import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./card";
import { CardVariation } from "@meli/shared/interfaces/card";

describe("Card Componente", () => {
  it("should render correctly with detail variation", () => {
    const { container } = render(
      <Card variation={CardVariation.detail}>Contenido del card detalle</Card>
    );

    expect(container.firstChild).toHaveClass("cardDetail");
  });

  it("should render correctly with row variation", () => {
    const { container } = render(
      <Card variation={CardVariation.row}>Contenido del card fila</Card>
    );

    expect(container.firstChild).toHaveClass("cardRow");
  });
});

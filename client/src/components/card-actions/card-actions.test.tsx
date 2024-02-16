import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardActions from "./card-actions";

describe("CardActions Componente", () => {
  it("debería renderizar correctamente el botón", () => {
    const buttonProps = {
      text: "Click me!",
    };

    const { getByText } = render(<CardActions button={buttonProps} />);

    expect(getByText("Click me!")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardMedia from "./card-media";

describe("CardMedia Component", () => {
  it("should render the CardImage component correctly", () => {
    const imageProps = {
      url: "https://http2.mlstatic.com/D_608338-MLU72700965333_112023-I.jpg",
      alt: "Test Image",
      priority: false,
      sizes: "100px",
    };

    const { getByAltText } = render(<CardMedia image={imageProps} />);

    const imageElement = getByAltText("Test Image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      expect.stringContaining("D_608338-MLU72700965333_112023-I")
    );
  });

  it("should render the CardImage component with default alt correctly", () => {
    const imageProps = {
      url: "https://http2.mlstatic.com/D_608338-MLU72700965333_112023-I.jpg",
      priority: false,
      sizes: "100px",
    };

    const { getByAltText } = render(<CardMedia image={imageProps} />);

    const imageElement = getByAltText("Card Image");
    expect(imageElement).toBeInTheDocument();
  });

  it("should render empty when no image is provided", () => {
    const { container } = render(<CardMedia />);

    const cardMediaWrapper = container.firstChild as HTMLElement;
    expect(cardMediaWrapper).toBeInTheDocument();

    expect(cardMediaWrapper.querySelector("img")).toBeNull();
  });
});

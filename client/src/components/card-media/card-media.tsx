import React from "react";
import CardImage from "./card-image/card-image";
import { CardImageProps } from "@meli/shared/interfaces/card-image";

interface CardMediaProps {
  image?: CardImageProps;
}

export default function CardMedia({ image }: Readonly<CardMediaProps>) {
  const imageDefaultStyle: React.CSSProperties = { borderRadius: "4px" };

  return (
    <div>
      {image && (
        <CardImage
          url={image.url}
          alt={image.alt || "Card Image"}
          size={image.size}
          style={{ ...imageDefaultStyle, ...image.style }}
        ></CardImage>
      )}
    </div>
  );
}

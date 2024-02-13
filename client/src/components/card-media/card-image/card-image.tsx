import React from "react";
import Image from "next/image";
import { CardImageProps, ImageSize } from "@meli/shared/interfaces/card-image";
import { Sizes } from "@meli/shared/interfaces/card";

const IMAGE_SIZE: ImageSize = {
  small: {
    width: 90,
    height: 90,
  },
  medium: {
    width: 160,
    height: 160,
  },
  large: {
    width: 400,
    height: 500,
  },
};

export default function CardImage({
  url,
  size,
  alt,
  style,
}: Readonly<CardImageProps>) {
  const dimension = IMAGE_SIZE[size] ?? IMAGE_SIZE.small;
  const priority = size === Sizes.large || size === Sizes.medium;
  return (
    <Image
      src={url}
      alt={alt || "Card Image"}
      width={dimension.width}
      height={dimension.height}
      quality={100}
      style={{ ...style, objectFit: "contain" }}
      priority={priority}
    ></Image>
  );
}

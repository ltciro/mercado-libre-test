import Image from "next/image";
import { CardImageProps } from "@meli/shared/interfaces/card-image";

import classes from "./card-image.module.css";

export default function CardImage({
  url,
  sizes,
  alt,
  style,
  priority = false,
}: Readonly<CardImageProps>) {
  return (
    <div className={classes.carImageWrapper}>
      <Image
        src={url}
        alt={alt || "Card Image"}
        fill
        quality={100}
        style={{ ...style, objectFit: "contain" }}
        priority={priority}
        sizes={sizes}
      ></Image>
    </div>
  );
}

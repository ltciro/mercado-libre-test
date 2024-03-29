import CardImage from "./card-image/card-image";
import { CardImageProps } from "@meli/shared/interfaces/card-image";

import classes from "./card-media.module.css";

interface CardMediaProps {
  image?: CardImageProps;
}

export default function CardMedia({ image }: Readonly<CardMediaProps>) {
  const imageDefaultStyle: React.CSSProperties = { borderRadius: "4px" };

  return (
    <div className={classes.cardMedia}>
      {image && (
        <CardImage
          url={image.url}
          alt={image.alt}
          priority={image.priority}
          sizes={image.sizes}
          style={{ ...imageDefaultStyle, ...image.style }}
        ></CardImage>
      )}
    </div>
  );
}

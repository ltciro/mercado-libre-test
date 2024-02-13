import { Sizes } from "./card";

export interface CardImageProps {
  url: string;
  size: Sizes;
  alt?: string;
  style?: React.CSSProperties
}

export interface ImageSize {
  [Sizes.small]: Dimension;
  [Sizes.medium]: Dimension;
  [Sizes.large]: Dimension;
}

interface Dimension {
  width: number;
  height: number;
}

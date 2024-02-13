import React, { ReactNode } from "react";

import { CardVariation } from "@meli/shared/interfaces/card";

import classes from "./card.module.css";

interface CardProps {
  children: ReactNode;
  variation: CardVariation;
}

export default function Card({ children, variation }: Readonly<CardProps>) {
  const style =
    variation === CardVariation.detail ? classes.cardDetail : classes.cardRow;
  return <section className={`${classes.card} ${style}`}>{children}</section>;
}

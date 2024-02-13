import React, { ReactNode } from "react";

import classes from "./card-title.module.css";

interface CardTitleProps {
  children: ReactNode;
}

export default function CardTitle({ children }: Readonly<CardTitleProps>) {
  return <div className={classes.cardTitle}>{children}</div>;
}

import React, { ReactNode } from "react";

import classes from "./card-body.module.css";

interface CardBodyProps {
  children: ReactNode;
}

export default function CardBody({ children }: Readonly<CardBodyProps>) {
  return <div className={classes.cardBody}>{children}</div>;
}

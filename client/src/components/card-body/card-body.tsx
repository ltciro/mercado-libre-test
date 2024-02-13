import React, { ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}

export default function CardBody({ children }: Readonly<CardBodyProps>) {
  return <div>{children}</div>;
}

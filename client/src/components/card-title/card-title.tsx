import React, { ReactNode } from "react";

interface CardTitleProps {
  children: ReactNode;
}

export default function CardTitle({ children }: Readonly<CardTitleProps>) {
  return <div>{children}</div>;
}

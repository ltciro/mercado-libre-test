import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: Readonly<CardProps>) {
  return <section>{children}</section>;
}

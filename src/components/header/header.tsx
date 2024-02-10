import React, { ReactNode } from "react";

import classes from "./header.module.css";

interface IHeader {
  children: ReactNode;
}

export function Header({ children }: Readonly<IHeader>) {
  return (
    <header role="banner" className={classes.header}>
      {children}
    </header>
  );
}

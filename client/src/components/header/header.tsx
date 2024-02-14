import classes from "./header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: Readonly<HeaderProps>) {
  return (
    <header role="banner" className={classes.header}>
      {children}
    </header>
  );
}

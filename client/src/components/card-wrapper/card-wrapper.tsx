import classes from "./card-wrapper.module.css";

interface CardWrapperProps {
  children: React.ReactNode;
}

export default function CardWrapper({ children }: Readonly<CardWrapperProps>) {
  return <section className={classes.cardWrapper}>{children}</section>;
}

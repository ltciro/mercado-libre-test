import classes from "./card-actions.module.css";

interface CardActionsProps {
  button: button;
}

interface button {
  text: string;
}

export default function CardActions({ button }: Readonly<CardActionsProps>) {
  return (
    <div className={classes.cardActions}>
      <button className={classes.cardButton}>{button.text}</button>
    </div>
  );
}

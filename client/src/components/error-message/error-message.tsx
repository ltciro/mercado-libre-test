import { ResultMessage } from "@meli/shared/interfaces/fetch";
import classes from "./error-message.module.css";

interface ErrorMessageProps {
  message?: ResultMessage;
}

export default function ErrorMessage({ message }: Readonly<ErrorMessageProps>) {
  return (
    <div className={classes.message}>
      <h2>{message?.es ?? "Por favor intenta de nuevo."}</h2>
    </div>
  );
}

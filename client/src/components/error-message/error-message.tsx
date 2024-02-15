import { ResultMessage } from "@meli/shared/interfaces/fetch";

interface ErrorMessageProps {
  message?: ResultMessage;
}

export default function ErrorMessage({ message }: Readonly<ErrorMessageProps>) {
  return (
    <div className="center-message-page">
      <h2>{message?.es ?? "Por favor intenta de nuevo."}</h2>
    </div>
  );
}

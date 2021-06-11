import React from "react";

import "./error-message.scss";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="error">
      <p className="error__text">{message}</p>
    </div>
  );
};

export default ErrorMessage;

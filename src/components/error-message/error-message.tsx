import React from "react";

import "./error-message.scss";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="form-error">
      <p className="form-error__text">{message}</p>
    </div>
  );
};

export default ErrorMessage;

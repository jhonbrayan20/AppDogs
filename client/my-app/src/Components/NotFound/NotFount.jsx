import React from "react";
import Styles from "./NotFount.module.css"

function NotFount({message,code,status,statusText,data
}) {
  if (message) {
    return (
      <div className={Styles.NotFountContainer}>
        <h2>{code}</h2>
        <p>
          "Lo sentimos, estamos experimentando problemas técnicos en este
          momento. Por favor, inténtalo de nuevo más tarde."
        </p>
      </div>
    );
  }
  if (status===404) {
    return (
      <div className={Styles.NotFountContainer}>
        <h2>{statusText}</h2>
        <p>{data.error}</p>
        <p>{status}</p>
      </div>
    );
  }
}

export default NotFount;

import React from "react";
import "../assets/styles/componets/NotFound.css";
import { authorize } from "../services/AuthToken";

const NotFound = (props) => {
  const login = () => {
    authorize();
  };

  return (
    <div className="not-found">
      <h1>Lo sentimos algo salio mal</h1>
      <h3>
        <span role="img" aria-label="emoji">
          ❌{404}😱
        </span>
      </h3>
      <button className="btn__not-found" onClick={login}>
        Volver a cargar
      </button>
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import styles from "./Cheked.module.css";

function Cheked() {
  return (
    <div className={styles.ChekedContainer}>
      <div>
        <p>Se ha enviado correctamente su información</p>
      </div>
      <div>
        <AiFillCheckCircle
          style={{ color: "green", height: "30px", width: "30px" }}
        />
      </div>
      <div>
        <Link to={"/Home"}>
          <button>Regresar a Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Cheked;

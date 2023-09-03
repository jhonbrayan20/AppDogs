import React from "react";
import styles from "./Loader.module.css";
import {GiSittingDog} from "react-icons/gi";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <GiSittingDog style={{color:"#FF9741"}}></GiSittingDog>
      </div>
      <div>
        <p>Por favor espere...</p>
      </div>
    </div>
  );
}

export default Loader;

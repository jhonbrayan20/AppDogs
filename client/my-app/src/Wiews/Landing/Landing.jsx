import React from "react";
import styles from "./Landing.module.css";
import video from "../../Components/Utils/dog.mp4";
import { Link } from "react-router-dom";

function Landing(props) {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.videoContainer}>
        <video muted loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={styles.welcome}>
        <div>
          <h1>App Dogs</h1>
        </div>
        <div>
          <small>
            Proyecto individual de:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jhon-brayan-huanacuni-condori-6aa298267/"
            >
              Jhon Brayan
            </a>{" "}
            en Henry Bootcamp
          </small>
        </div>
        <div>
          <Link to="/home" className={styles.button}>
            <button>Entrar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;

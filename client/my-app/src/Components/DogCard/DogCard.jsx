import React from "react";
import { Link } from "react-router-dom";
import styles from "./DogCard.module.css";
import defaultDog from "../Utils/defaultDog.jpg";

function DogCard({
  Temperamentos,
  image,
  name,
  weight_metric_max,
  weight_metric_min,
  id,
}) {
  return (
    <Link to={`/Dogs/${id}`} className={styles.link}>
      <div className={styles.cardContainer}>
        {image ? (
          <img src={image} alt="Dog" />
        ) : (
          <img src={defaultDog} alt="" />
        )}
        <section>
          <p>
            <b>Nombre:</b>
            {name}
          </p>
          <p>
            <b>Peso minimo(Kg): </b>
            {weight_metric_min}
          </p>
          <p>
            <b>Peso maximo(Kg): </b>
            {weight_metric_max}
          </p>
          <p>
            <b>Temperamentos: </b>
            {Temperamentos.join(", ")}
          </p>
        </section>
      </div>
    </Link>
  );
}

export default DogCard;

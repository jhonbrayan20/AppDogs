import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogsID } from "../../Redux/Actions";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Components/Footer/Footer";
import imageNotFound from "../../Components/Utils/ImagenNotFount.jpg";
import imagenDefault from "../../Components/Utils/defaultDog.jpg";
import style from "./Detail.module.css";

function Detail() {
  const breedDetail = useSelector((state) => state.breedDetail);
  const dispach = useDispatch();
  const { id } = useParams();
  const {
    Temperamentos,
    image,
    name,
    weight_metric_max,
    weight_metric_min,
    height_metric_max,
    height_metric_min,
    life_span_years_max,
    life_span_years_min,
    code,
    message,
  } = breedDetail;

  useEffect(() => {
    dispach(getDogsID(id));
  }, [dispach, id]);

  if (!message && !name) {
    return (
      <div className={style.detailContainer}>
        <NavBar />
        <Loader />
        <Footer />
      </div>
    );
  }
  if (message) {
    return (
      <div className={style.detailContainer}>
        <NavBar />
        <div>
          <h2>Not Fount</h2>
          <img src={imageNotFound} alt="" />
          <small>{`Error: ${code}`}</small>
          <p>{message}</p>
          <div>
            <Link to={"/Home"}>Back Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.detailContainer}>
      <div className={style.cardDetail}>
        <div className={style.detail}>
          <div className={style.caratula}>
            <div>
              <img src={image ? image : imagenDefault} alt="" />
            </div>
            <div>
              <h2>{name}</h2>
            </div>
          </div>
          <div className={style.descripcion}>
            <div>
              <p>
                <b>Peso maximo(Kg): </b>
                {weight_metric_max}
              </p>

              <p>
                <b>Peso minimo(Kg): </b>
                {weight_metric_min}
              </p>
            </div>
            <div>
              <p>
                <b>Altura maxima(m): </b>
                {height_metric_max}
              </p>

              <p>
                <b>Altura minima(m): </b>
                {height_metric_min}
              </p>
            </div>
            <div>
              <p>
                <b>Años de vida maximo: </b>
                {life_span_years_max}
              </p>

              <p>
                <b>Años de vida minimo: </b>
                {life_span_years_min}
              </p>
            </div>
          </div>
        </div>
        <div className={style.temp}>
          <p>
            <b>Temperamentos: </b>
            {Temperamentos.map((e, index) => (
              <ul>
                <Link to={`/DogsTemperamentos/${e.name}`}>
                  <li>{e.name}</li>
                </Link>
              </ul>
            ))}
          </p>
        </div>
      </div>
      <Link to={"/Home"}>
        <button>Back Home</button>{" "}
      </Link>
    </div>
  );
}

export default Detail;

import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTemperaments, posForm } from "../../Redux/Actions";
import { validation } from "./FormValidate/FormValidate";
import { customStyles } from "./FormValidate/CustomEstyles";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cheked from "../Cheked/Cheked";
import NotFount from "../NotFound/NotFount";

function Form() {
  const dispach = useDispatch();
  const postForm=useSelector(state=>state.postForm)
  useEffect(() => {
    dispach(GetAllTemperaments());
  }, [dispach]);

  const temperaments = useSelector((state) => state.temperaments);

  const [form, setForm] = useState({
    name: "",
    height_metric_min: 0,
    height_metric_max: 0,
    weight_metric_min: 0,
    weight_metric_max: 0,
    life_span_years_min: 0,
    life_span_years_max: 0,
    image: "",
    Temperamentos: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span_years: "",
  });

  const handerlChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" || name === "image") {
      setForm({ ...form, [name]: value });
    } else {
      const valor = value.split("-");
      switch (name) {
        case "height":
          setForm({
            ...form,
            height_metric_min: Number(valor[0]),
            height_metric_max: Number(valor[1]),
          });
          break;

        case "weight":
          setForm({
            ...form,
            weight_metric_min: Number(valor[0]),
            weight_metric_max: Number(valor[1]),
          });
          break;

        case "life_span_years":
          setForm({
            ...form,
            life_span_years_min: Number(valor[0]),
            life_span_years_max: Number(valor[1]),
          });
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    setErrors(validation(form));
  }, [form]);

  //   Formatear las opciones para react-select
  const selectOptions = temperaments.map((temp) => ({
    value: temp,
    label: temp,
  }));
  const handerlTemperaments = (selectedOptions) => {
    const selectedTemperaments = selectedOptions.map((option) => option.value);
    setForm({ ...form, Temperamentos: selectedTemperaments });
  };

  const handerlSubmit = (e) => {
    e.preventDefault();
    const arrayErrors = [];
    for (const key in errors) {
      arrayErrors.push(key);
    }
    if (arrayErrors.length !== 0) {
      alert("No se puede enviar Datos con errores");
    } else {
      dispach(posForm(form))

    }
  };

  if (postForm.message) {
    return (
      <div>
        <Cheked />
      </div>
    );
  }
  if(!postForm.message && postForm.length!==0){
    return(
      <div>
        <NotFount data={postForm.data} status={postForm.status} statusText={postForm.statusText}/>
      </div>
    )
  }
  if(postForm.length===0){

    return (
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <form>
            <div>
              <label htmlFor="">Nombre: </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handerlChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
  
            <div>
              <label htmlFor="">Altura(m): </label>
              <input
                placeholder="min-max"
                type="text"
                name="height"
                onChange={handerlChange}
              />
              {errors.height && <p>{errors.height}</p>}
            </div>
  
            <div>
              <label htmlFor="">Peso(Kg): </label>
              <input
                placeholder="min-max"
                type="text"
                name="weight"
                onChange={handerlChange}
              />
              {errors.weight && <p>{errors.weight}</p>}
            </div>
  
            <div>
              <label htmlFor="">Años de vida: </label>
              <input
                placeholder="min-max"
                type="text"
                name="life_span_years"
                onChange={handerlChange}
              />
              {errors.life_span_years && <p>{errors.life_span_years}</p>}
            </div>
            <div>
              <label htmlFor="">Imagen(Url): </label>
              <input
                type="text"
                name="image"
                value={form.image}
                onChange={handerlChange}
              />
              {errors.image && <p>{errors.image}</p>}
            </div>
          </form>
        </div>
  
        <div className={styles.containerTemp}>
          <form>
            <div>
              <label htmlFor="temp">Temperamentos: </label>
              <Select
                id="temp"
                isMulti
                options={selectOptions}
                styles={customStyles}
                onChange={handerlTemperaments}
              />
            </div>
          </form>
        </div>
        <div className={styles.button}>
          <div>
            <button
              onClick={handerlSubmit}
              title="Haz click para enviar tu información"
            >
              SUBMIT
            </button>
          </div>
          <div>
            <Link to={"/Home"}>
              <button title="Haz click para regresar a Home">Back Home</button>{" "}
            </Link>
          </div>
        </div>
  
        <Footer></Footer>
      </div>
    );
  }
}

export default Form;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilteredBreeds } from "../../Redux/Actions";
import DogCard from "../../Components/DogCard/DogCard";
import Pagination from "../../Components/Pagination/Pagination";
import style from "./LisBreeds.module.css";
import Loader from "../../Components/Loader/Loader";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

function LisBreeds() {
  const temperamento = useParams();
  const dispach = useDispatch();

  useEffect(() => {
    dispach(getFilteredBreeds(temperamento.temperamento, "LisBreeds"));
  }, [dispach, temperamento]);

  const filterBreedsTemp = useSelector((state) => state.filterBreedsTemp);

  const [pag, setPag] = useState(1);
  const [perPag, setPerPag] = useState(8);

  if (!filterBreedsTemp.length) {
    return (
      <div className={style.lisContainer}>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div className={style.lisContainer}>
      <div>
        <NavBar></NavBar>
      </div>
      <div className={style.lisWindom}>
        <div>
          <Pagination
            breeds={filterBreedsTemp}
            maxPag={Math.ceil(filterBreedsTemp.length / perPag)}
            pag={pag}
            setPag={setPag}
          />
        </div>
        <div className={style.container}>
          {filterBreedsTemp
            .slice((pag - 1) * perPag, (pag - 1) * perPag + perPag)
            .map((e, index) => (
              <DogCard
                key={index}
                id={e.id}
                name={e.name}
                image={e.image}
                weight_metric_max={e.weight_metric_max}
                weight_metric_min={e.weight_metric_min}
                Temperamentos={e.Temperamentos.map((e) => e.name)}
              ></DogCard>
            ))}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default LisBreeds;

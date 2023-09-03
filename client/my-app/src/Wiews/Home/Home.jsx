import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import DogCard from "../../Components/DogCard/DogCard";
import Pagination from "../../Components/Pagination/Pagination";
import styles from "./Home.module.css";
import { GetAllTemperaments } from "../../Redux/Actions";
import Options from "../../Components/Options/Options";
import NotFount from "../../Components/NotFound/NotFount";
import { setinput } from "../../Redux/Actions";
function Home() {
  const breeds = useSelector((state) => state.breeds);
  const [pag, setPag] = useState(1);
  const [perPag, setPerPag] = useState(8);
  const { message, status, code, statusText } = breeds;
  const dispach = useDispatch();

  useEffect(() => {
    dispach(GetAllTemperaments());
  }, [dispach]);

  useEffect(()=>{
    dispach(setinput(1))
    setPag(1)
  },[dispach,breeds])

  if (!message && !breeds.length&&!status) {
    return (
      <div>
        <NavBar></NavBar>
        <Loader />
      </div>
    );
  }

  if (message||statusText) {
    return (
      <div>
        <NotFount
          status={status}
          message={message}
          code={code}
          statusText={statusText}
        />
      </div>
    );
  }
  const render = (
    <div className={styles.homeContainer}>
      <div className={styles.NavBar}>
        <NavBar />
      </div>
      <Options breeds={breeds}></Options>
      <div className={styles.optionContainer}>
        <Pagination
          breeds={breeds}
          maxPag={Math.ceil(breeds.length / perPag)}
          pag={pag}
          setPag={setPag}
        />
      </div>
      <div className={styles.cardContainer}>
        {breeds
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
      <Footer />
    </div>
  );
  if (breeds.length > 0) {
    return render;
  }
}

export default Home;

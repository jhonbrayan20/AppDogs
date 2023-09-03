import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DogCard from "../../Components/DogCard/DogCard";
import Pagination from "../../Components/Pagination/Pagination";
import Style from "./Search.module.css";
import {setinput } from "../../Redux/Actions";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Loader from "../../Components/Loader/Loader";


function Search() {
  const foundByName = useSelector((state) => state.foundByName);
  const [pag, setPag] = useState(1);
  const [perPag, setPerPag] = useState(8);
  const dispach = useDispatch();
//   useEffect(() => {
//     dispach(clearSearch());
//   }, [dispach]);
  useEffect(()=>{
    dispach(setinput(1))
    setPag(1)
  },[dispach,foundByName])

  
  if(!foundByName.message && foundByName.length===0){
      return (
          <div className={Style.loader}>
          <NavBar />
          <Loader />
          <Footer />
        </div>
      );
    }
  return (
    <div>
      <NavBar></NavBar>
      <div className={Style.searchContainer}>
        <div>
          <Pagination
            breeds={foundByName}
            maxPag={Math.ceil(foundByName.length / perPag)}
            pag={pag}
            setPag={setPag}
          ></Pagination>
        </div>
        <div className={Style.cardsSearch}>
          {foundByName
            .slice((pag - 1) * perPag, (pag - 1) * perPag + perPag)
            .map((e, index) => {
              return (
                <DogCard
                  key={index}
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  weight_metric_max={e.weight_metric_max}
                  weight_metric_min={e.weight_metric_min}
                  Temperamentos={e.Temperamentos.map((e) => e.name)}
                ></DogCard>
              );
            })}
        </div>
        <div>
            <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Search;

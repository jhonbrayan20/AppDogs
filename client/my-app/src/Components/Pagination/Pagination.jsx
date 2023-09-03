import React from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import styles from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setinput } from "../../Redux/Actions";

function Pagination({ maxPag, pag, setPag }) {
  const input=useSelector(state=>state.input)
  const dispach=useDispatch()
  const onClickPrev = (e) => {
    dispach(setinput(input - 1));
    setPag(pag - 1);
  };
  const onClickNext = (e) => {
    dispach(setinput(input + 1));
    setPag(pag + 1);
  };
  const handerlChange = (e) => {
    const { value } = e.target;
    if (isNaN(Number(value))) {
      dispach(setinput(1));
    } else {
      dispach(setinput(Number(value)));
    }
  };
  const handerlOnkeydown = (e) => {
    const { keyCode } = e;
    const { value } = e.target;
    if (keyCode === 13) {
      if (
        parseInt(value) < 1 ||
        parseInt(value) > maxPag ||
        isNaN(parseInt(value))
      ) {
        dispach(setinput(1));
        setPag(1);
      } else {
        setPag(parseInt(value));
      }
    }
  };
  // variables:paginas,totalDecartas,
  // constantes:DogsPorPagina(8),
  return (
    <div>
      <div className={styles.container}>
        <div>
          <button onClick={onClickPrev} disabled={input === 1 || input === 0}>
            <GrLinkPrevious />
          </button>
        </div>
        <div>
          <input
            onChange={handerlChange}
            value={input}
            onKeyDown={handerlOnkeydown}
          ></input>
        </div>
        <div>
          <p>of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{maxPag} </p>
        </div>
        <div>
          <button onClick={onClickNext} disabled={input === maxPag}>
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

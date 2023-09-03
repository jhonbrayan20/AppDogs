import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { GetAllDogs, searchByName } from "../../Redux/Actions";
import { GiSittingDog } from "react-icons/gi";
import { BsSearchHeartFill } from "react-icons/bs";

function NavBar() {
  const dispach = useDispatch();
  const inputRef = useRef();
  const linkRef=useRef();
  const [input, setInput] = useState();
  const breeds = useSelector((state) => state.breeds);

  let id = breeds.length
    ? breeds[Math.ceil(Math.random() * (breeds.length - 1))].id
    : 1;

  const handerlOnchange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handerlOnKeyDown = (e) => {
    const { keyCode } = e;
    if (keyCode === 13) {
      dispach(searchByName(inputRef.current.value));
      linkRef.current.click()
      inputRef.current.value = "";
      
    }
  };

  const handerOnclick = (e) => {
    dispach(searchByName(inputRef.current.value));
    inputRef.current.value = "";
  };
  // cuando se monta el componente se depacha todos los dogs
  useEffect(() => {
    dispach(GetAllDogs());
  }, [dispach]);

  return (
    <div className={styles.Navbarcontainer}>
      <div>
        <Link to={"/"}>
          <GiSittingDog className={styles.dog} title="Inicio"></GiSittingDog>
        </Link>
      </div>
      <div>
        <Link to={"/Create"}>
          <button>Crear</button>
        </Link>
      </div>
      <div>
        <Link to={"/Home"}>
          <button>Hogar</button>
        </Link>
      </div>
      <div>
        <Link to={`/Dogs/${id}`}>
          <button>Carta magica</button>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <div>
          <input
            placeholder="Buscar por nombre"
            ref={inputRef}
            onChange={handerlOnchange}
            onKeyDown={handerlOnKeyDown}
          ></input>
        </div>
        <div>
          <Link
            to="/search"
            style={{ pointerEvents: input === "" ? "none" : "auto" }}
            tabIndex={0}
            onKeyDown={handerlOnKeyDown}
            ref={linkRef}
          >
            <BsSearchHeartFill
              onClick={handerOnclick}
              style={{ height: "25px", width: "25px", color: "DA6606" }}
              title="Buscar"
            ></BsSearchHeartFill>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

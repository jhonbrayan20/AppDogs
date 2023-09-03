import axios from "axios";
import {
  GET_DOG_ALL,
  GET_DOGS_ID,
  GET_ALL_TEMPERAMENT,
  ORDER_DOGS,
  CLEAR_DETAILS,
  CLEAR_SEARCH,
  GET_FILTERED_BREEDS,
  SEARCH_BY_NAME,
  CLEAR_BREEDS,
  POST_FORM,
  CLEAR_FORM,
  SET_INPUT
} from "./Types";

const URL_GETALLLDOGS = "http://localhost:3001/dogs";

export const GetAllDogs = () => {
  return async (dispach) => {
    try {
      const { data } = await axios(URL_GETALLLDOGS);
      return dispach({
        type: GET_DOG_ALL,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        return dispach({
          type: GET_DOG_ALL,
          payload: error.response,
        });
      }
      return dispach({
        type: GET_DOG_ALL,
        payload: error,
      });
    }
  };
};

export const getDogsID = (id) => {
  return async (dispach) => {
    try {
      const { data } = await axios(`http://localhost:3001/dogs/${id}`);
      return dispach({
        type: GET_DOGS_ID,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        return {
          type: GET_DOGS_ID,
          payload: error.response,
        };
      }
      return dispach({
        type: GET_DOGS_ID,
        payload: error,
      });
    }
  };
};

export const GetAllTemperaments = () => {
  return async (dispach) => {
    try {
      const temperaments = (
        await axios.get("http://localhost:3001/temperaments/")
      ).data;
      return dispach({
        type: GET_ALL_TEMPERAMENT,
        payload: temperaments,
      });
    } catch (error) {
      if (error.response) {
        return {
          type: GET_ALL_TEMPERAMENT,
          payload: error.response,
        };
      }
      return dispach({
        type: GET_ALL_TEMPERAMENT,
        payload: error,
      });
    }
  };
};

export function clearDetails() {
  return {
    type: CLEAR_DETAILS,
    payload: "",
  };
}

export function clearBreeds() {
  return {
    type: CLEAR_BREEDS,
    payload: "",
  };
}

export function clearSearch() {
  return function (dispatch) {
    return dispatch({
      type: CLEAR_SEARCH,
      payload: [],
    });
  };
}

export function getFilteredBreeds(temperament, component) {
  return async function (dispatch) {
    try {
      const res = await axios.get(URL_GETALLLDOGS);
      // const res ={ data: breeds}
      let filteredResp = [];
      if (temperament) {
        res.data.forEach((e) => {
          e.Temperamentos.forEach((t) => {
            if (t.name === temperament) filteredResp.push(e);
          });
        });
      } else {
        filteredResp = res.data;
      }

      return dispatch({
        type: GET_FILTERED_BREEDS,
        payload: filteredResp,
        source: component,
      });
    } catch (error) {
      return dispatch({
        type: GET_FILTERED_BREEDS,
        payload: error.response,
        source: component,
      });
    }
  };
}

export const orderDogs = (value, data) => {
  return function (dispatch) {
    try {
      if (value === "name_asc")
        data.sort((a, b) => a.name.localeCompare(b.name));
      else if (value === "name_desc")
        data.sort((a, b) => b.name.localeCompare(a.name));
      else if (value === "weight_asc") {
        data.sort((a, b) => a.weight_metric_min - b.weight_metric_min);
      } else {
        data.sort((a, b) => b.weight_metric_min - a.weight_metric_min);
      }

      return dispatch({
        type: ORDER_DOGS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: ORDER_DOGS,
        payload: error.response,
      });
    }
  };
};

export function searchByName(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      // console.log(res.data)
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error.response)
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: error.response,
      });
    }
  };
}
export function posForm(form) {
  return async function (dispatch) {
    try {
      const res = await axios.post("http://localhost:3001/dogs", form);
      return dispatch({
        type: POST_FORM,
        payload: res.data,
      });
    } catch (error) {
      if (error.response) {
        return dispatch({
          type: POST_FORM,
          payload: error.response,
        });
      }
      return dispatch({
        type: POST_FORM,
        payload: error,
      });
    }
  };
}
export function clearForm() {
  return function (dispatch) {
    return dispatch({
      type: CLEAR_FORM,
      payload: "",
    });
  };
}

export function setinput(pag){
  return function (dispatch){
    return dispatch({
      type:SET_INPUT,
      payload:pag
    })
  }
}
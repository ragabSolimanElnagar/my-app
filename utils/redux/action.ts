import axios from "axios";
import {
  DATA_RESET,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./types";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data: any) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const resetStore = () => {
  return {
    type: DATA_RESET,
  };
};

export const fetchDataFailure = (error: Error) => {
  return {
    type: FETCH_DATA_FAILURE,
    error: error.message,
  };
};

export const fetchData = (selectedValue: string, searchValue: string) => {
  return (dispatch: any) => {
    dispatch(fetchDataRequest);
    axios
      .get(`https://api.github.com/search/${selectedValue}?q=${searchValue}`)
      .then((response: any) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error: any) => {
        dispatch(fetchDataFailure(error));
      });
  };
};

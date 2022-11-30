import {
  DATA_RESET,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./types";

export const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.error.message,
      };
    case DATA_RESET:
      return {
        loading: false,
        data: [],
        error: "",
      };
    default:
      return state;
  }
};

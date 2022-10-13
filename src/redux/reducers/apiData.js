import { GET_DATA, GET_QUOTE, GET_INPUT, SET_LOADING } from "../actions/actionType";

const initialState = {
  wordData:  [],
  quoteData: [],
  input: '',
  loading: false,
};

const apiData = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA:
      return { ...state, wordData: action.data };
    case GET_QUOTE:
      return { ...state, quoteData: action.phrase };
    case GET_INPUT:
      return { ...state, input: action.input };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  };
};

export default apiData;

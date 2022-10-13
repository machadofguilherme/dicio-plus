import { GET_DATA, GET_QUOTE, GET_INPUT, SET_LOADING } from "./actionType";

const getData = (data) => ({
  type: GET_DATA,
  data,
})

const getPhrase = (phrase) => ({
  type: GET_QUOTE,
  phrase,
})

export const saveInput = (input) => ({
  type: GET_INPUT,
  input,
})

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
})

export const requisition = (input) => {
  const wordUrl = `https://significado.herokuapp.com/v2/${input}`;
  const phraseUrl = `https://significado.herokuapp.com/v2/frases/${input}`;

  const request = async (dispatch) => {
    dispatch(setLoading(false));

    const requestWord = await fetch(wordUrl);
    const requestPhrase = await fetch(phraseUrl);

    const jsonWord = await requestWord.json();
    const jsonPhrase = await requestPhrase.json();

    dispatch(getData(jsonWord));
    dispatch(getPhrase(jsonPhrase));

    setTimeout(() => dispatch(setLoading(true)), 1500);
  }
  
  return request;
}
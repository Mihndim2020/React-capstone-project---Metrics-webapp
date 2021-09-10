// import axios from 'axios';
import dayjs from 'dayjs';

const GET_DATA = 'covid/covidSlice/GET_DATA';
const GET_DATA_SUCCESS = 'covid/covidSlice/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'covid/covidSlice/GET_DATA_ERR';

// const today = dayjs().format('YYYY-MM-DD');
const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

const covidUrl = `https://api.covid19tracking.narrativa.com/api/${today}`;

const getCovid = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await fetch(covidUrl);
  const covid = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, covid });
};
console.log(getCovid());

export {
  getCovid as default,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  today,
};

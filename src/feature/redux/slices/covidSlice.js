import axios from 'axios';
import dayjs from 'dayjs';

const GET_DATA = 'covidnewsapp/covidSlice/GET_DATA';
const GET_DATA_SUCCESS = 'covidnewsapp/covidSlice/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'covidnewsapp/covidSlice/GET_DATA_ERR';

const today = dayjs().format('YYYY-MM-DD');

const url = `https://api.covid19tracking.narrativa.com/api/${today}`;

const getCovid = async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await axios.get(url);
  const covid = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, covid });
  // const globalCases = [];
  // Object.entries(response.data.dates[today].countries).forEach((key) => {
  //   globalCases.push({
  //     id: key[0],
  //     name: key[0],
  //     confirmed: key[1].today_confirmed,
  //     deaths: key[1].today_deaths,
  //   });
  // });
  // console.log(globalCases);
  // return globalCases;
};


// const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

// const covidURL = `https://api.covid19tracking.narrativa.com/api/${today}`;

// // const getCovid = () => async (dispatch) => {
// //   dispatch({ type: GET_COVID });
// //   const response = await fetch(covidURL);
// //   const covid = await response.json();
// //   return dispatch({ type: GET_COVID_SUCCESS, covid });
// };

export {
  getCovid as default,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  today,
};

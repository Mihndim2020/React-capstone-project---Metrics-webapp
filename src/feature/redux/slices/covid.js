import { getGlobalCovid, getCountryCovid } from './covidSlice';

const GET_GLOBAL_COVID = 'covidnewsapp/covid/GET_GLOBAL_COVID';
const GET_COUNTRY_COVID = 'covidnewsapp/covid/GET_COUNTRY_COVID';

const getGlobalCovidAction = () => async (dispatch) => {
  const global = await getGlobalCovid();

  dispatch({
    type: GET_GLOBAL_COVID,
    payload: global,
  });
};

const getCountryCovidAction = () => async (dispatch) => {
  const country = await getCountryCovid();

  dispatch({
    type: GET_COUNTRY_COVID,
    payload: country,
  });
};

const covidReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GLOBAL_COVID:
      return [...state, ...action.payload];
    case GET_COUNTRY_COVID:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export { getGlobalCovidAction, getCountryCovidAction, covidReducer };

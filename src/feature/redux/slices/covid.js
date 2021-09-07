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
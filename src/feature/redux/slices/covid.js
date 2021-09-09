import getCovid, {
  GET_DATA,
  // GET_DATA_SUCCESS, GET_DATA_ERROR, today,
} from './covidSlice';

const getCovidAction = () => async (dispatch) => {
  const global = await getCovid();

  dispatch({
    type: GET_DATA,
    payload: global,
  });
};

// const getCountryCovidAction = () => async (dispatch) => {
//   const country = await getCountryCovid();

//   dispatch({
//     type: GET_COUNTRY_COVID,
//     payload: country,
//   });
// };

// const initialState = {
//   global: [],
// };

const covidReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export {
  covidReducer as default,
  getCovidAction,
};

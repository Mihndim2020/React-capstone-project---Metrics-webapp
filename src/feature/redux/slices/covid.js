import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './covidSlice';

// const getCovidAction = () => async (dispatch) => {
//   const global = await getCovid();

//   dispatch({
//     type: GET_DATA,
//     payload: global,
//   });
// };

const initialState = {
  global: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, pending: true };
    case GET_DATA_SUCCESS:
      {
        const global = [];
        Object.entries(action.covid.dates[today].countries).forEach((key) => {
          global.push({
            name: key,
            confirmed: key[1].today_confirmed,
            deaths: key[1].today_deaths,
          });
        });
        return { ...state, pending: false, global };
      }
    case GET_DATA_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
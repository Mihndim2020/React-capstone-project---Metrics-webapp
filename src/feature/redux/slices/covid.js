import {
  GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR, today,
} from './covidSlice';

const initialState = {
  covidGlobal: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, pending: true };
    case GET_DATA_SUCCESS:
    {
      const covidGlobal = [];
      Object.entries(action.covid.dates[today].countries).forEach((key) => {
        covidGlobal.push({
          name: key,
          confirmed: key[1].today_confirmed,
          deaths: key[1].today_deaths,
        });
      });
      return { ...state, pending: false, covidGlobal };
    }
    case GET_DATA_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;

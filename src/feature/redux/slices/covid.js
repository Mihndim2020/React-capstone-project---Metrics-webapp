import getCovid, { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './covidSlice';

const getCovidAction = () => async (dispatch) => {
  const global = await getCovid();

  dispatch({
    type: GET_DATA,
    payload: global,
  });
};

const covidReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, pending: true };
    case GET_DATA_SUCCESS:
      return [...state, ...action.payload];
    case GET_DATA_ERROR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export {
  covidReducer as default,
  getCovidAction,
};

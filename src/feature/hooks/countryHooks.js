import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCountryCovidAction from '../redux/slices/covid';

const countryHooks = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    if (!country.length) {
      dispatch(getCountryCovidAction());
    }
  }, []);
};

export default countryHooks;

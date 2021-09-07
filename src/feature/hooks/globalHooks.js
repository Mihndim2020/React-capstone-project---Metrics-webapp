import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGlobalCovidAction from '../redux/slices/covid';

const globalHooks = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global);

  useEffect(() => {
    if (!global.length) {
      dispatch(getGlobalCovidAction());
    }
  }, []);
};

export default globalHooks;

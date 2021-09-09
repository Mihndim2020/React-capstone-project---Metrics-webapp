import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import getCovid from '../../redux/slices/covidSlice';
import { getCovidAction } from '../../redux/slices/covid';
import CountryInfo from './countryInfo';

function GlobalInfo() {
  const globalComponent = [];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!global.length) {
      dispatch(getCovidAction());
    }
  }, []);

  const globalInfo = useSelector((state) => state.global);
  console.log(globalInfo);
  const keys = Object.keys(globalInfo);
  console.log(keys);

  Object.entries(globalInfo).forEach((info) => globalComponent.push(
    <CountryInfo
      key={info.id}
      id={info.id}
      name={info.name}
      cases={info.cases}
      death={info.death}
    />,
  ));

  console.log(globalComponent);

  return (
    <div className="my-5">
      { globalComponent }
    </div>
  );
}

export default GlobalInfo;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
// import getCovid from '../../redux/slices/covidSlice';
import { getCovidAction } from '../../redux/slices/covid';
// import CountryInfo from './countryInfo';
import Header from './heroArea';
import Filter from './filterInput';

function GlobalInfo() {
  // const globalComponent = [];

  const dispatch = useDispatch();
  useEffect(() => {
    if (!global.length) {
      dispatch(getCovidAction());
    }
  }, []);

  const globalInfo = useSelector((state) => state.global);
  // console.log(globalInfo);
  // const keys = Object.keys(globalInfo);
  // console.log(keys);

  // Object.entries(globalInfo).forEach((info) => globalComponent.push(
  //   <CountryInfo
  //     key={info.id}
  //     id={info.id}
  //     name={info.name}
  //     cases={info.cases}
  //     death={info.death}
  //   />,
  // ));

  // console.log(globalComponent);

  // return (
  //   <div className="my-5">
  //     { globalComponent }
  //   </div>
  // );

  const { url } = useRouteMatch();
  const [minDeaths, setMinDeaths] = useState(0);

  const handleMinNumberOfDeaths = (e) => {
    setMinDeaths(e.target.value);
  };

  const countriesList = globalInfo.map((country) => (
    <Link
      key={country.name[0]}
      href="/#"
      to={`${url}${country.name[0].toLowerCase()}`}
      className="country-card"
    >
      <div>
        <div key={country.name[0]} id={country.name[0]} className="country-link">
          <h2 className="country-name">{country.name[0]}</h2>
          <p className="cases-confirmed">
            TOTAL CASES CONFIRMED:
            {' '}
            {country.confirmed}
          </p>
          <p className="deaths">
            TOTAL DEATHS:
            {' '}
            {country.deaths}
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
      <Header backButtonTitle="< App" title="COVID data by Countries" />
      <Filter value={minDeaths} handler={handleMinNumberOfDeaths} />
      <div className="countries-container">
        { countriesList }
      </div>
    </>
  );
}

export default GlobalInfo;

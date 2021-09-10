// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
// import { getCovidAction } from '../../redux/slices/covid';
import Header from './heroArea';
import Filter from './filterInput';

function GlobalInfo() {
  // const dispatch = useDispatch();
  // useEffect(async () => {
  //   if (!global.length) {
  //     await dispatch(getCovidAction());
  //   }
  // }, []);

  const { url } = useRouteMatch();
  const [minDeaths, setMinDeaths] = useState(100);

  const handleMinNumberOfDeaths = (e) => {
    setMinDeaths(e.target.value);
  };

  const countries = useSelector((state) => state.covidReducer.covidGlobal);
  console.log(countries);
  // const global = [{
  //   id: 'Afghanistan',
  //   name: 'Afghanistan',
  //   confirmed: 153736,
  //   deaths: 7151,
  // },
  // {
  //   id: 'Albania',
  //   name: 'Albania',
  //   confirmed: 153318,
  //   deaths: 2528,
  // },
  // {
  //   id: 'Algeria',
  //   name: 'Algeria',
  //   confirmed: 198962,
  //   deaths: 5489,
  // },
  // {
  //   id: 'Andorra',
  //   name: 'Andorra',
  //   confirmed: 15070,
  //   deaths: 130,
  // }];

  const arr = [];
  const countriesList = arr.filter((country) => minDeaths < country.deaths)
    .map((country) => (
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

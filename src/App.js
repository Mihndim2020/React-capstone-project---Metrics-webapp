import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getCovid from './feature/redux/slices/covidSlice';
import GlobalInfo from './feature/components/pages/homePage';
import Details from './feature/components/pages/countryInfo';
// import { getCovidAction } from './feature/redux/slices/covid';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getCovid());
  }, []);

  const countries = useSelector((state) => state.covidGlobal);
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

  const routes = arr.map((country) => (
    <Route key={country.name[0]} path={`/${country.name[0].toLowerCase()}`}>
      <Details name={country.name[0]} />
    </Route>
  ));

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <GlobalInfo />
          </Route>
          { routes }
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import './App.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GlobalInfo from './feature/components/pages/homePage';
import Details from './feature/components/pages/countryInfo';
import { getCovidAction } from './feature/redux/slices/covid';

const App = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!global.length) {
      await dispatch(getCovidAction());
    }
  }, []);

  const countries = useSelector((state) => state.global);
  console.log(countries);

  const routes = Object.entries(countries).forEach((country) => (
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

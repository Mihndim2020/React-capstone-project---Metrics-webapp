import axios from 'axios';
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');

const getGlobalCovid = async () => {
  const globalUrl = `https://api.covid19tracking.narrativa.com/api/${today}`;
  const response = await axios.get(globalUrl);
  const { data } = response.dates[today].countries;
  const globalCases = [];
  data.map((globalCase) => globalCases.push(
    {
      id: globalCase.id,
      name: globalCase.name,
      cases: globalCase.today_confirmed,
      deaths: globalCase.today_deaths,
    },
  ));
  return globalCases;
};

const getCountryCovid = async (country) => {
  const countryUrl = `https://api.covid19tracking.narrativa.com/api/${today}/country/${country}`;
  const response = await axios.get(countryUrl);
  const { data } = response.dates[today].countries[country].regions;
  const countryCases = [];
  data.map((countryCase) => countryCases.push({
    id: countryCase.id,
    name: countryCase.name,
    cases: countryCase.today_confirmed,
    deaths: countryCase.today_deaths,
  }));
  return countryCases;
};

export { getGlobalCovid, getCountryCovid };

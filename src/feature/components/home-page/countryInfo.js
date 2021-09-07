import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ name, cases, deaths }) => (
  <div>
    <h2 className="country-name">{name}</h2>
    <p className="cases">{cases}</p>
    <p className="deaths">{deaths}</p>
  </div>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
};

export default BookInfo;
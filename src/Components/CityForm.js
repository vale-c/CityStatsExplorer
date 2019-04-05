
import React from 'react';
import '../App.css';

let btnStyle = {
  backgroundColor: '#4CAF50' , /* Green */
  border: 'none',
  color: 'white',
  marginTop: '1em',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
}

let parStyle = {
  fontSize: '22px',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'Helvetica',
}

const CityForm = (props) => {
  return (
    <form className="searchContainer" onSubmit={props.loadCityData}>
      <p className="lead" style={parStyle}>Enter a city to get all of its info!</p>
      <input type="text" className="form-control" name="city" placeholder="Search for a city..." />
      <button style={btnStyle}>Submit</button>
    </form>
  );
}

export default CityForm;
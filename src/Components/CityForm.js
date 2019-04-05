
import React from 'react';
import '../App.css';

let btnStyle = {
  backgroundColor: "#ea4444" /* Green */,
  border: "none",
  borderRadius: "5px",
  color: "white",
  marginTop: "1em",
  padding: "10px 25px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "1.5rem",
  fontWeight: "700",
  letterSpacing: "0.1rem",
  fontFamily: "Helvetica"
};

let parStyle = {
  fontSize: '22px',
  textAlign: 'center',
  textDecoration: 'none',
  fontFamily: 'Helvetica',
  fontWeight: '400'
}

let searchContainerStyle = {
  textAlign: "center",
  display: "inline-block",
  margin: '1em',
  width: '100%'
};

let inputStyle = {
  borderRadius: '5px',
  fontFamily: 'Helvetica',
  fontWeight: '300',
  fontSIze: '14px'
}

const CityForm = (props) => {
  return (
    <form className="searchContainer" style={searchContainerStyle} onSubmit={props.loadCityData}>
      <p className="lead" style={parStyle}>Enter a city to get all of its info!</p>
      <input type="text" style={inputStyle} className="form-control" name="city" placeholder="Search for a city..." />
      <button style={btnStyle}>Submit</button>
    </form>
  );
}

export default CityForm;

import React from 'react';
import '../App.css';

let divStyle ={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '-2.5em'
}

let inputStyle = {
  borderRadius: '5px',
  padding: '1em',
  fontFamily: 'Roboto Condensed',
  fontSize: '1em'
}

let btnStyle = {
 // backgroundColor: "#ea4444" /* Light Red */,
  border: "none",
  borderRadius: "5px",
  color: "white",
  marginLeft: '0.5em',
  padding: "0.4em 0.7em",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "2rem",
  fontWeight: "400",
  letterSpacing: "0.1rem",
  fontFamily: "VT323"
}

const CityForm = (props) => {
  return (
        <div className="wrapper" style={divStyle}>
            <nav className="navbar">
              <form   className="form-inline" onSubmit={props.loadCityData}>
              <input  type="search"
                      className="form-control"
                      style={inputStyle}
                      name="city"
                      placeholder="Search for a city..." />       
                  <button className="btn btn-primary btn-lg" style={btnStyle}>Submit</button>
              </form>
            </nav>
        </div>
  );
}

export default CityForm;
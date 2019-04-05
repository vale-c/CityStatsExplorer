
import React from 'react';
import '../App.css';

const CityForm = (props) => {
  return (
    <form className="searchContainer" onSubmit={props.loadCityData}>
      <p className="lead slide-in-elliptic-top-fwd">Enter the name of a city to get all of its info!</p>
      <input type="text" className="form-control" name="city" placeholder="Search for a city..." />
      <button>Submit</button>
    </form>
  );
}

export default CityForm;
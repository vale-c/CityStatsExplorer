import React, { Component } from 'react';
import Nav from './Nav.js';
import CityPage from './CityPage.js';
import Dropdown from './Dropdown.js';


let AppStyle = {
  textAlign: 'center'
}

class App extends Component {

  render() {

    return (
      <div className="App" style={AppStyle}>
        <Nav />
        <CityPage />
        <Dropdown options={["Amsterdam", "London", "Paris", "Lisbon"]} />
   
      </div>
    );
  }
}

export default App;

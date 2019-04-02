import React, { Component } from 'react';
import Nav from './Components/Nav.js';
//import Cities from './SubComponents/Cities.js';
import CityPage from './Components/CityPage.js';

let AppStyle = {
  textAlign: 'center'
}

class App extends Component {

  render() {
    return (
      <div className="App" style={AppStyle}>
        <Nav />
        <CityPage />
      </div>
    );
  }
}

export default App;

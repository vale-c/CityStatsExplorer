import React, { Component } from 'react';
import Nav from './Components/Nav';
import CitySearch from './Components/CitySearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <CitySearch/>
      </div>
    );
  }
}

export default App;

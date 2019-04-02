import React, { Component } from 'react';

let appTitle = {
  margin: '1em'
}

class Nav extends Component {
  render() {
    return (
      <div>
        <h3 className="appTitle" style={appTitle}>CITY DATA</h3>
      </div>
    )
  }
}

export default Nav;
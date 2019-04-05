import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

let headerStyle = {
  fontFamily: 'Helvetica',
  fontWeight: '700',
  fontSize: '2em',
  padding: '1em auto',
}
class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand style={headerStyle}>
            City Stats
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;

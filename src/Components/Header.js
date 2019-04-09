import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

let headerStyle = {
  fontFamily: 'VT323',
  fontWeight: '700',
  fontSize: '2em',
}

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand style={headerStyle} className="animated rubberBand slow delay-3s">
              City Stats Explorer
            </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;

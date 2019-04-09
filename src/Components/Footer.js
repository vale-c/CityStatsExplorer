import React from 'react';
import react_logo from "../react-logo.svg";
import teleport_logo from "../teleport_logo.svg";
import '../App.css';

let aStyle = {
  marginTop: '1em',
  padding: '0.5em',
  textAlign: 'center'
}

let bqStyle = {
  border: 'none',
}


class FooterComponent extends React.Component {
  render() {
    return (
      <blockquote className="blockquote text-center" style={bqStyle}>
      <footer className="blockquote-footer">
        <div className='footer-description1'><span className='footer-name-text'>Valentina Calabrese | </span>© <span className='footer-name-text'> 2019 .</span></div>
        <div  className='footer-description2'>Built with 
            <a  href="https://facebook.github.io/react/" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-description"> React</a> 
        <img src={react_logo} className='footer-logo' alt='React Logo' />
                and
        <img src={teleport_logo} className='teleport-logo animated infinite pulse delay-2s' alt='Teleport Logo' />
        's API
        </div>
        <div className='footer-social-media'>
          <a href="http://valentinacalabrese.com" style={aStyle} target="_blank" rel="noopener noreferrer" className="social_links">
              <i id="social-link" className="far fa-window-maximize fa-2x social" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/vale-c" style= {aStyle} target="_blank" rel="noopener noreferrer" className="social_links">
              <i id="social-link" className="fab fa-github-square fa-2x social" aria-hidden="true"></i>
          </a>
          <a href="https://ca.linkedin.com/in/calabresevalentina" style={aStyle} target="_blank" rel="noopener noreferrer" className="social_links">
              <i id="social-link" className="fab fa-linkedin fa-2x social" aria-hidden="true"></i>
          </a>
          <a href="mailto:valent95@gmail.com" style={aStyle} target="_blank" rel="noopener noreferrer" className="social_links">
              <i id="social-em" className="fa fa-envelope-square fa-2x social"></i>
          </a>
        </div>
      </footer>
      </blockquote>
    );
  }
}

export default FooterComponent;
import React, { Component } from 'react';
import Header from './Header.js';
import CityPage from './CityPage.js';
import Scores from './Scores.js';
import SearchInput from './SearchInput.js';

import { Grid, Col, Row } from "react-bootstrap";

import axios from "axios";

let AppStyle = {
  textAlign: 'center'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      categs: [],
      text: ""
    };
  }


  loadScores() {
    axios
      .request({
        method: "get",
        url: `https://api.teleport.org/api/urban_areas/slug:milan/scores/`
      })
      .then(response => {
        this.setState({ scores: response.data }, () => {
          console.log(this.state.scores.categories);
        });
      })
      
      .catch(err => {
        console.log(err);
      });
  }

  handleChange(text) {
    this.setState({ text: text }, this.loadScores());
  }

  componentWillMount() {
    this.loadScores();
  }

  render() {
    return (
      <div className="App" style={AppStyle}>
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput
                onChange={this.handleChange.bind(this)}
                value={this.state.text}
              />
              <CityPage />
              <Scores categs={this.state.categs} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
    
        
export default App;

import React, { Component } from 'react';
import Header from './Header.js';
import CityPage from './CityPage.js';
import Scores from './Scores.js';
import SearchInput from './SearchInput.js';

import { Grid, Col, Row } from "react-bootstrap";

import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.state = {
      scores: [],
      text: '',
      city: 'amsterdam'
    };
  }

  componentWillMount() {
    this.loadScores();
  }

  loadScores() {
    const city = this.state.city;
    axios
      .request({
        method: "get",
        url: `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
      })
      .then(response => {
        this.setState({ scores: response.data.categories }, () => {
          console.log(this.state);
        });
      })

      .catch(err => {
        console.log(err);
      });
  }

  handleChange(text) {
    this.setState({ text: text }, this.loadScores());
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput
                onChange={this.handleChange.bind(this)}
                value={this.state.text}
              />
              <CityPage />

              <Scores scores={this.state.scores} />

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default App;

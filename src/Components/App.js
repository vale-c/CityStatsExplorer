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
      city: 'bali'
    };
  }

  componentWillMount() {
    this.loadScores();
    this.loadImage();
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

  loadImage() {
    const city = this.state.city;
    fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
    .then((response) => {
        if (!response.ok) {
          throw Error('Something went wrong retreiving an image :(');
        }
        return response.json();
    })
    .then((responseData) => {
        this.setState({
        bannerImage: responseData.photos[0].image.web
  });
})
    .catch((error) => {
        console.log(error);
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
              <img src={this.state.bannerImage} style={{width: '100%', 'height': '30vh'}} alt='City Banner'/>
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

import React, { Component } from 'react';
import Header from './Header.js';
import Scores from './Scores.js';
import CityForm from './CityForm';
import { Grid, Col, Row } from "react-bootstrap";

import axios from "axios";


class App extends Component {
  constructor() {
    super();   
    this.state = {
      scores: [],
      text: "",
      activeKey: "1",
      city: '',
      bannerImage: []
    };
    this.handleSelect = this.handleSelect.bind(this);
}

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  loadCityData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      //GET THE CATEGORIES AND THEIR RELATIVE SCORES
      axios
        .request({
          method: "get",
          url: `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
        })
        .then(response => {
          this.setState({ scores: response.data.categories }, () => { });
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
      //LOAD THE CORRESPONDING CITY IMAGE
      fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
        .then(res => {
          if (!res.ok) {
            throw Error("Something went wrong retreiving an image :(");
          }
          return res.json();
        })
        .then(responseData => {
          this.setState({
            bannerImage: responseData.photos[0].image.web
          });
          //console.log(responseData);
        })
        .catch(error => {
          console.log(error);
        });
    }
    else return;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <CityForm loadCityData={this.loadCityData} />
              <br />
              <img
                src={this.state.bannerImage}
                onError={(e) => {
                  e.target.onerror = null; e.target.src="https://media.giphy.com/media/GWTzcRZ5kLSGk/giphy.gif"}}
                //Placeholder Alternative 2
                // https://via.placeholder.com/500x200.png/7befb2/?text=Look+For+A+Cool+City!
                style={{
                  width: '100%',
                  height: '30%',
                  marginTop: '1em',
                }}
                alt="City Banner"
              />
              <br />
              <Scores scores={this.state.scores} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default App;

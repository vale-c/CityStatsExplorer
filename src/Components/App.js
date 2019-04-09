import React, { Component } from 'react';
import Header from './Header.js';
import Scores from './Scores.js';
import CityForm from './CityForm';
import Footer from "./Footer.js";

import { Grid, Col, Row } from "react-bootstrap";
import Parser from 'html-react-parser';
import axios from "axios";


class App extends Component {
  constructor() {
    super();   
    this.state = {
      scores: [],
      text: "",
      activeKey: "1",
      city: '',
      bannerImage: [],
      summary: "",
      latitude: "",
      longitude: "",
      population: "",
      teleport_score: "",
      geonameid: "",
      timezone: "",
      urban_area: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
}

  handleSelect(activeKey) {        //IT HANDLES THE ACCORDION PANEL ACTIVE ELEMENT
    this.setState({ activeKey });
  }

  loadCityData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      //GET THE CATEGORIES WITH THEIR RELATIVE SCORES
      axios
        .request({
          method: "get",
          url: `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
        })
        .then(res => {
          this.setState({ 
            scores: res.data.categories,
            summary: res.data.summary,
            teleport_score: res.data.teleport_city_score
          }, () => { });
          //console.log(res);
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
      //Get Other City Info
      axios 
        .request({
          method: "get", 
          url: `https://api.teleport.org/api/cities/?search=${city}` 
        })
        .then(res => {
          console.log(res);
          this.setState({
            geonameid: res.data._embedded["city:search-results"][0]._links["city:item"].href
          });
          const geoname_resp = this.state.geonameid;

        axios
          .get(geoname_resp)
          .then(res => {
            this.setState({
              timezone: res.data._links["city:timezone"].name,
              urban_area: res.data._links["city:urban_area"].name,
              lat: res.data.location.latlon.latitude,
              lon: res.data.location.latlon.longitude,
              population: res.data.population
            });
            console.log(this.state);
          });
        })
      .catch(error => {
        console.log(error);
      });

    }
    else return;
  };

  render() {
    
    const bannerImage = this.state.bannerImage;
    const summary = this.state.summary;
    const teleport_score = this.state.teleport_score;
    const scores = this.state.scores;
    const latitude = this.state.latitude;
    const longitude = this.state.longitude;
    const population = this.state.population;
    const timezone = this.state.timezone;
    const urban_area = this.state.urban_area;

    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <CityForm loadCityData={this.loadCityData} />
              <br />
              <img
                src={bannerImage}
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

              <div className="summary">{ Parser(summary) }</div>
              
              { teleport_score  ? 
                <div className="teleport_score"> <p className="title_format">Teleport Score: </p>{teleport_score}</div> 
                : null 
              }

              { latitude ?
                <div className="latitude"> <p className="title_format">Latitude: </p>{latitude}</div>
                : null
              }

              { longitude ?
                <div className="longitude"> <p className="title_format">Longitude: </p>{longitude}</div>
                : null
              }

              { population ?
                <div className="population"> <p className="title_format">Population: </p>{population}</div>
                : null
              }

              {timezone ?
                <div className="timezone"> <p className="title_format">Timezone: </p>{timezone}</div>
                : null
              }

              {urban_area ?
                <div className="urban_area"> <p className="title_format">Urban Area: </p>{urban_area}</div>
                : null
              }
          
              <Scores scores={scores} />
              <Footer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default App;

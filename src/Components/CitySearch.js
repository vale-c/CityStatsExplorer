import React, { Component } from 'react'
import './CitySearch.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';


class CitySearch extends Component {
  constructor(props) {
    super(props);

    this.state = {

        city: '',
        geonameid: '',
        timezone: '',
        urban_area: '',
        lat: '',
        lon: '',
        categories: '',
        score: '',
        summary: '',
        population: '',

    }
    this.query = '';
    this.trackQueryValue = this.trackQueryValue.bind(this);
  }

  getCityData = () => {
      axios 
        .get(`https://api.teleport.org/api/cities/?search=${this.state.city}`)
        .then(res => {
          //console.log(res);
          this.setState({
            city: res.data._embedded["city:search-results"][0].matching_full_name,
            geonameid: res.data._embedded["city:search-results"][0]._links["city:item"].href
          });
              const geoname_resp = this.state.geonameid;

        axios 
              .get(geoname_resp)
              .then(res => {
                this.setState({
                  timezone:
                  res.data._links["city:timezone"].name,
                  urban_area:
                  res.data._links["city:timezone"].name,
                  lat: res.data.location.latlon.latitude,
                  lon: res.data.location.latlon.longitude,
                  population: res.data.population
                  //summary: res.data.summary,
                  // categories: res.data.categories.name,
                  // score: res.data.categories.score_out_of_10,
                });
                //console.log(this.state);
              })        
          }) 
    }



  // loadMoreData() {
  //     fetch(`https://api.teleport.org/api/urban_areas/slug:${this.city}/scores/`)
  //       .then(response => {
  //         return response.json()
  //       }).then(jsonResponse => {
  //         console.log(jsonResponse);
        
  //         this.setState({
  //           summary: jsonResponse.data.summary,
  //           teleport_score: jsonResponse.data.teleport_city_score
  //           // categories: res.data.categories.name,
  //           // score: res.data.categories.score_out_of_10
  //         })
  //       })
  //   }

  
  trackQueryValue(event) {
    this.query = event.target.value;
  }


  componentWillMount() {
    this.getCityData();
  }


  render() {

    const { city, summary, urban_area, lat, lon, timezone, population } = this.state;

    const CityData = ({ city, summary, urban_area, lat, lon, timezone, population }) => 
      <div>
        <h3 className="city"> {city} </h3>
        <h3 className="summary"> {summary} </h3>
        <h3 className="urban_area"> Urban Area: {urban_area} </h3>
        <h3 className="population"> Current Population:  {population} </h3>
        <h3 className="lat"> Latitude: {lat}°</h3>
        <h3 className="lon"> Longitude: {lon}° </h3>
        <h3 className="timezone">Timezone: {timezone}</h3>
      </div>;
    
    return <div className="card">
      <div className="weatherWrapper">
        <CityData city={city}
                  summary={summary}
                  urban_area={urban_area}
                  lat={lat}
                  lon={lon}
                  population={population}
                  timezone={timezone}            
        />
        </div>

      <div className="navbar-form">
        <input type="text" onChange={this.trackQueryValue} />
        <Button bsstyle="danger" bssize="small" onClick={this.getCityData}>Search city</Button>
      </div>

      </div>;
  }

  }


export default CitySearch;
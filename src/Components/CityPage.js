import React, { Component } from 'react'
import axios from 'axios';

class CityPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "amsterdam",
      geonameid: "",
      timezone: "",
      urban_area: "",
      lat: "",
      lon: "",
      summary: "",
      population: "",
      teleport_score: "",
    };

    this.loadCityData = this.loadCityData.bind(this);
    this.loadMoreCityData = this.loadMoreCityData.bind(this);
    this.loadScores = this.loadScores.bind(this);
  }


  loadCityData = () => {
    axios
      .get(`https://api.teleport.org/api/cities/?search=${this.state.city}`)
      .then(res => {
       // console.log(res);
        this.setState({
          city: res.data._embedded["city:search-results"][0].matching_full_name,
          geonameid: res.data._embedded["city:search-results"][0]._links["city:item"].href
        });

        const geoname_resp = this.state.geonameid;

        axios.get(geoname_resp).then(res => {
          this.setState({
            timezone: res.data._links["city:timezone"].name,
            urban_area: res.data._links["city:timezone"].name,
            lat: res.data.location.latlon.latitude,
            lon: res.data.location.latlon.longitude,
            population: res.data.population
          });
          //console.log(this.state);
        });
      });
  };


  loadMoreCityData() {
    const cityresp = this.state.city;
      fetch(`https://api.teleport.org/api/urban_areas/slug:${cityresp}/scores/`)
        .then(response => {
          return response.json()
        })
        .then(res => {
          this.setState({
            summary: res.summary,
            teleport_score: res.teleport_city_score
          })
        })
    }

  loadScores() {
    axios.request({
      method: 'get',
      url: `https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/`
    }).then((response) => {
      this.setState({ scores: response.data }, () => {
      });
    }).catch((err) => {
      console.log(err);
    });
  }


  componentWillMount() {
    this.loadCityData();
    this.loadMoreCityData();
    this.loadScores();
  }

  render() {

    const { city, summary, urban_area, lat, lon, timezone, population, teleport_score } = this.state;

    const CityData = ({ city, summary, urban_area, lat, lon, timezone, population, teleport_score }) => (
        <div>
          <h3 className="city"> {city} </h3>
          <h3 className="summary"> {summary} </h3>
          <h3 className="urban_area"> Urban Area: {urban_area} </h3>
          <h3 className="population"> Current Population: {population} </h3>
          <h3 className="lat"> Latitude: {lat}°</h3>
          <h3 className="lon"> Longitude: {lon}° </h3>
          <h3 className="timezone">Timezone: {timezone}</h3>
          <h3 className="teleport">Teleport Score: {teleport_score}</h3>

        </div>
      );


    return (
      <div className="card">
        <div className="weatherWrapper">
          <CityData
            city={city}
            summary={summary}
            urban_area={urban_area}
            lat={lat}
            lon={lon}
            population={population}
            timezone={timezone}
            teleport_score={teleport_score}
          />
        </div>
      </div>
    );
  }
}


export default CityPage;
import React, { Component } from 'react'
import './CitySearch.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
        city: 'Atlanta',
        geonameid: '',
        timezone: '',
        urban_area: '',
        lat: '',
        lon: ''
    }
  }


    getData = () => {
      axios 
        .get(`https://api.teleport.org/api/cities/?search=${this.state.city}`)
        .then(res => {
          //console.log(res);
          
          this.setState({
            city: res.data._embedded["city:search-results"][0].matching_full_name,
            geonameid: res.data._embedded["city:search-results"][0]._links["city:item"].href
          });
           // console.log(this.state);
        })
        .catch(error => {
          console.log(error);
        });  
    };

    getMoreData = () => {
      axios 
        .get("https://api.teleport.org/api/cities/geonameid:4180439")
        .then(res => {
          console.log(res);
          
          this.setState({
            timezone: res.data._links["city:timezone"].name,
            urban_area: res.data._links["city:timezone"].name,
            lat: res.data.location.latlon.latitude,
            lon: res.data.location.latlon.longitude
          });
            console.log(this.state);
        })
        .catch(error => {
          console.log(error);
        });
      
    };

    componentWillMount() {
      this.getData();
      this.getMoreData();
    }

    
 /*    handleInputChange(city) {
      this.setState({city}, this.getData());     
    }
   */

  render() {

    const { city, geonameid, urban_area, lat, lon, timezone } = this.state;

    const CityData = ({ city, geonameid, urban_area, lat, lon, timezone }) => 
      <div>
          <h4 className="city"> {city} </h4>
          <h4 className="geonameid"> {geonameid} </h4>
          <h3 className="urban_area"> {urban_area} </h3>
          <h2 className="lat"> {lat}°</h2>
          <h2 className="lon"> {lon}° </h2>
          <h5 className="timezone">Timezone: {timezone}</h5>   
      </div>;
    
    return <div className="card">
      <div className="weatherWrapper">
        <CityData city={city} 
                  geonameid={geonameid} 
                  urban_area={urban_area}
                  lat={lat}
                  lon={lon}
                  timezone={timezone}            
        />
        </div>
      </div>;
    
   
  }
}

export default CitySearch;
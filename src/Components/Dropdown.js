import React, { Component } from 'react';
//const dataSet = require("./data/quality_of_life.json");

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      value: 'Select an Option'
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const dropdownOptions = this.props.options.map((option) =>
      <option value={option} key={option}>{option}</option>,
    );

    return (
      <select
        value={this.state.value}
        onChange={this.onChange}
        stylename="dropdown"
      >
        {dropdownOptions}
      </select>
    );
  }
}

export default Dropdown;
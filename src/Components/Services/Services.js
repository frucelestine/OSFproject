import React, { Component } from "react";
import "./Services.scss";
import { CirclePicker } from "react-color";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Link } from 'react-router-dom'
import MoreServiceItems from './MoreServiceItems'

const options = [
  "$0.00-$100.00",
  "$101.00-$200.00",
  "$201.00-$300.00"
];
const defaultOption = options[0];

export class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      background: "#fff"
    };
  }
    
  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="services">
        <div className="servicesBrowse">
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "#84bc22" }}>
              Home
            </Link>{" "}
          </span>{" "}
          / <span> Category Landing Services </span>
        </div>
        <h2 className="servicesHead">Services</h2>
        <button className="hideSort">Hide Filter</button>

        <div className="serviceSorting">
          <div className="sortPrice">
            <div className="priceRange">
              <p className="priceName">Price</p>
              <Dropdown
                options={options}
                onChange={this._onSelect}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div className="colorPicker">
              <p className="colorName">Color</p>
              <CirclePicker
                color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
          </div>

          <div className="sortPrice">
            <div className="priceRange">
              <p className="priceName">Brands</p>
              <Dropdown
                options={["Building Material", "Baby stuff"]}
                onChange={this._onSelect}
                value="Ukraine sports"
              />
            </div>
            <div className="priceRange">
              <p className="priceName">Sort by</p>
              <Dropdown
                options={["Category", "Location", "Color"]}
                onChange={this._onSelect}
                value="Price"
                placeholder="Select an option"
              />
            </div>
          </div>

          <div className="sortPrice">
            <div className="priceRange">
              <p className="priceName">Size </p>
              <Dropdown
                options={["Large", "Medium", "Extra-Large", "Extra-Small"]}
                onChange={this._onSelect}
                value="Small"
                placeholder="Select an option"
              />
            </div>
            <div className="priceRange">
              <p className="priceName">Show</p>
              <Dropdown
                options={["25 per page", "35 per page", "45 per page"]}
                onChange={this._onSelect}
                value="16 per Page"
                placeholder="Select an option"
              />
            </div>
          </div>
        </div>

        <MoreServiceItems />
      </div>
    );
  }
}

export default Services;

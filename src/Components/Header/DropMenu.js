import React from "react";
import dropImg from "../../Images/dropImg.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";

function DropMenu() {
  return (
    <div className="DropMenu">
      <div className="dropContainer">
        <div className="dropRow">
          <ul>
            <li className="dropList">
              <h4 className="sectLink dropHeading">product categories</h4>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Accessories
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Alcohol
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Art
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                books
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Drink
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Electronics
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Flowers & Plants
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Food
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropRow">
          <ul>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Gadgets
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Garden
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Grocery
              </Link>
            </li>
            <li className="dropList">
              <Link to="/" className="sectLink">
                Home
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Jewelry
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Kids & Baby
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Men's Fashion
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Mobile
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropRow">
          <ul>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Motocycle
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Mobile
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Music
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Office
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Pets
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Romantic
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Sports
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Toys
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropRow">
          <ul>
            <li className="dropList">
              <h4 className="sectLink dropHeading">Sales</h4>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Accessories
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Alcohol
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Art
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Books
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Drink
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Electronic
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Flowers & Plants
              </Link>
            </li>
            <li className="dropList">
              <Link to="/page-not-found" className="sectLink">
                Food
              </Link>
            </li>
          </ul>
        </div>
        <img src={dropImg} className="dropImg" alt="lady and shopping bags" />
      </div>
    </div>
  );
}

export default DropMenu;

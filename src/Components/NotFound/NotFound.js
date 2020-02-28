import React from 'react'
import './NotFound.scss'
import notFound from '../../Images/notFound.png'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
      <div className="notFound">
        <div className="notBrowse">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            <span>Home </span>
          </Link>{" "}
          / <span> 404 </span>
        </div>
        <h2 className="notFoundDigit">404</h2>
        <div className="notFoundMain">
          <img
            src={notFound}
            className="notFoundImg"
            alt="exclamation for notFound page"
          />
          <p className="oops">Oops!</p>
          <div className="notFoundInfo">
            <h4 className="notFoundHead">
              Sorry, This page could not be found!
            </h4>
            <p className="notFoundDetail">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="notFoundDetail">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>

            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="backHome">Go back to Homepage</button>
            </Link>

            <form className="form-inline ">
              <label className="formLabel">Search our site</label>
              <input
                className="form-control form-control-sm mr-3 w-75"
                type="text"
                placeholder="SEARCH"
                aria-label="Search"
              />
              <i className="fas fa-search" />
            </form>
          </div>
        </div>
      </div>
    );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./Footer.scss";

function FooterForMobile() {
  const thisYear = new Date();
  const currentYear = thisYear.getFullYear();
  return (
    <div id="mobileFooter">
      <p className="copyRight" style={{ margin: 0 }}>
        © Copyright {currentYear}.{" "}
      </p>
      <p className="Rights">All Rights Reserved.</p>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">CONTACT</Dropdown.Toggle>

        <Dropdown.Menu id="dropFoot">
          <p style={{ margin: 0 }}>Headquaters:</p>
          <p className="address">
            5600, Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6
          </p>
          <a href="mailto:contact@osf-global.com" className="email">
            contact@osf-global.com
          </a>
          <a href="tel:+1 (888) 548-4344" className="contactNumber">
            +1 (888) 548-4344
          </a>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">CATEGORIES</Dropdown.Toggle>

        <Dropdown.Menu id="dropFoot">
          <ul className="categories">
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Alcohol
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Art
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Books
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Drinks
              </Link>
              <li className="sectList">
                <Link to="/page-not-found" className="sectLink">
                  Electronics
                </Link>
              </li>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">ABOUT</Dropdown.Toggle>

        <Dropdown.Menu id="dropFoot">
          <ul className="categories">
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                About Us
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Delivery
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Testimonials
              </Link>
            </li>
            <li className="sectList">
              <Link to="/page-not-found" className="sectLink">
                Contact
              </Link>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
      <div className="social">
        <a
          href="https://www.facebook.com/groups/262391997178767/"
          target="_blank"
          rel="noOpener noReferrer"
        >
          <i class="fab fa-facebook-f" />
        </a>
        <a
          href="https://aboutme.google.com/u/0/?referer=gplus"
          target="_blank"
          rel="noOpener noReferrer"
        >
          <i class="fab fa-google-plus-g" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=[ARTICLELINK]&text=Check%20this%20out:"
          target="_blank"
          rel="noOpener noReferrer"
        >
          <i class="fab fa-twitter" />
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noOpener noReferrer"
        >
          <i class="fab fa-pinterest-p" />
        </a>
      </div>
    </div>
  );
}

export default FooterForMobile;

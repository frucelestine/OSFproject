import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {

  const thisYear = new Date();
  const currentYear = thisYear.getFullYear();

  return (
    <div className="footer">
      <div className="contact">
        <p className="copyRight" style={{ margin: 0 }}>
          © Copyright {currentYear}.
        </p>
        <p className="Rights">All Rights Reserved.</p>
        <h5 className="contactHead">CONTACT</h5>
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
      </div>

      <ul className="categories">
        <li className="sectHead">Categories</li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Alcohole
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

      <ul className="categories">
        <li className="sectHead"></li>
        <li className="sectList">
          <Link to="/" className="sectLink">
            home
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Jewelry
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Kids & Baby
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Men's Fashion
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Mobile
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Motocycle
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Movies
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Music
          </Link>
        </li>
      </ul>

      <ul className="categories">
        <li className="sectHead"></li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Sports
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Toys
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Travel
          </Link>
        </li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            Women's Fashion
          </Link>
        </li>
      </ul>

      <ul className="categories">
        <li className="sectHead">About</li>
        <li className="sectList">
          <Link to="/page-not-found" className="sectLink">
            About us
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
          <a href="/page-not-found" className="sectLink">
            Contact
          </a>
        </li>
      </ul>

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

export default Footer;

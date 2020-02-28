import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import './HeaderMedia.scss';
import logo from "../../Images/logo.png";
import MenuList from './MenuList';
import LanguageSelect from "./LanguageSelect";
import BurgerNav from './BurgerNav';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const mapStateToProps = state => {
  return {
    cartCount: state.Cart.cartCount, 
    wishCount: state.Wish.wishCount
  };
};


 export function ButtonAppBar(props) {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className="NavBar">
        <div id="BurgerNav">
          <BurgerNav />
        </div>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logoType">
            <img src={logo} className="siteLogo" alt="siteLogo" />
            <h1 className="logoTitle">
              OSF <span>Academy</span>
            </h1>
          </div>
        </Link>
        <Navbar variant="light" className="navMenu">
          <Nav className="mr-auto">
            <MenuList />
            <Nav.Link href="#home" className="NavLink">
              COMPANY
            </Nav.Link>
            <Nav.Link href="#features" className="NavLink">
              LIBRARY
            </Nav.Link>
            <Nav.Link href="#pricing" className="NavLink">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar>
        <LanguageSelect id="language" />
        <div className="icons">
          <i class="fas fa-search"></i>
          <i class="far fa-user" data-toggle="modal" data-target="#myModal"></i>
          <i class="far fa-heart">
            <p id="countShow">{props.wishCount}</p>
          </i>
          <Link to="/shopping-cart">
            <i class="fas fa-shopping-basket">
              <p id="countShow">{props.cartCount}</p>
            </i>
          </Link>
        </div>
      </AppBar>
    </div>
  );
}



export default connect(mapStateToProps)(ButtonAppBar);

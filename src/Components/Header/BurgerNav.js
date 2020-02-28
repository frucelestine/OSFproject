import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import dropImg from '../../Images/dropImg.jpg';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="main-menu"
          >
            <h4 className="dropdown-basic-button">SERVICES</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="menu-exp">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Product Category</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Gadgets
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Garden
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Grocery
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Jewelry
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Mobile
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Sales</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Accessories
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Alcohol
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Arts
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Books
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Drinks
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Electronics
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Flowers & Plants
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="main-menu"
          >
            <h4 className="dropdown-basic-button">COMPANY</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="menu-exp">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Product Category</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Gadgets
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Garden
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Grocery
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Jewelry
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Mobile
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Sales</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Accessories
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Alcohol
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Arts
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Books
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Drinks
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Electronics
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Flowers & Plants
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="main-menu"
          >
            <h4 className="dropdown-basic-button">LIBRARY</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="menu-exp">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Product Category</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Gadgets
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Garden
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Grocery
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Jewelry
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Mobile
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Sales</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Accessories
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Alcohol
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Arts
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Books
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Drinks
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Electronics
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Flowers & Plants
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="main-menu"
          >
            <h4 className="dropdown-basic-button">CONTACT US</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="menu-exp">
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Product Category</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Gadgets
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Garden
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Grocery
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Jewelry
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Mobile
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="sub-menu"
              >
                <h5 className="sub-menu-title">Sales</h5>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="sub-menu-exp">
                <Link to="/page-not-found" className="menu-link">
                  Accessories
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Alcohol
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Arts
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Books
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Drinks
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Electronics
                </Link>
                <Link to="/page-not-found" className="menu-link">
                  Flowers & Plants
                </Link>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <img src={dropImg} id="burgerImg" alt="woman with shopping bags" />
      </Menu>
    </div>
  );
}

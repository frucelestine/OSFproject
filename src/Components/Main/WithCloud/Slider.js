import React from "react";
import Slider from "react-slick";
import sliderImg from "../../../Images/sliderImg.jpg";
import "./WithCloud.scss";
import { Button } from "@material-ui/core";
import Discount from "./Discount";
import {Link} from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

export default class extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            bottom: "40px",
            padding: "10px"
          }}
        >
          <ul
            style={{
              margin: "0px",
              padding: '0px',
            }}
          >
            {dots}
          </ul>
        </div>
      )
    };
    return (
      <div className="withCloudContainer">
        <div className="slider">
          <Slider {...settings}>
            <div className="sliderGroup">
              <div className="sliderText textA">
                <h3 className="mainText">
                  Control and manage any device with cloud solutions
                </h3>
                <h6 className="secondaryText">
                  Improve business performance and the user experience with the
                  right mix of IoT technology and processes
                </h6>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Button id="moreBtn" variant="outlined">
                    VIEW MORE
                  </Button>
                </Link>
              </div>
              <img
                className="sliderImage"
                src={sliderImg}
                alt="of woman and shopping bags"
              />
            </div>

            <div className="sliderGroup">
              <div className="sliderText textB">
                <h3 className="mainText">
                  Control and manage any device with cloud solutions
                </h3>
                <h6 className="secondaryText">
                  Improve business performance and the user experience with the
                  right mix of IoT technology and processes
                </h6>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Button id="moreBtn" variant="outlined">
                    VIEW MORE
                  </Button>
                </Link>
              </div>
              <img
                className="sliderImage"
                src={sliderImg}
                alt="of woman and shopping bags"
              />
            </div>
            <div className="sliderGroup">
              <div className="sliderText textC">
                <h3 className="mainText">
                  Control and manage any device with cloud solutions
                </h3>
                <h6 className="secondaryText">
                  Improve business performance and the user experience with the
                  right mix of IoT technology and processes
                </h6>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Button id="moreBtn" variant="outlined">
                    VIEW MORE
                  </Button>
                </Link>
              </div>
              <img
                className="sliderImage"
                src={sliderImg}
                alt="of woman and shopping bags"
              />
            </div>
          </Slider>
        </div>
        <Discount />
      </div>
    );
  }
}

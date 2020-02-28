import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../FeaturedProducts/FeaturedProduts.scss";
import img1 from "../../../Images/img1.jpg";
import img2 from "../../../Images/img2.jpg";
import img3 from "../../../Images/img3.jpg";
import img4 from "../../../Images/img4.jpg";
import slideIcon from '../../../Images/slideIcon.png';


class FeaturedProducts extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000, 
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1
          }
        }
      ]
    };

    
    return (
      <div className="carouselContainer">
        <h3 className="productHead">Featured Products</h3>
        <p className="productSub">Unde omnis iste natus error sit voluptatem</p>
        <img className='slideLogo' alt='slider logo, 3 white bars' src={slideIcon}/>
        <Slider className="slideCase" {...settings}>
          <div id="featureCard">
            <img id="slideImage" src={img1} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img2} alt="Gracious home" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img
              id="slideImage"
              src={img3}
              alt="man using touch stick on smart screen"
            />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img4} alt="sales force 1" />
            <div className="cardText">
              <p className="cardDescribtion">Hezy Theme</p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img1} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img2} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img3} alt="Gracious home" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img4} alt="sales force 1" />
            <div className="cardText">
              <p className="cardDescribtion">Hezy Theme</p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default FeaturedProducts;

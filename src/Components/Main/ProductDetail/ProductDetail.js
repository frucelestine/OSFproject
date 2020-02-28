import React from "react";
import Slider from "react-slick";
import sale0 from "../../../Images/sale0.jpg";
import sale03 from "../../../Images/sale03.jpg";
import sale07 from "../../../Images/sale07.jpg";
import ProductTabs from "./ProductTabs/ProductTabs";
import sale05 from "../../../Images/sale05.jpg";
import ShowText from "./ShowText";
import { addWish } from "../../../Redux/Wish/WishAction";
import { addToCart } from "../../../Redux/Cart/CartAction";
import { connect } from "react-redux";
import "./ProductDetail.scss";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import QuantityPicker from "./QuantityPicker";
import { Link } from "react-router-dom";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: 40
  }
}));

function SampleNextArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: () => dispatch(addToCart()),
    addWish: () => dispatch(addWish())
  };
};

function ProductDetail(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
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
          right: "-100px",
          top: "0px",
          maxWidth: "87px",
          padding: "10px",
          overflow: "hidden"
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px",
            padding: "0px"
          }}
        >
          {dots}
        </ul>
      </div>
    )
  };

  const classes = useStyles();
  const [ setAge] = React.useState("");
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className="productDetail">
      <div className="browse">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Home </span>
        </Link>{" "}
        / <span> OSF Theme </span> /<span> Ruffle Front V-Neck Cardigan</span>
      </div>
      <h2 className="productHead">Ruffle Front V-Neck Cardigan</h2>
      <div className="actionSection">
        <Slider {...settings} style={{ maxWidth: 580 }}>
          <div>
            <img
              src={sale0}
              className="productImg"
              alt="woman in nice shirts"
            />
          </div>
          <div>
            <img
              src={sale03}
              className="productImg"
              alt="woman in nice shirts"
            />
          </div>
          <div>
            <img
              src={sale05}
              className="productImg"
              alt="woman in nice shirts"
            />
          </div>
          <div>
            <img
              src={sale07}
              className="productImg"
              alt="woman in nice shirts"
            />
          </div>
        </Slider>
        <div className="pricing">
          <p className="pricingAmount">$299.9</p>
          <FormControl style={{ marginLeft: 0 }} className={classes.margin}>
            <NativeSelect
              id="demo-customized-select-native"
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option className="gray">Dark Gray</option>
              <option className="green">Light Green</option>
            </NativeSelect>
          </FormControl>
          <div className="buttonGroup">
            <QuantityPicker />
            <Button className="addToCard" onClick={props.addToCart}>
              ADD TO CARD
            </Button>
          </div>
          <ShowText />
          <div className="social">
            <p className="share">Share</p>
            <a
              href="https://www.facebook.com/groups/262391997178767/"
              target="_blank"
              rel="noOpener noReferrer"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://aboutme.google.com/u/0/?referer=gplus"
              target="blank"
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
      </div>
      <ProductTabs />
    </div>
  );
}
export default connect(null, mapDispatchToProps)(ProductDetail);

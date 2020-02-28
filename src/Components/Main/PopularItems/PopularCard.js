import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ReplayIcon from "@material-ui/icons/Replay";
import { addWish } from "../../../Redux/Wish/WishAction";
import { addToCart } from "../../../Redux/Cart/CartAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./PopularItems.scss";
import dragons from "../../../Images/dragons.png";
import prod from "../../../Images/prod.jpg";
import prod2 from "../../../Images/prod2.jpg";
import prod3 from "../../../Images/prod3.jpg";
import prod4 from "../../../Images/prod4.jpg";
import prod5 from "../../../Images/prod5.jpg";
import prod6 from "../../../Images/prod6.jpg";
import prod7 from "../../../Images/prod7.jpg"; 
import prod8 from "../../../Images/prod8.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 270,
    height: 367,
    textAlign: "center",
    borderRadius: 7,
    position: "relative",
    "& > .fa": {
      margin: theme.spacing(2)
    }
  }
}));

const mapDispatchToProps = dispatch => {
  return {
    addToCart: () => dispatch(addToCart()),
    addWish: () => dispatch(addWish())
  };
};


export function PopularCard(props) {
  const classes = useStyles();

  return (
    <div className="ProductSection">
      <h3 className="popularTitle">Popular Items</h3>
      <div className="cardContainer">
        <Card id="card" className={classes.root}>
          <Link to="/product-detail">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="264"
                image={prod}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  id="prodDescribe"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Kristina Dam Oak Table With White Marble Top
                </Typography>

                <Typography
                  id="prodPrice"
                  gutterBottom
                  variant="p"
                  component="p"
                >
                  $ 799.55
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>
        <Card id="cardNoOverlay" className={classes.root}>
          <CardActionArea>
            <Link to="product-detail">
              <CardMedia
                component="img"
                alt="Contemplative Re</Link>ptile"
                height="264"
                image={prod2}
                title="Contemplative Reptile"
              />
            </Link>

            <Link to="product-detail" style={{ textDecoration: "none" }}>
              <CardContent>
                <Typography
                  id="prodDescribe"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Hay - About A Lounge Chair AAL 93
                </Typography>

                <div className={classes.root}>
                  <ButtonGroup
                    id="groupBtn"
                    color="default"
                    aria-label="outlined primary button group"
                  >
                    <Button id="groupPrice">$659.55</Button>
                    <Button id="buyNow" onClick={props.addToCart}>
                      BUY NOW
                    </Button>
                  </ButtonGroup>
                </div>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={prod3}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Activate Facial Mask and Charcoal Soap
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 129.55
              </Typography>
            </CardContent>
          </CardActionArea>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={prod4}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Cocktail Table Walnut | YES
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 299.55
              </Typography>
            </CardContent>
          </CardActionArea>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={prod5}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Hay - About A Lounge Chair AAL 93
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 659.55
              </Typography>
            </CardContent>
          </CardActionArea>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={prod6}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                TORY DESK CALENDAR
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 410.55
              </Typography>
            </CardContent>
          </CardActionArea>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={prod7}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                CH445 Wing Chair on SUITE NY
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 330.55
              </Typography>
            </CardContent>
          </CardActionArea>

          <div id="cardOverlay" className={classes.root}>
            <Button id="overlayBtn" onClick={props.addToCart}>
              <AddIcon id="overlayIcon" />
            </Button>
            <Button id="overlayBtn" onClick={props.addWish}>
              <FavoriteIcon id="overlayFav" />
            </Button>
          </div>
        </Card>

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Mn in office on computer"
              height="367"
              image={prod8}
              title="Man on work station"
            />
            <div className="disableCardTextBlock">
              <h5 className="disableText">
                My dragons are misbehaving again. Unbelievable!
              </h5>
              <div className="chatIconGroup">
                <img src={dragons} alt="chat icon" />
                <p className="timeAgo">5H AGO</p>
              </div>
            </div>
          </CardActionArea>
          <div className="gradienOverlay"></div>
        </Card>
      </div>
      <Button endIcon={<ReplayIcon />} id="loadMore">
        LOAD MORE
      </Button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(PopularCard);

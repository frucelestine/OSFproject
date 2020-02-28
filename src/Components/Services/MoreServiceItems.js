import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addWish } from "../../Redux/Wish/WishAction";
import { addToCart } from "../../Redux/Cart/CartAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Services.scss";
import prod from "../../Images/prod.jpg";
import prod3 from "../../Images/prod3.jpg";
import prod5 from "../../Images/prod5.jpg";
import prod6 from "../../Images/prod6.jpg";
import prod7 from "../../Images/prod7.jpg";
import img1 from "../../Images/img1.jpg";
import img4 from "../../Images/img4.jpg";
import noImage from "../../Images/noImage.png";
import dropImg from "../../Images/dropImg.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    width: 270,
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
  console.debug({ props });
  const classes = useStyles();

  return (
    <div className="moreServices">
      <p className="moreServiceTitle">12,931 results in apparel</p>
      <div className="serviceCardContainer">
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
                Kristina Dam Oak Table With White Marble Top
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 799.55
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

        {/* card 2*/}

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
                  EAMES x Cast + Crew - Custom Power Coated
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
        {/* card 3*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={img1}
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

        {/* card 4*/}

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={img4}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Vitra Cork Stool B, Cork - Design Within Reach
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 299.99
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
        {/* card 5*/}
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

        {/* card 6*/}
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
                TORY DESK CALENDAR
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 410.99
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

        {/*card number 7*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
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

        {/*card number 8*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
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

        {/*card number 9*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
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
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 2195.00
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

        {/*card number 10*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                MONOQI | O55 Crossit Table - Wht/Grn
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 299.99
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

        {/*card number 11*/}
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
                Vitra Cork Stool B, Cork - Design Within Reach
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 870.95
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

        {/*card number 12*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Active Facial Madsk and Chrcoal Soap
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

        {/*card number 13*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Hay - About A LoungeChair AAL 93
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

        {/*card number 14*/}
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
                TORY DESK CALENDAR
              </Typography>
              <Typography id="prodPrice" gutterBottom variant="p" component="p">
                $ 410.99
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

        {/*card number 15*/}

        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={dropImg}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                id="prodDescribe"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                EAMES x Cast + Crew - Custom Powder Coated
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

        {/*card number 16*/}
        <Card id="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ backgroundColor: "#262a32", objectFit: "contain" }}
              component="img"
              alt="Contemplative Reptile"
              height="264"
              image={noImage}
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
      </div>
      <Button id="showMore">
        LOAD MORE
      </Button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(PopularCard);

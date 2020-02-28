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
import { addWish } from "../../../../Redux/Wish/WishAction";
import { addToCart } from "../../../../Redux/Cart/CartAction";
import { connect } from "react-redux";
import "./ProductPopular.scss";
import prod4 from "../../../../Images/prod4.jpg";
import prod5 from "../../../../Images/prod5.jpg";
import prod6 from "../../../../Images/prod6.jpg";
import prod7 from "../../../../Images/prod7.jpg";


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
  console.debug({ props });
  const classes = useStyles();

  return (
    <div className="ProductSection" style={{ backgroundColor: "#f1edea" }}>
      <h3 className="popularTitle" style={{ color: "#45413e" }}>
        Popular Items
      </h3>
      <div className="cardContainer">
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
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(PopularCard);

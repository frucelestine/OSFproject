import React, { Component } from "react";
import "./ShoppingCart.scss";
import { Link } from "react-router-dom";

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterA: 1,
      counterB: 1,
      FlatRate: 10,
      international: 60,
      localDelivery: 5
    };
  }
  handlePlusA() {
    this.setState({
      counterA: this.state.counterA + 1
    });
  }

  handlePlusB() {
    this.setState({
      counterB: this.state.counterB + 1
    });
  }

  handleMinusA = () => {
    this.setState(prevState => ({
      counterA: Math.max(prevState.counterA - 1, 1)
    }));
  };

  handleMinusB = () => {
    this.setState(prevState => ({
      counterB: Math.max(prevState.counterB - 1, 1)
    }));
  };

  render() {
    const priceA = this.state.counterA * 2195;
    const priceB = this.state.counterB * 1249;
    const subTotal = priceA + priceB;
    return (
      <div className="shoppingCart">
        <div className="shoppingBrowse">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Home </span>
          </Link>{" "}
          / <span> Shopping Cart </span>
        </div>
        <h2 className="shoppingHead">SHOPPING CART</h2>
        <div className="shoppingBody itemA">
          <div className="shoppingItem">
            <div className="itemInfo">
              <img className="itemImg" alt="items in cart" src="" />
              <div className="itemText">
                <p className="textDescription">
                  Kristina Dam Oak Table With white Marble Top
                </p>
                <p className="textPrice">$2,195.00</p>
              </div>
            </div>
            <div className="itemPricing">
              <div className="ShoppingQuantity">
                <button className="minus" onClick={this.handleMinusA}>
                  -
                </button>
                <div className="quantity">{this.state.counterA}</div>
                <button className="plus" onClick={() => this.handlePlusA()}>
                  +
                </button>
              </div>
              <h4 className="pricePerItem">${priceA}</h4>
              <button className="deleteBtn"></button>
            </div>
          </div>

          <div className="shoppingItem itemB">
            <div className="itemInfo">
              <img className="itemImg" src="" alt="item in cart" />
              <div className="itemText">
                <p className="textDescription">
                  Kristina Dam Oak Table With white Marble Top
                </p>
                <p className="textPrice">$1,249.00</p>
              </div>
            </div>
            <div className="itemPricing">
              <div className="ShoppingQuantity">
                <button className="minus" onClick={this.handleMinusB}>
                  -
                </button>
                <div className="quantity">{this.state.counterB}</div>
                <button className="plus" onClick={() => this.handlePlusB()}>
                  +
                </button>
              </div>

              <h4 className="pricePerItem">${priceB}</h4>
              <button className="deleteBtn"></button>
            </div>
          </div>
        </div>
        <div className="billing">
          <div className="shoppingCoupon">
            <form className="useCoupon">
              <input
                className="enterCoupon"
                type="text"
                placeholder="Enter Coupon Code"
              />
              <button className="applyBtn">APPLY</button>
            </form>
          </div>
          <div className="checkout">
            <div className="updateCart">
              <button className="updateCartBtn">UPDATE CART</button>
              <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
            </div>
            <div className="subTotal">
              <p className="subTotalTitle">CART SUBTOTAL:</p>
              <p className="subTotalPrice">${subTotal}</p>
            </div>
            <div className="shipping">
              <h4 className="shippingTitle">SHIPPING AND HANDLING:</h4>
              <form action="/action_page.php" className="feeHandling">
                <input type="radio" id="fee" name="gender" value="$10.00" />
                <label for="FlatRate" className="feeTitle">
                  Flat Rate: <span className="feePrice">$10.00</span>
                </label>

                <br />
                <input type="radio" id="fee" name="gender" value="$00.00" />
                <label for="FlatRate" className="feeTitle">
                  Free shipping <span className="feePrice"></span>
                </label>
                <br />
                <input type="radio" id="fee" name="gender" value="$60.00" />
                <label for="international" className="feeTitle">
                  International: <span className="feePrice">$60.00</span>
                </label>
                <br />
                <input type="radio" id="fee" name="gender" value="$5.00" />
                <label for="Local Delivery" className="feeTitle">
                  Local Delivery: <span className="feePrice">$5.00</span>
                </label>
                <br />
                <input type="radio" id="fee" name="gender" value="free" />
                <label for="FlatRate" className="feeTitle">
                  Local Pickup (Free) <span className="feePrice"></span>
                </label>
              </form>
            </div>
            <div className="order">
              <h4 className="orderTitle">ORDER TOTAL</h4>
              <h3 className="orderPrice">
                ${subTotal + this.state.international}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

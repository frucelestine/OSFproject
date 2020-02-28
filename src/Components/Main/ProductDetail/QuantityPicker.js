import React, { Component } from 'react'
import './ProductDetail.scss';

export class QuantityPicker extends Component {
         constructor(props) {
           super(props);

           this.state = {
             quantity: 0
           };
         }
         handlePlus() {
           this.setState({
             quantity: this.state.quantity + 1
           });
         }


    handleMinus = () => {
        this.setState(prevState => ({
            quantity: Math.max(prevState.quantity - 1, 0)
        }));
    };

         render() {
           return (
             <div className='quantityPicker'>
               <button className="minus" onClick={this.handleMinus}>
                 -
               </button>
               <div className="quantity">{this.state.quantity}</div>
               <button className="plus" onClick={() => this.handlePlus()}>
                 +
               </button>
             </div>
           );
         }
       }



export default QuantityPicker;

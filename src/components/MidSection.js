import React from 'react';
import ProductGrid from './ProductGrid';
import CartSummary from './CartSummary';
import { Component } from 'react';

class MidSection extends Component {
    constructor() {
        super()
        this.state = {
            cartClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {cartClicked: !prevState.cartClicked}
        })
    }
    render() {
        let btnText = this.state.cartClicked ? "Hide Cart" : "View Cart"
        const mainStyle = {
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px"
        }
        return (
            <div className="main" style={mainStyle}>
                <ProductGrid />
                <button onClick={this.handleClick} id="cartBtn">{btnText}</button>
                {this.state.cartClicked && <CartSummary />}
            </div>
        )
    }
}

export default MidSection
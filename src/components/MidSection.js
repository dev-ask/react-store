import React from 'react';
import ProductGrid from './ProductGrid';
import CartSummary from './CartSummary';
import { Component } from 'react';

class MidSection extends Component {
    render() {
        return (
            <div className="main">
                <ProductGrid />
                <CartSummary />
            </div>
        )
    }
}

export default MidSection
import React from 'react';
import GridItem from './GridItem';
import ProductData from '../database/ProductData';
import { Component } from 'react';

class ProductGrid extends Component {
    render() {
        const allProducts = ProductData.map(product => <GridItem key={product.id} imgUrl={product.imgUrl} itemTitle={product.itemTitle} itemPrice={product.itemPrice} />)
        return (
            <div className="grid">
                {allProducts}
            </div>
        )
    }
}

export default ProductGrid
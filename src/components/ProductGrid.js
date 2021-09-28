import React from 'react';
import GridItem from './GridItem';
import { Component } from 'react';
import ProductsLoadScreen from './ProductsLoadScreen';

class ProductGrid extends Component {
    constructor() {
        super()
        this.state = {
            productData: [],
            dataLoading: true,
        }
    }
    componentDidMount() {
        this.setState({dataLoading: true})
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    productData: data,
                    dataLoading: false
                })
            })
    }
    render() {
        const myProducts = this.state.productData.map(product => <GridItem key={product.id} imgUrl={product.image} itemTitle={product.title} itemPrice={product.price} />)
        return (
            <div className="grid">
                {this.state.dataLoading ? <ProductsLoadScreen /> : myProducts}
            </div>
        )
    }
}

export default ProductGrid
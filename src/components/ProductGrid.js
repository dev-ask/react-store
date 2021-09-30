import React from 'react';
import GridItem from './GridItem';
import { Component } from 'react';
import ProductsLoadScreen from './ProductsLoadScreen';

class ProductGrid extends Component {
    constructor() {
        super()
        this.state = {
            allCategories: [],
            products: [],
            dataLoading: true,
        }
        this.getWomens = this.getWomens.bind(this)
        this.getMens = this.getMens.bind(this)
        this.getJewelery = this.getJewelery.bind(this)
        this.getElectronics = this.getElectronics.bind(this)
    }

    componentDidMount() {

        let initialProducts = "women's clothing";

        this.setState({dataLoading: true})
        Promise.all(
            [
                fetch('https://fakestoreapi.com/products/categories').then(response => response.json()), 
                fetch('https://fakestoreapi.com/products/category/'+ initialProducts).then(response => response.json())
            ]
        )
        .then(([categoryData, defaultCategory])=> {
            this.setState({
                allCategories: categoryData,
                products: defaultCategory,
                dataLoading: false
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    getWomens() {
        this.setState({dataLoading: true})
        fetch('https://fakestoreapi.com/products/category/'+this.state.allCategories[3])
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data,
                    dataLoading: false
                })
            })
    }

    getMens() {
        this.setState({dataLoading: true})
        fetch('https://fakestoreapi.com/products/category/'+this.state.allCategories[2])
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data,
                    dataLoading: false
                })
            })
    }

    getJewelery() {
        this.setState({dataLoading: true})
        fetch('https://fakestoreapi.com/products/category/'+this.state.allCategories[1])
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data,
                    dataLoading: false
                })
            })
    }

    getElectronics() {
        this.setState({dataLoading: true})
        fetch('https://fakestoreapi.com/products/category/'+this.state.allCategories[0])
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data,
                    dataLoading: false
                })
            })
    }

    render() {

        const myProducts = this.state.products.map(product => <GridItem key={product.id} imgUrl={product.image} itemTitle={product.title} itemPrice={product.price} />) 
        
        return (
            <div className="grid">
                <div className="nav">
                    <button onClick={this.getWomens}>Women's Clothing</button>
                    <button onClick={this.getMens}>Men's Clothing</button>
                    <button onClick={this.getJewelery}>Jewelery</button>
                    <button onClick={this.getElectronics}>Electronics</button>
                </div>
                {this.state.dataLoading ? <ProductsLoadScreen /> : myProducts}
            </div>
        )
    }
}

export default ProductGrid
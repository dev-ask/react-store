import React from 'react';
import GridItem from './GridItem';
import { Component } from 'react';
import ProductsLoadScreen from './ProductsLoadScreen';
import ReactModal from 'react-modal';
import ProductPopup from './ProductPopup';

class ProductGrid extends Component {
    constructor() {
        super()
        this.state = {
            allCategories: [],
            products: [],
            dataLoading: true,
            modalPopup: false,
            modalTitle: "",
            modalDesc: "",
            modalImage: "",
            modalPrice: "",
            modalCategory: "",
            modalRatingCount: "",
            modalRating: ""
        }
        this.getWomens = this.getWomens.bind(this)
        this.getMens = this.getMens.bind(this)
        this.getJewelery = this.getJewelery.bind(this)
        this.getElectronics = this.getElectronics.bind(this)
        this.handlePopup = this.handlePopup.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount() {

        ReactModal.setAppElement('body'); // To avoid React Modal Warnings, because body of our html does not exist yet

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

    handlePopup(id) {
        this.state.products.map(product => {
            if(product.id === id) {
                this.setState({
                    modalTitle: product.title,
                    modalDesc: product.description,
                    modalImage: product.image,
                    modalPrice: product.price,
                    modalCategory: product.category,
                    modalRating: product.rating.rate,
                    modalRatingCount: product.rating.count,
                    modalPopup: true
                })
            }
            return true
        })
    }

    addToCart() {
        this.setState({modalPopup: false})
    }

    render() {

        const myProducts = this.state.products.map(product => <GridItem key={product.id} productId={product.id} imgUrl={product.image} itemTitle={product.title} itemPrice={product.price} handlePopup={this.handlePopup}/>) 

        return (
            <div className="grid">
                <div className="nav">
                    <button onClick={this.getWomens}>Women's Clothing</button>
                    <button onClick={this.getMens}>Men's Clothing</button>
                    <button onClick={this.getJewelery}>Jewelery</button>
                    <button onClick={this.getElectronics}>Electronics</button>
                </div>

                {this.state.dataLoading ? <ProductsLoadScreen /> : myProducts}

                <ReactModal className="modal-window" isOpen={this.state.modalPopup} onRequestClose={() => {this.setState({modalPopup: false})}}>
                    <ProductPopup 
                        title={this.state.modalTitle}
                        imageUrl={this.state.modalImage}
                        price={this.state.modalPrice}
                        description={this.state.modalDesc}
                        category={this.state.modalCategory}
                        rating={this.state.modalRating}
                        reviews={this.state.modalRatingCount}
                        addToCart={this.addToCart}
                        />
                </ReactModal>
            </div>
        )
    }
}

export default ProductGrid
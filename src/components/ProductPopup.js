import React, { Component } from 'react' 

class ProductPopup extends Component {
    render() {
        return (
            <div className="modal-container">
                <div className="image-box">
                    <img src={this.props.imageUrl}/>
                </div>
                <div className="info-box">
                    <div className="info-category">
                        <p>category: {this.props.category}</p>
                        <button onClick={this.props.addToCart}>x</button>
                    </div>
                    <div className="info-title">
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="info-rating">
                        <div className="info-star">
                            <p>Rating: {this.props.rating} / 5</p>
                        </div>
                        <div className="info-reviews">
                            <p>Reviews: {this.props.reviews}</p>
                        </div>
                    </div>
                    <div className="info-price">
                        <p>${this.props.price}</p>
                    </div>
                    <div className="info-description">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="info-add">
                        <button onClick={this.props.addToCart}>Add To Cart</button>
                    </div>   
                </div>
            </div>
        )
    }
}

export default ProductPopup
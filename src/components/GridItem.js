import React from 'react';
import { Component } from 'react';

class GridItem extends Component {
    render() {
        return (
            <div className="product">
                <div className="p-img">
                    <img src={this.props.imgUrl} alt="fake item"/>
                </div>
                <div className="p-info">
                    <div className="p-title">
                        <p>{this.props.itemTitle}</p>
                    </div>
                    <div className="col">
                        <div className="p-price">
                            <p>${this.props.itemPrice}</p>
                        </div>
                        <div className="p-add">
                            <button type="submit" title="Add to cart">ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GridItem
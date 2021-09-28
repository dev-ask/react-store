import React from 'react';
import { Component } from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <div className="nav">
                <a href="#plants">Plants</a>
                <a href="#candles">Candles</a>
                <a href="#cushions">Cushions</a>
                <a href="#wallart">Wall Art</a>
            </div>
        )
    }
}

export default NavigationBar
import React from 'react'
import { Component } from 'react'

class LogoSearchBar extends Component {
  render() {
    return(
      <div className="header">
        <div className="logo">
          <p>THE SHOP</p>
        </div>
        <div className="search">
          <div className="centerSearch">
            <input type="text" placeholder="Search products" />
            <button type="submit" title="Search"><i className="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default LogoSearchBar
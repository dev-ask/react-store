import React from 'react';
import './App.css';
import LogoSearchBar from './components/LogoSearchBar';
import MidSection from './components/MidSection';
import Footer from './components/Footer'
import { Component } from 'react';

class App extends Component {
  
  render() {
    return (
      <div className="whole-page">
        <LogoSearchBar />
        <MidSection />
        <Footer />
      </div>
    )
  }
}

export default App;
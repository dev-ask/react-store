import React from 'react';
import './App.css';
import LogoSearchBar from './components/LogoSearchBar';
import NavigationBar from './components/NavigationBar';
import MidSection from './components/MidSection';
import Footer from './components/Footer'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="whole-page">
        <LogoSearchBar />
        <NavigationBar />
        <MidSection />
        <Footer />
      </div>
    )
  }
}

export default App;
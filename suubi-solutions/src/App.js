import About from "./About";
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer/index';
import './App.css';
import Team from './Ourteam';
import Product from "./Product"

  function App() {
    return (
      <div>
        <Navbar />
        <Landing/>
        <Product/>
        <About/>
        <Team/>
        <Footer/>
      </div>
    );
  }

export default App;
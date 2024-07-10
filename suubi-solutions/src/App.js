import About from "./About";
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer/index';
import './App.css';


  function App() {
    return (
      <div>
        <Navbar />
        <Landing/>
        <About/>
        <Footer/>
      </div>
    );
  }


export default App;
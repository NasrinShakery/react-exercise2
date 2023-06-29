import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import AboutUs from './components/AboutUs';

import { Link, Routes, Route } from 'react-router-dom';

import style from './styles/style.module.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }
  render() { 
    return (
      <>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='movies' element={<Movies></Movies>}></Route>
          <Route path='aboutus' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        
      </>
    );
  }
}
 
export default App;

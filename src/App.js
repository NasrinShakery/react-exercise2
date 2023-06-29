import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Movies from './components/Movies';
import AboutUs from './components/AboutUs';

import { Link, Routes, Route } from 'react-router-dom';

import style from './styles/style.module.css';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <div className={style["navbar"]}>
          <ul className={style["nav"]}>
            <li className={style['nav-btn']}><a href="/" className={style['a-link']}>Home</a></li>
            <li className={style['nav-btn']}><a href="movies" className={style['a-link']}>Movies</a></li>
            <li className={style['nav-btn']}><a href="aboutus" className={style['a-link']}>About Us</a></li>
          </ul>
        </div>
        <hr className={style.hr} />
        <div className={style.slider}>

        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Movies' element={<Movies></Movies>}></Route>
          <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
        </Routes>
        
        
        
      </>
    );
  }
}
 
export default App;

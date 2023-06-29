import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import style from '../styles/style.module.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className={style["navbar"]}>
                  <ul className={style["nav"]}>
                    <li className={style['nav-btn']}><Link to="/" className={style['a-link']}>Home</Link></li>
                    <li className={style['nav-btn']}><Link to="movies" className={style['a-link']}>Movies</Link></li>
                    <li className={style['nav-btn']}><Link to="aboutus" className={style['a-link']}>About Us</Link></li>
                  </ul>
                </div>
                <hr className={style.hr} />
            </>
        );
    }
}
 
export default Navbar;
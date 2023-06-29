import React, { Component } from 'react';

import style from '../styles/style.module.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className={style["navbar"]}>
                  <ul className={style["nav"]}>
                    <li className={style['nav-btn']}><a href="#" className={style['a-link']}>Home</a></li>
                    <li className={style['nav-btn']}><a href="#" className={style['a-link']}>Movies</a></li>
                    <li className={style['nav-btn']}><a href="#" className={style['a-link']}>About Us</a></li>
                  </ul>
                </div>
                <hr className={style.hr} />
            </>
        );
    }
}
 
export default Navbar;
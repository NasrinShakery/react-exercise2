import React, { Component } from 'react';

import style from '../styles/style.module.css';

import img1 from '../images/slider/1.jpg';
import img2 from '../images/slider/2.jpg';
import img3 from '../images/slider/3.jpg';
import img4 from '../images/slider/4.jpg';
import img5 from '../images/slider/5.jpg';
import img6 from '../images/slider/6.jpg';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className={style['slider-section']}>
                    <img src={img1} alt="spring" className={style["slider-img"]}/>
                </div>
            </>
        );
    }
}
 
export default Home;
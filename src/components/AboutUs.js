import React, { Component } from 'react';
import style from '../styles/style.module.css';

class AboutUs extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className={style['about-section']}>
                    <h1>About Us</h1>
                    <p>
                        Hello everyone, my name is <strong>Nasrin Shakery</strong> <br />
                        and every time you visit this website you will be notified of my experience, 
                        here is the website that you will see my exercise. 

                    </p>
                </div>
            </>
        );
    }
}
 
export default AboutUs;

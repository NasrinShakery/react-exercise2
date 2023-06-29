import React, { Component } from 'react';
import style from '../styles/style.module.css';

import notFoundImg from '../images/notFound.jpg';

class NotFound extends Component {
    
    render() { 
        return (
            <>
                <div className={style['not-found-section']}>
                    <h2 className={style['not-found']}>Not Found !!!</h2>
                    <img src={notFoundImg} alt="not_found" className={style['not-found-img']}/>
                </div>
            </>
        );
    }
}
 
export default NotFound;
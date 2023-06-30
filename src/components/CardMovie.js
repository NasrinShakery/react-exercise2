import React, { Component } from 'react';
import style from '../styles/style.module.css';

class CardMovie extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const {id, poster, title, director, year, genre} = this.props;
        return (
            <>
                <div key={id} className={style['movie-card']}>

                    <div className={style["movie-img"]}>
                        <img src={poster} alt='poster' />
                    </div>

                    <h4 className={style["movie-title"]}>{title}</h4>

                    <div className={style["movie-des"]}>
                        <span>{director}</span>
                        <span>{year}</span>
                    </div>

                    <p className={style["movie-genre"]}>{genre}</p>

                </div>
            </>
        );
    }
}
 
export default CardMovie;
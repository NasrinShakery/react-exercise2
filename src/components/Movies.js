import React, { Component } from 'react';
import CardMovie from './CardMovie';
import style from '../styles/style.module.css';
import axios from 'axios';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            isErr : false,
        };
    }

    getMovies = ()=>{
        const url = "./json/movies.json";
        axios
            .get(url)
            .then((response) =>{
                 this.setState({ movies: response.data})
                 console.log(response.data);
            });
        // this.makeGenreArray(this.state.movies)

    }

    makeGenreArray = (movies)=>{
        let genreArray = [];
        let genreStr = '';
        movies.map((movie) => {(                   
            //  genreStr +=  movie.Genre ;
            console.log(movie.Title+ "hi")
            // return genr
        )});
        // console.log(genreStr);
        // genreArray = genreStr.split(',');
        // let uniqueArray = [...new Set(genreArray)];
        //  console.log(uniqueArray);
        // console.log(genreArray);
    }
    
    componentDidMount() {
        this.getMovies();

    }

   

    render() { 
        const { movies, err} = this.state;
        let genreStr = '';
        let genreArray = [];
        movies.map((movie) => {(                   
            genreStr += movie.Genre
        )});
        genreArray = genreStr.split(',');
        let uniqueArray = [...new Set(genreArray)]; // ارایه ایی یونیک از ژانر ها
        return (
            <>
             <div className={style['Movies-section']}>
                <div className={style['left-box']}>
                    {

                        err 
                            ? <div className="not-found">Error !!</div>
                            : movies.map(movie => (
                                <CardMovie 
                                    id={movie.id} 
                                    poster={movie.Poster}
                                    title={movie.Title}
                                    director= {movie.Director}
                                    year= {movie.Year}
                                    genre= {movie.Genre}
                                ></CardMovie>
                            ))     
                    }
                </div>
                <div className={style['right-box']}>
                    <div className={style['search-box']}>
                        <input type="search" name="" id="" placeholder='search by movie title' />
                    </div>
                    <div className={style['genre-box']}>
                        {/* <button className={style['genre-btn']}>btn test</button> */}
                        {
                               uniqueArray.map(genre =>(
                                <button className={style['genre-btn']}> {genre} </button>
                               ))
                        }
                    </div>
                </div>
             </div>
            </>
        );
    }
}
 
export default Movies;
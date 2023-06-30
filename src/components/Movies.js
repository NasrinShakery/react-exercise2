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
            genreArray : [],
            searchValue: "",
            temp:[],
        };
    }

    getMovies = ()=>{
        const url = "./json/movies.json";
        axios
            .get(url)
            .then((response) =>{
                 this.setState({ movies: response.data})
            });
    
    }

    searchHandler = (event)=>{
        this.setState({searchValue: event.target.value})

        let searchedMovies = [];

        this.state.movies.filter((movie)=>{
            let title = movie.Title.toUpperCase();
            let value = event.target.value.toUpperCase();
            if (title.includes(value)){
                searchedMovies.push(movie)
            }
         })
        console.log(searchedMovies);
        this.setState({temp: searchedMovies})
        

        // if(this.state.searchValue ===''){
        //         getSnapshotBeforeUpdate(prevProps, prevState){
        //         // this.setState({movies: prevState})
        //         }
        //     }
        
    }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('prev movie :');
    //     console.log(prevState);
    //     // if(this.state.searchValue ===''){
    //     // this.setState({movies: prevState})
    //     // }
    // }
    // componentDidUpdate(){
    //     console.log('now movie :');
    //     console.log(this.state.movies);
    //     return null;
    // }
    
    componentDidMount() {
        this.getMovies();
    }

   

    render() { 
        const { movies, err, searchValue, temp} = this.state;
        let genreStr = '';
        let genreArray = [];
        movies.map((movie) => {(                   
            genreStr += movie.Genre
        )});
        genreArray = genreStr.split(',');
        let uniqueArray = [...new Set(genreArray)]; // ارایه ایی یونیک از ژانر ها
        // this.setState({ genreArray: uniqueArray});
        return (
            <>
             <div className={style['Movies-section']}>
                <div className={style['left-box']}>

                    {
                        searchValue ? temp.map(movie => (
                                    <CardMovie 
                                        id={movie.id} 
                                        poster={movie.Poster}
                                        title={movie.Title}
                                        director= {movie.Director}
                                        year= {movie.Year}
                                        genre= {movie.Genre}
                                    ></CardMovie>
                            )) 
                        :   movies.map(movie => (
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
                        <input type="search" name="" id="searchnput" value={searchValue} onChange={this.searchHandler} placeholder='search by movie title' />
                    </div>
                    <div className={style['genre-box']}>
                        {
                            uniqueArray.map(genre =>(
                             <button className={style['genre-btn']}> {genre} </button>
                            ))
                        }
                    </div>
                </div>s
             </div>
            </>
        );
    }
}
 
export default Movies;
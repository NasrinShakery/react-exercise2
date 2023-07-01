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
            userGenre:[],
            isGenreBtnClicked: false, 
        };
    }

    getMovies = ()=>{
        const url = "./json/movies.json";
        axios
            .get(url)
            .then((response) =>{
                this.setState({ movies: response.data})

                let genreStr = '';
                let genreArray = [];
                
                response.data.map((movie) => {(  

                    genreStr += movie.Genre+', '

                )});

                genreArray = genreStr.split(/, */);
                let uniqueArray = [...new Set(genreArray)];
                this.setState({ genreArray: uniqueArray.map(item => [item, false])});
                
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
        
    }

    genreBtnHandler = (event)=>{
        this.setState({isGenreBtnClicked: true})
        let userGenreArray = this.state.userGenre;
        userGenreArray.push(event.target.value);
        // console.log(event.target);
        // console.log(event.target.dataset); //DOMStringMap { isclicked → "false" }
        // console.log(event.target.getAttribute('data-isclicked')); // false or true
        let myGenreArray = this.state.genreArray
        console.log(myGenreArray);
        for(let i = 0; i < myGenreArray.length;i++){
            if(myGenreArray[i][0] === event.target.value){

                myGenreArray[i][1] = !myGenreArray[i][1];
                    break;
            }
        }
        this.setState({genreArray : myGenreArray})
        console.log(this.state.genreArray);


        // console.log(userGenreArray); //Array [ " History", " Action", " Action" ]
        let uniqueUserGenreArray = [...new Set(userGenreArray)];
        // console.log(uniqueUserGenreArray); //Array [ " History", " Action" ]
            
        let movieByUserGenre= this.state.movies.filter((movie)=>{

            let movieGenreArray = movie.Genre.split(/, */);

            for( let i=0; i< uniqueUserGenreArray.length; i++){

                let thisGenre = uniqueUserGenreArray[i];

                if (movieGenreArray.includes(thisGenre)){
                    return movie ;
                }
            }
        })
        console.log(movieByUserGenre);
        
        this.setState({temp : movieByUserGenre})
        console.log(this.state.temp);
    }
    
    componentDidMount() {
        this.getMovies();
    }

   

    render() { 
        const { movies, err, searchValue, temp, genreArray, isGenreBtnClicked} = this.state;
        console.log(genreArray);
        return (
            <>
             <div className={style['Movies-section']}>
                <div className={style['left-box']}>

                    {
                        searchValue || isGenreBtnClicked 
                            ? temp.map(movie => (
                                // movie.genre != "" &&
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
                            genreArray.map(genre => (
                                genre[0] != "" &&
                                genre[1]
                                    ?
                                        <button className={style['genre-btn-green']} onClick={this.genreBtnHandler} data-isclicked={genre[1]} value={genre[0]}> {genre} </button>
                                    :
                                         genre[0] != "" &&

                                        <button className={style['genre-btn']} onClick={this.genreBtnHandler} data-isclicked={genre[1]} value={genre[0]}> {genre} </button>


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
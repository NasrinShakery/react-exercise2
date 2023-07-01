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

        let userGenreArray = this.state.userGenre; // ژانرهای انتخابی قبلی کاربر

        let myGenreArray = this.state.genreArray; // کل ژانرهای موجود
        
        for(let i = 0; i < myGenreArray.length;i++){  //  روی آرایه ی کل ژانرها حرکت کن
            if(myGenreArray[i][0] === event.target.value){  //  اگر نام ژانر با باتنی که کلیک شده برابر بود
                // Do these ...
                myGenreArray[i][1] = !myGenreArray[i][1]; // همان ژانر را true or false  کن
                if(myGenreArray[i][1]=== true){
                    // this is a selected Genre
                    userGenreArray.push(event.target.value);
                    this.setState({isGenreBtnClicked: true});

                }else if(myGenreArray[i][1]=== false){
                    // this is deselected Genre
                    let index =userGenreArray.indexOf(event.target.value);

                    if (index !== -1) {
                        userGenreArray.splice(index, 1);
                        // console.log(myGenreArray[i][0] +"حذف شد");

                        if(userGenreArray.length===0){
                            // console.log("خالی شد");
                            this.setState({isGenreBtnClicked: false});
                        }
                    }
                }else 
                break;
            }
        }
        this.setState({usergenre : userGenreArray})
        console.log(this.state.userGenre);
            
        let movieByUserGenre= this.state.movies.filter((movie)=>{

            let movieGenreArray = movie.Genre.split(/, */);

            for( let i=0; i< this.state.userGenre.length; i++){

                let thisGenre = this.state.userGenre[i];

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
                                genre[0] != "" &&  genre[1]
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
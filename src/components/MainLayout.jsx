import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'
import MovieDetails from './MovieDetails'
import { data } from './Data';

export default function MainLayout() {

    const [actorList,setActorList] = useState([]);
    const [genreList,setGenreList] = useState([]);
    const [moviesList,setMoviesList] = useState([]);
    const [movieDetail,setMovieDetail] = useState();

    const fieldSelect = (field)=>{
        const temp = data.field.find((item)=>(item.fieldName === field)); 
        if(temp !== undefined){
            setActorList(temp.actors);
        }
        else{
            setActorList([]);
            setGenreList([]);
            setMoviesList([]);
            setMovieDetail();
        }
    }

    const actorSelect = (actor)=>{
        const temp = actorList.find((item)=>(item.actorName === actor));
        if(temp !== undefined){
           setGenreList(temp.genre);
        }
        else{
            setGenreList([]);
            setMoviesList([]);
            setMovieDetail();
        }
    }


    const genreSelect = (genre)=>{
        const temp = genreList.find((item)=>(item.genreName === genre));
        if(temp !== undefined){
            setMoviesList(temp.movies);
        }
        else{
            setMoviesList([]);
            setMovieDetail();
        }
    }

    const movieSelect = (movie)=>{
        const temp = moviesList.find((item)=>(item.movieName === movie));
        setMovieDetail(temp);
    }

    return (
        <>
            <div class="back"></div>
            <div class="container-fluid">
                <Header />
            </div>
            <div class="row justify-content-center m-0">
                <div class="col-md-4 p-4">
                    <Form actor={actorList} genre={genreList} movie={moviesList} fieldSelect= {fieldSelect} actorSelect={actorSelect} genreSelect={genreSelect} movieSelect={movieSelect}/>
                </div>
                <div class="col-md-4 p-4">
                    {movieDetail && <MovieDetails movie={movieDetail}/>}
                </div>
            </div>
        </>
    )
}

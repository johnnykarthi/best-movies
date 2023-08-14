import React from 'react'
import { data } from './Data';

export default function Form({actor,genre,movie,fieldSelect,actorSelect,genreSelect,movieSelect}) {

    
    const selectedField = (e)=>{
        fieldSelect(e.target.value);
    }

    const selectedActor = (e)=>{
        actorSelect(e.target.value);
    }

    const selectedGenre = (e)=>{
        genreSelect(e.target.value);
    }

    const selectedMovie = (e)=>{
        movieSelect(e.target.value);
    }

  return (
    <div class="main">           
                <select name="" id="" class="form-select mb-3" onChange={selectedField}>
                  <option value="">---Select field---</option>
                   {
                    data.field.map((item)=>(
                        <option value={item.fieldName} key={item.fieldName}>{item.fieldName}</option>
                    ))
                   }
                </select>
                <select name="" id="" class="form-select mb-3" onChange={selectedActor}>
                  <option value="">---Select Actor---</option>
                  {
                    actor.map((item)=>(
                        <option value={item.actorName} key={item.actorName}>{item.actorName}</option>
                    ))
                   }
                </select>

                <select name="" id="" class="form-select mb-3" onChange={selectedGenre}> 
                  <option value="">---Select Genre---</option>
                  {
                    genre.map((item)=>(
                        <option value={item.genreName} key={item.genreName}>{item.genreName}</option>
                    ))
                   }
                </select>

                <select name="" id="" class="form-select" onChange={selectedMovie}>
                  <option value="">---Select Movie---</option>
                   {
                    movie.map((item)=>(
                        <option value={item.movieName} key={item.movieName}>{item.movieName}</option>
                    ))
                   }
                </select>
            </div>
  )
}

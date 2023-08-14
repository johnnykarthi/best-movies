import React from 'react'
import Ott from './Ott';

export default function MovieDetails({ movie }) {
    return (
    <>
        <div class="movie-details">
            <div class="movie-poster">
                <img src={movie.img} width="100%" alt=""></img>
            </div>
            <p class="movie-name">{movie.movieName}</p>
            <p class="sub-details"><span class="censor">CBFC: {movie.censor}</span> - {movie.year} - {movie.genre} - {movie.duration}</p>
            <div class="watch-box">
                <p>Available on</p>
                {
                    movie.ott.map((item)=>{
                        return(
                            <Ott item={item} key={item.link}/>
                        )
                    })
                }
            </div>
            <hr></hr>
            <div class="rating-box">
                <div class="row">
                    <div class="col-5">
                        <div class="rat-box">
                            <div>
                                <p class="color">{movie.IMDb}</p>
                                <p >IMDb</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-center align-items-center">
                        <div class="line"></div>
                    </div>
                    <div class="col-5">
                        <div class="rat-box">
                            <div>
                                <p class="color">{movie.toi}</p>
                                <p>Times of India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <p class="story">{movie.story}</p>
            <p class="cast"><span class="title-dark">Director:</span> {movie.dir}</p>
            <p class="cast"><span class="title-dark">Music director:</span> {movie.music}</p>
        </div>
        <div className='copyRights'>
        <small>Copyright © 2023 <a href="https://github.com/johnnykarthi">johnnykarthi</a></small>
        </div>
    </>
    )
}

import { allMovieService, delMovieService, postMovieService, singleMovieService, updateMovieService } from "../services/movieService.js";

const allMovie = (req,res,next) => {
    allMovieService(req,res,next);
}

const postMovie = (req,res,next) => {
    postMovieService(req,res,next);
}

const singleMovie = (req,res,next) => {
    singleMovieService(req,res,next);
}

const updateMovie = (req,res,next) => {
    updateMovieService(req,res,next);
}

const delMovie = (req,res,next) => {
    delMovieService(req,res,next);
}

export {allMovie,postMovie,singleMovie,updateMovie,delMovie}
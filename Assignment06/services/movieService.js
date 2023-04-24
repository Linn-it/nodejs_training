import movieDB from '../model/movieModel.js';

const allMovieService = async(req,res,next) => {
    try {
        const movies = await movieDB.find();
        res.status(200).json({con : true,msg : 'All Movies',data : movies})
    } catch (err) {
        next(err);
    }
}

const postMovieService = async(req,res,next) => {
    try {
        const data = await new movieDB(req.body).save();
        res.status(201).json({con : true,msg : 'New Movie Added',data})
    } catch (err) {
        next(err);
    }
}

const singleMovieService = async(req,res,next) => {
    try {
        const movie = await movieDB.findById(req.params.id);
        if(movie){
            res.status(200).json({con : true,msg : 'Get Single Movie',data : movie})
        }else{
            next(new Error(`No movie with this id - ${req.params.id}`))
        }
    } catch (err) {
        next(err);
    }
}

const updateMovieService = async(req,res,next) => {
    try {
        const movie = await movieDB.findById(req.params.id);
        if(movie){
            await movieDB.findByIdAndUpdate(movie._id,req.body);
            const data = await movieDB.findById(req.params.id);
            res.status(200).json({con : true,msg : 'Update Movie Successfully',data})
        }else{
            next(new Error(`No movie with this id - ${req.params.id}`))
        }
    } catch (err) {
        next(err);
    }
}

const delMovieService = async(req,res,next) => {
    try {
        await movieDB.findByIdAndDelete(req.params.id);
        res.status(200).json({con : true,msg : 'Delete Movie Successfully'})
    } catch (err) {
        next(err);
    }
}

export {allMovieService,postMovieService,singleMovieService,updateMovieService,delMovieService}
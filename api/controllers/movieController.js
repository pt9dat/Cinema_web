const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')
const responseStatus = require('../configs/responseStatus.js')

const createMovie = async (data) => {
    var movie = new Movie({
        name: data.name,
        genre: data.genre,
        releaseDate: data.releaseDate,
        content: data.content
    })
     await movie.save()
        return responseStatus.Code200({
            message: 'Tạo phim thành công'
        })
}

const getMovies = async () => {
 const movies = await Movie.find()
 return responseStatus.Code200({
     movies: movies
 })
}

module.exports = {
    createMovie: createMovie,
    getMovies: getMovies
}
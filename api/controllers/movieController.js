const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')
const responseStatus = require('../configs/responseStatus.js')

const createMovie = async (data) => {
    var movie = new Movie({
        name: data.name,
        gerne: data.gerne,
        releaseDate: data.releaseDate,
        content: data.content
    })
     await movie.save()
        return responseStatus.Code200({
            message: 'Tạo phim thành công'
        })
}

module.exports = {
    createMovie: createMovie
}
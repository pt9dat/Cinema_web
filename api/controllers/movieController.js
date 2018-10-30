const mongoose = require('mongoose')
const Movie = mongoose.model('Movie')
const responseStatus = require('../configs/responseStatus.js')

const createMovie = async (data) => {
    var movie = new Movie({
        name: data.name,
        genre: data.genre,
        releaseDate: data.releaseDate,
        createdDate: data.createdDate,
        content: data.content,
        user: mongoose.Types.ObjectId(data.user)
    })
     movie = await movie.save()
     movie.alias = createAlias(movie.name, movie._id.toString().slice(-5))
     await movie.save()
        return responseStatus.Code200({
            message: 'Tạo phim thành công'
        })
}

const editMovie = async (data) => {
    const movie = await Movie.findOne({alias: data.alias})
    if (movie) {
        movie.name = data.name,
        movie.genre = data.genre,
        movie.releaseDate = data.releaseDate,
        movie.content = data.content,
        movie.alias = createAlias(movie.name, movie._id.toString().slice(-5))
    }
     await movie.save()
        return responseStatus.Code200({
            message: 'Sửa phim thành công',
            movies: movie
        })
}
const deleteMovie = async (data) => {
    await Movie.remove({alias: data})
    return responseStatus.Code200({
        message: 'Xóa phim thành công'
    })
}

function createAlias(str1, str2) {
    var newStr = xoa_dau(str1)
    newStr = newStr.replace(/ /gi,'-' )
    newStr = newStr + '-' + str2
    return newStr
}

function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

const getMovies = async () => {
 const movies = await Movie.find()
 return responseStatus.Code200({
     movies: movies
 })
}

const getOneMovies = async (data) => {
    const movie = await Movie.findOne({alias: data})
    if (movie) {
    return responseStatus.Code200({
        movies: movie
    })
}
   }

module.exports = {
    createMovie: createMovie,
    getMovies: getMovies,
    getOneMovies: getOneMovies,
    editMovie: editMovie,
    deleteMovie: deleteMovie
}
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var movieSchema = new Schema({
    link: String,
    name: String,
    genre: String,
    releaseDate: Number,
    content: String,
    posterURL: String,
    createdDate: Number,
    creatorId: String
    // user: { type: Schema.Types.ObjectId, ref: 'User' }
  })
  var Movie = mongoose.model('Movie', movieSchema)
  module.exports = Movie
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    avatarURL: String,
    // user: { type: Schema.Types.ObjectId, ref: 'User' }
  })
  var User = mongoose.model('User', userSchema)
  module.exports = User
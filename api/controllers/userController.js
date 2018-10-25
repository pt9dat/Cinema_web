const mongoose = require('mongoose')
const User = mongoose.model('User')
const responseStatus = require('../configs/responseStatus.js')
const config = require('../configs/config.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signup = async (data) => {
    var hashedPassword = bcrypt.hashSync(data.password, 9)

    var user = new User ({
        userName: data.userName,
        email: data.email,
        password: hashedPassword
    })
    
    await user.save()
    var token = jwt.sign({ email: data.email }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      })
        return responseStatus.Code200({
            message: 'Đăng ký tài khoản thành công',
            token: token,
            user: user
        })
        
}

const signin = async (data) => {
    const user = await User.findOne({email: data.email})
    if(user){
        var passwordIsValid = bcrypt.compareSync(data.password, user.password);
        if (!passwordIsValid) return {message: 'Đăng nhập tha bai'}
             var token = jwt.sign({ email: data.email }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
            })
        return responseStatus.Code200({
                message: 'Đăng nhập thành công',
                token: token,
                user: user
        })
    }
    // await User.findOne({ email: data.email }, function (err, user) {
    //     if (err) return {message: 'Đăng nhập tha bai1'}
    //     if (!user) return {message: 'Đăng nhập tha bai2'}
        
    //     // check if the password is valid
    //     var passwordIsValid = bcrypt.compareSync(data.password, user.password);
    //     if (!passwordIsValid) return {message: 'Đăng nhập tha bai'}
    
    //     // if user is found and password is valid
    //     // create a token
    //     var token = jwt.sign({ email: data.email }, config.secret, {
    //         expiresIn: 86400 // expires in 24 hours
    //         })
    //     return responseStatus.Code200({
    //             message: 'Đăng nhập thành công',
    //             token: token,
    //             user: user
    //     })
    

    
      
        
}

module.exports = {
    signup: signup,
    signin: signin    
}
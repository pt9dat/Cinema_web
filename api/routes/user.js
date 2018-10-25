const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController.js')
const responseStatus = require('../configs/responseStatus.js')

router.post('/signup', async (req, res) => {
    try {
        const response = await userController.signup(req.body)
        res.send(response)
    } catch (error) {
      res.send({
        error: error
      })
    }
  })

  router.post('/signin', async (req, res) => {
    try {
        const response = await userController.signin(req.body)
        res.send(response)
    } catch (error) {
      res.send({
        error: error
      })
    }
  })



  module.exports = router
const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movieController.js')
const responseStatus = require('../configs/responseStatus.js')

router.post('/', async (req, res) => {
    try {
        const response = await movieController.createMovie(req.body)
        res.send(response)
    } catch (error) {
      res.send({
        error: error
      })
    }
  })

  module.exports = router
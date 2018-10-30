const express = require('express')
const router = express.Router()

const movieController = require('../controllers/movieController.js')
const responseStatus = require('../configs/responseStatus.js')

router.get('/', async (req, res) => {
  try {
      const response = await movieController.getMovies()
      res.send(response)
  } catch (error) {
    res.send({
      error: error
    })
  }
})

router.get('/:alias', async (req, res) => {
  try {
      const response = await movieController.getOneMovies(req.params.alias)
      res.send(response)
  } catch (error) {
    res.send({
      error: error
    })
  }
})

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

  router.put('/', async (req, res) => {
    try {
        const response = await movieController.editMovie(req.body)
        res.send(response)
    } catch (error) {
      res.send({
        error: error
      })
    }
  })
  router.delete('/:alias', async (req, res) => {
    try {
        const response = await movieController.deleteMovie(req.params.alias)
        res.send(response)
    } catch (error) {
      res.send({
        error: error
      })
    }
  })



  module.exports = router
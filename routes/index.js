var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create-movie', function(req, res, next) {
  res.render('movies/create_movie', { title: 'Tạo phim' });
});

module.exports = router;

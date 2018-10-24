var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movie/create', function(req, res, next) {
  res.render('movies/create_movie', { title: 'Tạo phim' });
});

router.get('/movie', function(req, res, next) {
  res.render('movies/show_all_movie', { title: 'Danh sách phim' });
});

module.exports = router;

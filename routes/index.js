var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('project', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;

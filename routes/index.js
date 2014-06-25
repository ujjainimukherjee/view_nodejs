
var express = require('express');

var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

router.get('/contact', function(req,res){
	res.render('contact', { title: 'Contact' });
})

router.get('/help', function(req,res){
	res.render('help', { title: 'Help' });
})

module.exports = router;
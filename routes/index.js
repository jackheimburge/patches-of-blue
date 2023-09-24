var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Patches of Blue' });
});

router.get('/injustice-the-book', function(req, res) {
  res.render('injustice', {title: 'inJustice - the book'})
})

module.exports = router;

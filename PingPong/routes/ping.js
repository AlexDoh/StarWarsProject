let express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    res.render('response', {title: 'pong'});
});

module.exports = router;

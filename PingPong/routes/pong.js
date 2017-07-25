let express = require('express');
let router = express.Router();

router.post('/', function (req, res) {
    res.render('response', {title: 'pong'});
});

module.exports = router;

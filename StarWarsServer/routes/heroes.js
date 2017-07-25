let express = require('express');
let request = require('request');
let url = require('url');
let router = express.Router();

router.get('/', function (req, res) {
        let query = url.parse(req.url, true).query;
        if ('id' in query && (query.id < 89 || query.id > 0)) {
            returnJSON('http://swapi.co/api/people/' + query.id + '/?format=json');

            function returnJSON(urlForJSON) {
                request({
                    url: urlForJSON,
                    json: true
                }, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        res.json(body);
                    }
                });
            }
        }
    }
);

module.exports = router;

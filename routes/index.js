const express = require('express');
const request = require('request');
const router = express.Router();

/* GET api control. */
router.get('/', function (req, res, next) {
    res.send('api is running');
});

/* POST send-sms */
router.post('/send-sms', function (req, res, next) {
    const options = {
        'method': 'POST',
        'url': 'http://sms.verimor.com.tr/v2/send.json',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    };

    request(options, function (error, response) {
        if (error) {
            res.send(JSON.parse(JSON.stringify(error)))
        }
        res.send(JSON.parse(JSON.stringify(response.body)))
    });
});

module.exports = router;

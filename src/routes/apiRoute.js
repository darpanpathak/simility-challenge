var express = require('express');
var cookieParser = require('cookie-parser');
var apiRouter = express.Router();
var bodyparser = require('body-parser');
// var data = require('../../data/profile.json');
// var jwt = require('jsonwebtoken');
// var config = require('../config/config');

apiRouter.route('/profilelist')
    .get(function (req, res) {
        console.log("inside prof");
        res.send(data);
    });

module.exports = apiRouter;
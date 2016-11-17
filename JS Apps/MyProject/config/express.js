/* globals module require */

"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

module.exports = function(data) {
    let app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(express.static("public"));


    return app;
};
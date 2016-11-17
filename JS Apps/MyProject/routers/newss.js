/* globals module require */

"use strict";

const Router = require("express").Router;

const DEFAULTS = {
    MIN_TITLE_LENGTH: 6,
    MAX_TITLE_LENGTH: 150
};

function isValidNews(news) {
    return news;
}

module.exports = function(data) {
    let router = new Router();

    router
        .get("/", (req, res) => {
            res.send({
                result: data.getAllNewss()
                    .map(u => {
                        return {
                            id: u.id,
                            title: u.title,
                            createdOn: u.createdOn,
                            img: u.img,
                            description: u.description,
                            description_full: u.description_full
                        };
                    })
            });
        })
        .post("/", (req, res) => {
            let news = req.body;
            //console.log(news);
            let newsAdd = data.createNews(news.id, news.title, news.img, news.description, news.description_full);

            return res.status(201)
                .send({
                    result: newsAdd
                });
        });
    return router;
};
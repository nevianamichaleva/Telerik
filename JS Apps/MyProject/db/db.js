/* globals require, module */
"use strict";

const low = require("lowdb");

module.exports = {
    getDb() {
        const db = low("./db/news.json");
        db.defaults({ newss: [] })
            .value();
        db._.mixin(require("underscore-db"));
        return db;
    }
};
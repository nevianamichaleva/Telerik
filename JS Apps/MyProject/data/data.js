/* globals module require*/

"use strict";

module.exports = function(db) {
    return {
        /* NEWSS */

        getAllNewss() {
            return db.get("newss")
                .value();
        },

        getNewsByTitle(title) {
            let news = db.get("newss")
                .find({
                    title: title
                })
                .value();
            return news || null;
        },
        createNews(id, title, img, description, description_full) {
            let news = {
                id,
                createdOn: ([new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()].join('.')),
                title,
                img,
                description,
                description_full
            };

            db.get("newss").insert(news).value();

            db.write();
            console.log("Data.js news" + news)
            return news;
        }
    };
};
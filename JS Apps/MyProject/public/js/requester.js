/* globals $ Promise */

let requester = {
    get(url) {
        let promise = new Promise((resolve, reject) => {
            $.ajax({
                url,
                method: "GET",
                success(response) {
                    resolve(response);
                },
                error(err) {
                    reject(err);
                }
            });
        });
        return promise;
    },
    postJSON(url, body) {
        let promise = new Promise((resolve, reject) => {

            $.ajax({
                url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(body),
                dataType: 'json',
                success(response) {
                    resolve(response);
                },
                error(err) {
                    reject(err);
                }
            });
        });
        return promise;
    },
    getJSON(url) {
        let promise = new Promise((resolve, reject) => {

            $.ajax({
                url,
                method: "GET",
                contentType: "application/json",
                success(response) {
                    resolve(response);
                },
                error(err) {
                    reject(err);
                }
            });
        });
        return promise;
    }
};
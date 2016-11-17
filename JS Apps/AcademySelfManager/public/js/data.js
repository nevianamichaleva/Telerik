var data = function() {
    const AUTH_KEY = 'SPECIAL-AUTH-KEY';

    function userRegister(user) {
        var promise = new Promise(function(resolve, reject) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };
            $.ajax({
                url: 'api/users',
                method: "POST",
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function(res) {
                    resolve(res);
                }
            })
        });
        return promise;
    };

    function userLogin(user) {
        var promise = new Promise(function(resolve, reject) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };
            $.ajax({
                url: 'api/users/auth',
                method: "PUT",
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function(res) {
                    localStorage.setItem(AUTH_KEY, res.result.authKey);
                    resolve(res);
                }
            })
        });
        return promise;
    };

    function todoGet(user) {
        var promise = new Promise(function(resolve, reject) {

            $.ajax({
                url: 'api/todos',
                method: "GET",
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(AUTH_KEY)
                },
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                }
            })
        });
        return promise;
    };

    function todoAdd(todo) {
        var promise = new Promise(function(resolve, reject) {

            $.ajax({
                url: 'api/todos',
                method: "POST",
                contentType: 'application/json',
                data: JSON.stringify(todo),
                headers: {
                    'x-auth-key': localStorage.getItem(AUTH_KEY)
                },
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                }
            })
        });
        return promise;
    }

    function categoriesUpdate(id, state) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: 'api/todos/' + id,
                method: "PUT",
                contentType: 'application/json',
                data: JSON.stringify({ state: state }),
                headers: {
                    'x-auth-key': localStorage.getItem(AUTH_KEY)
                },
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                }
            });
        });
        return promise;
    }

    function categoriesGet() {
        var promise = new Promise(function(resolve, reject) {

            $.ajax({
                url: 'api/categories',
                method: "GET",
                contentType: 'application/json',
                headers: {
                    'x-auth-key': localStorage.getItem(AUTH_KEY)
                },
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                }
            })
        });
        return promise;
    };
    return {
        users: {
            register: userRegister,
            login: userLogin
        },
        todos: {
            get: todoGet,
            add: todoAdd,
            update: categoriesUpdate
        },
        categories: {
            get: categoriesGet
        }
    };
}();
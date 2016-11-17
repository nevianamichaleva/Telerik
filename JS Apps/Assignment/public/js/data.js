var data = function() {
    const HTTP_HEADER_KEY = "x-auth-key";
    const STORAGE_AUTH_KEY = 'SPECIAL-AUTH-KEY';
    const STORAGE_USERNAME = 'SPECIAL-AUTH-USERNAME';

    //Materials
    function materialsGet() {
        return requester.getJSON("/api/materials");
    };

    function materialsGetByID(id) {
        return requester.getJSON("/api/materials/" + id);
    }

    //Users
    function userLogin(user) {
        //var reqUser = {
        //    username: user.username,
        //    password: CryptoJS.SHA1(user.password).toString()
        //};


        return requester.putJSON("/api/users/auth/", user)
            .then(res => {
                localStorage.setItem(STORAGE_USERNAME, res.result.username);
                localStorage.setItem(STORAGE_AUTH_KEY, res.result.authKey);
            });
    };

    function userRegister(user) {
        console.log(user.username);
        //var reqUser = {
        //    username: user.username,
        //    password: CryptoJS.SHA1(user.password).toString()
        //};

        return requester.postJSON("/api/users", user);
    };

    function userLogout() {
        return Promise.resolve()
            .then(() => {
                localStorage.removeItem(STORAGE_USERNAME);
                localStorage.removeItem(STORAGE_AUTH_KEY);
            });
    };

    function currentUser() {
        var current = localStorage.getItem(STORAGE_USERNAME);
        return Promise.resolve()
            .then(() => {
                if (!current) {
                    //console.log("Current user:" + current);
                    return false;
                } else {
                    //console.log("Current user:" + current);
                    return true;
                }
            });
    }

    function getByUsername(username) {
        return requester.getJSON("/api/profiles/" + username);
    }

    return {
        materials: {
            get: materialsGet,
            getById: materialsGetByID
        },
        users: {
            login: userLogin,
            register: userRegister,
            logout: userLogout,
            current: currentUser,
            getByUser: getByUsername
        }
    };
}();
var data = function() {
    const HTTP_HEADER_KEY = "x-auth-key";
    const STORAGE_AUTH_KEY = 'SPECIAL-AUTH-KEY';
    const STORAGE_USERNAME = 'SPECIAL-AUTH-USERNAME';

    //Cookies
    function cookiesGet() {
        return requester.getJSON("/api/cookies");
    };

    function cookiesMyGet() {
        let options = {
            headers: {
                [HTTP_HEADER_KEY]: localStorage.getItem(STORAGE_AUTH_KEY)
            }
        };
        return requester.getJSON("/api/my-cookie", options);
    }

    function cookiesAdd(cookie) {
        let options = {
            headers: {
                [HTTP_HEADER_KEY]: localStorage.getItem(STORAGE_AUTH_KEY)
            }
        };
        return requester.postJSON("/api/cookies", cookie, options);
    }

    function cookiesGetDislikes(id, type) {
        let options = {
            headers: {
                [HTTP_HEADER_KEY]: localStorage.getItem(STORAGE_AUTH_KEY)
            }
        };
        return requester.putJSON("/api/cookies/" + id, { type }, options);
    }

    function cookiesGetLikes(id, type) {
        let options = {
            headers: {
                [HTTP_HEADER_KEY]: localStorage.getItem(STORAGE_AUTH_KEY)
            }
        };
        return requester.putJSON("/api/cookies/" + id, { type }, options);
    }

    //Users
    function userLogin(user) {
        var reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.password).toString()
        };
        console.log(reqUser);

        return requester.putJSON("/api/auth", reqUser)
            .then(res => {
                localStorage.setItem(STORAGE_USERNAME, res.result.username);
                localStorage.setItem(STORAGE_AUTH_KEY, res.result.authKey);
            });
    };

    function userRegister(user) {
        var reqUser = {
            username: user.username,
            passHash: CryptoJS.SHA1(user.password).toString()
        };
        console.log(reqUser);
        return requester.postJSON("/api/users", reqUser);
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
                    console.log("Current user:" + current);
                    return false;
                } else {
                    console.log("Current user:" + current);
                    return true;
                }
            });
    }

    return {
        cookies: {
            get: cookiesGet,
            add: cookiesAdd,
            getMy: cookiesMyGet,
            getLikes: cookiesGetLikes,
            getDislikes: cookiesGetDislikes
        },
        users: {
            login: userLogin,
            register: userRegister,
            logout: userLogout,
            current: currentUser
        }
    }
}();
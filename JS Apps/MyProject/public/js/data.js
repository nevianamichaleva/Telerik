var data = function() {
    const STORAGE_USERNAME = 'storage_username';
    //News
    function newsGet() {
        return requester.getJSON("/api/newss");
    };

    function newsAdd(news) {
        //var newsJSON = JSON.stringify(news);
        //console.log(newsJSON);
        return requester.postJSON("/api/newss", news);

    };

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    //Users
    function currentUser() {
        var current = localStorage.getItem('STORAGE_USERNAME');
        return Promise.resolve()
            .then(() => {
                if (!current) {
                    // console.log("Current user:" + current);
                    return false;
                } else {
                    // console.log("Current user:" + current);
                    return current;
                }
            });
    }
    return {
        news: {
            get: newsGet,
            add: newsAdd,
            guid: guid
        },
        users: {
            current: currentUser
        }
    };
}();
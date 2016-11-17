var cookieController = function() {
    var cookies;

    function all(context) {
        context.redirect('#/');
        data.cookies.get()
            .then(function(resCookies) {
                cookies = resCookies.result;
                return templates.get('home');

            })
            .then(function(template) {
                context.$element().html(template(cookies));

                $('#sortByCateg').on('click', function() {
                    context.redirect("#/sortByCategories");
                });

                $('.like').on('click', function(ev) {
                    var type = "like";
                    var id = $(this).parents('.cookie-item').attr('data-id');

                    data.cookies.getLikes(id, type)
                        .then(function(cookie) {
                            toastr.success('You like this');
                            $(ev.target).parents('.cookie-item').find(".likes").html(cookie.result.likes);
                        });
                });
                $('.dislike').on('click', function(ev) {
                    var type = "dislike";
                    var id = $(this).parents('.cookie-item').attr('data-id');

                    data.cookies.getDislikes(id, type)
                        .then(function(cookie) {
                            toastr.success('You do not like this');
                            $(ev.target).parents('.cookie-item').find(".dislikes").html(cookie.result.dislikes);
                        });
                });
                $('.reshare').on('click', function(ev) {
                    var shareCookie = {
                        text: $(ev.target).parents('.cookie-item').find(".text").text(),
                        category: $(ev.target).parents('.cookie-item').find(".category").text(),
                        img: $(ev.target).parents('.cookie-item').find(".picture").attr("src")
                    };
                    console.log(shareCookie);
                    data.cookies.add(shareCookie)
                        .then(function() {
                            toastr.success("Cookie's reshared");
                            window.location.reload();

                        });
                });
            });
    }

    function add(context) {
        templates.get('addcookies')
            .then(function(template) {
                context.$element().html(template());
                $('#btn-add').on('click', function() {
                    var cookie = {
                        text: $('#title').val(),
                        category: $('#category').val(),
                        img: $('#image').val()
                    };
                    data.cookies.add(cookie)
                        .then(function() {
                            toastr.success("Cookie's added");

                        });
                });

            });
    }

    function my(context) {
        var mycookies;

        data.cookies.getMy()
            .then(function(resCookies) {
                mycookies = resCookies.result;
                return templates.get('mycookies');
            })
            .then(function(template) {
                context.$element().html(template(mycookies));

            });
    }

    function sortByCateg(context) {
        var cookies, groups;
        data.cookies.get()
            .then(function(resCookies) {
                cookies = resCookies.result;
                groups = _.chain(cookies)
                    .groupBy("category")
                    .map(function(cookie, categoryName) {
                        return {
                            category: categoryName,
                            cookie: cookie
                        };
                    })
                    .value();
                return templates.get('categories');
            })
            .then(function(template) {
                context.$element().html(template(groups));
                console.log(groups);
            });
    }

    function category(context) {
        var findCateg = this.params.category;
        // console.log(cookies);
        filter = _.filter(cookies, { 'category': findCateg });
        //console.log(filter);
        templates.get('categoryt')
            .then(function(template) {
                // console.log(template);
                context.$element().html(template(filter));
            });
    }

    return {
        all,
        add,
        my,
        sortByCateg,
        category
    };
}();
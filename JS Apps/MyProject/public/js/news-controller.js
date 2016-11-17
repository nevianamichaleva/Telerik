var newsController = function() {

    function all(context) {
        context.redirect('#/news');
        $('li').removeClass('active');
        $('#news').addClass('active');
        $('#intro').css("background-color", '#F0F0F0');
        templates.get('blanc')
            .then(function(template) {
                $(".sidebar").html(template());
                $("#main-content").html(template());
                $("#homecontent").html(template());
            });
        data.news.get()
            .then(function(resNews) {
                var sort = _.orderBy(resNews.result, [function(o) { return o.createdOn; }], ['desc']);
                news = _.take(sort, [n = 10]);
                //console.log(news);
                return templates.get('news');

            })
            .then(function(template) {
                context.$element().html(template(news));
            });
    }

    function id(context) {
        var id = this.params.id;
        //console.log(id);
        context.redirect('#/news/' + id);

        data.news.get()
            .then(function(resNews) {
                news = resNews;
                // console.log(news);

                return templates.get('bigNews');
            })
            .then(function(template) {

                newsById = _.find(news.result, { 'id': id });
                // console.log(newsById);
                context.$element().html(template(newsById));

                $('#backButton').on("click", function() {
                    context.redirect('#/news');
                });
            });
    }

    return {
        all,
        id
    };
}();

var aboutController = function() {
    function all(context) {
        $('li').removeClass('active');
        $('#about').addClass('active');
        $('#intro').css("background-color", '#F0F0F0');
        templates.get('blanc')
            .then(function(template) {
                $(".sidebar").html(template());
                $("#main-content").html(template());
            });
        templates.get('about')
            .then(function(template) {
                context.$element().html(template());
            });
        templates.get('homecontent')
            .then(function(template) {
                $("#homecontent").html(template());
            });
    }
    return {
        all
    };
}();

var cervicesController = function() {
    function all(context) {
        $('li').removeClass('active');
        $('#cervices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarServices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('cervices')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function acc(context) {
        $('li').removeClass('active');
        $('#cervices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarServices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('cervices_acc')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function consult(context) {
        $('li').removeClass('active');
        $('#cervices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarServices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('cervices_consult')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function trz(context) {
        $('li').removeClass('active');
        $('#cervices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarServices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('cervices_trz')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function comp(context) {
        $('li').removeClass('active');
        $('#cervices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarServices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('cervices_comp')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }
    return {
        all,
        acc,
        consult,
        trz,
        comp
    };
}();
var pricesController = function() {
    function all(context) {
        $('li').removeClass('active');
        $('#prices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarPrices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('prices')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function acc(context) {
        $('li').removeClass('active');
        $('#prices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarPrices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('price_acc')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function consult(context) {
        $('li').removeClass('active');
        $('#prices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarPrices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('price_consult')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function trz(context) {
        $('li').removeClass('active');
        $('#prices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarPrices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('price_trz')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    function comp(context) {
        $('li').removeClass('active');
        $('#prices').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('sidebarPrices')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('price_comp')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }

    return {
        all,
        acc,
        consult,
        trz,
        comp
    };
}();
var contactsController = function() {
    function all(context) {
        $('li').removeClass('active');
        $('#contacts').addClass('active');
        $('#intro').css("background-color", 'white');
        templates.get('blanc')
            .then(function(template) {
                context.$element().html(template());
                $("#homecontent").html(template());
            });
        templates.get('address')
            .then(function(template) {
                $(".sidebar").html(template());
            });
        templates.get('contacts')
            .then(function(template) {
                $("#main-content").html(template());
            });
    }
    return {
        all
    };
}();
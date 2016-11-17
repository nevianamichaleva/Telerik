(function() {

    var sammyApp = Sammy('#intro', function() {
        this.get('#/', aboutController.all);
        this.get('#/news', newsController.all);
        this.get("#/news/:id", newsController.id);

        this.get("#/about", aboutController.all);
        this.get('#/cervices', cervicesController.all);
        this.get('#/cervices_acc', cervicesController.acc);
        this.get('#/cervices_consult', cervicesController.consult);
        this.get('#/cervices_trz', cervicesController.trz);
        this.get('#/cervices_comp', cervicesController.comp);
        this.get('#/prices', pricesController.all);
        this.get("#/add", function() {
            var news, lastId;
            templates.get('blanc')
                .then(function(template) {
                    $("#homecontent").html(template());
                });
            data.news.get()
                .then(function(resNews) {
                    news = resNews;
                    // console.log(news);
                    lastId = data.news.guid();
                    //console.log(lastId);
                });

            templates.get('addNews')
                .then(function(template) {
                    $("#intro").html(template());

                    $('#addnewnews').on('click', function() {
                        //console.log(($("#title").val()));
                        var newNews = {
                            id: (lastId + 1).toString(),
                            createdOn: ([new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()].join('.')),
                            title: $('#title').val(),
                            description: $('#description').val(),
                            description_full: $('#full_description').val(),
                            img: $('#img').val()
                        };
                        //console.log(newNews);
                        data.news.add(newNews)
                            .then(function() {
                                toastr.success("Новината е добавена");
                                setInterval(function() { document.location.reload(true); }, 1000);
                            });
                    });
                });

        });

        this.get("#/price_acc", pricesController.acc);
        this.get("#/price_consult", pricesController.consult);
        this.get("#/price_trz", pricesController.trz);
        this.get("#/price_comp", pricesController.comp);
        this.get('#/contacts', contactsController.all);

    }); //sammy

    $(function() {
        sammyApp.run('#/');
    });
}());